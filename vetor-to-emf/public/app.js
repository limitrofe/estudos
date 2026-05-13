const form = document.querySelector('#uploadForm');
const fileInput = document.querySelector('#fileInput');
const fileTitle = document.querySelector('#fileTitle');
const fileMeta = document.querySelector('#fileMeta');
const dropzone = document.querySelector('#dropzone');
const button = document.querySelector('#generateButton');
const message = document.querySelector('#message');
const progress = document.querySelector('#progress');
const inkscapeStatus = document.querySelector('#inkscapeStatus');
const result = document.querySelector('#result');
const resultName = document.querySelector('#resultName');
const report = document.querySelector('#report');

loadStatus();

fileInput.addEventListener('change', () => {
  updateSelectedFile(fileInput.files[0]);
});

dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  dropzone.classList.remove('dragover');

  if (event.dataTransfer.files.length > 0) {
    fileInput.files = event.dataTransfer.files;
    updateSelectedFile(event.dataTransfer.files[0]);
  }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!fileInput.files[0]) {
    setMessage('Escolha um arquivo .ai ou .pdf antes de gerar.', 'bad');
    return;
  }

  setBusy(true);
  setMessage('Convertendo vetor e preparando o download...');
  result.hidden = true;

  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error(await readErrorResponse(response));
    }

    const blob = await response.blob();
    const filename = getFilename(response) || buildEmfFilename(fileInput.files[0].name);
    downloadBlob(blob, filename);
    showResult(filename, response.headers.get('x-vector-report'));
    setMessage('EMF gerado. O download deve iniciar automaticamente.');
  } catch (err) {
    setMessage(err.message, 'bad');
  } finally {
    setBusy(false);
  }
});

async function loadStatus() {
  try {
    const response = await fetch('/api/status');
    const status = await readJsonResponse(response);

    setStatus(inkscapeStatus, status.converterAvailable ? 'Disponivel' : 'Configurar', status.converterAvailable ? 'ok' : 'bad');

    if (!status.converterAvailable) {
      setMessage('Configure CONVERSION_WORKER_URL na Vercel ou instale Inkscape no ambiente local.', 'bad');
    }
  } catch (err) {
    setMessage(`Nao consegui verificar o ambiente: ${err.message}`, 'bad');
  }
}

function updateSelectedFile(file) {
  if (!file) {
    fileTitle.textContent = 'Selecionar arquivo Illustrator ou PDF';
    fileMeta.textContent = 'O resultado sera baixado como .emf.';
    return;
  }

  fileTitle.textContent = file.name;
  fileMeta.textContent = `${formatBytes(file.size)} pronto para converter`;
}

function showResult(filename, encodedReport) {
  result.hidden = false;
  resultName.textContent = filename;
  report.innerHTML = '';

  const parsedReport = parseReport(encodedReport);
  addReportItem('Formato', 'EMF');
  addReportItem('MIME', 'image/x-emf');
  addReportItem('Avisos', parsedReport.warnings.length ? parsedReport.warnings.join(', ') : 'Nenhum');
}

function parseReport(encodedReport) {
  if (!encodedReport) {
    return { warnings: [] };
  }

  try {
    return JSON.parse(decodeURIComponent(encodedReport));
  } catch {
    return { warnings: [] };
  }
}

function addReportItem(label, value) {
  const dt = document.createElement('dt');
  dt.textContent = label;

  const dd = document.createElement('dd');
  dd.textContent = value;

  report.append(dt, dd);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getFilename(response) {
  const disposition = response.headers.get('content-disposition') || '';
  const match = disposition.match(/filename="([^"]+)"/);
  return match?.[1];
}

function buildEmfFilename(filename) {
  return `${filename.replace(/\.[^.]+$/, '')}.emf`;
}

function setBusy(isBusy) {
  button.disabled = isBusy;
  button.textContent = isBusy ? 'Gerando...' : 'Gerar EMF';
  progress.classList.toggle('active', isBusy);
}

function setStatus(element, text, tone) {
  element.textContent = text;
  element.classList.toggle('warn', tone === 'warn');
  element.classList.toggle('bad', tone === 'bad');
}

function setMessage(text, tone = 'ok') {
  message.textContent = text;
  message.style.color = tone === 'bad' ? 'var(--danger)' : tone === 'warn' ? 'var(--warning)' : 'var(--muted)';
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function readJsonResponse(response) {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return response.json();
  }

  const text = await response.text();
  throw new Error(text.slice(0, 120).replace(/\s+/g, ' ') || `HTTP ${response.status}`);
}

async function readErrorResponse(response) {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const payload = await response.json();
    return payload.error || `HTTP ${response.status}`;
  }

  return (await response.text()).slice(0, 180).replace(/\s+/g, ' ') || `HTTP ${response.status}`;
}
