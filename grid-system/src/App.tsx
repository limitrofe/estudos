import {
  Download,
  FileImage,
  Grid3X3,
  ImageDown,
  Layers3,
  Lock,
  Plus,
  RefreshCcw,
  Trash2,
} from "lucide-react";
import { PointerEvent, useMemo, useRef, useState } from "react";

type FormatPreset = {
  id: string;
  name: string;
  ratio: string;
  width: number;
  height: number;
  columns: number;
  rows: number;
  margin: number;
  gutter: number;
  safeTop: number;
  safeBottom: number;
};

type Zone = {
  id: string;
  name: string;
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
  color: string;
};

type DraftSelection = {
  startCol: number;
  startRow: number;
  endCol: number;
  endRow: number;
};

type GridSettings = Omit<FormatPreset, "id" | "name" | "ratio"> & {
  background: string;
  lineColor: string;
  moduleColor: string;
  safeColor: string;
  lineWidth: number;
  showModules: boolean;
  showSafeZones: boolean;
};

const PRESETS: FormatPreset[] = [
  {
    id: "square",
    name: "Quadrado",
    ratio: "1:1",
    width: 1080,
    height: 1080,
    columns: 6,
    rows: 6,
    margin: 72,
    gutter: 24,
    safeTop: 0,
    safeBottom: 0,
  },
  {
    id: "portrait",
    name: "Retrato Feed",
    ratio: "4:5",
    width: 1080,
    height: 1350,
    columns: 6,
    rows: 8,
    margin: 72,
    gutter: 24,
    safeTop: 0,
    safeBottom: 0,
  },
  {
    id: "story",
    name: "Stories/Reels",
    ratio: "9:16",
    width: 1080,
    height: 1920,
    columns: 6,
    rows: 12,
    margin: 64,
    gutter: 24,
    safeTop: 250,
    safeBottom: 340,
  },
  {
    id: "editorial",
    name: "Editorial Denso",
    ratio: "4:5",
    width: 1080,
    height: 1350,
    columns: 12,
    rows: 15,
    margin: 60,
    gutter: 16,
    safeTop: 0,
    safeBottom: 0,
  },
];

const INITIAL_SETTINGS: GridSettings = {
  ...PRESETS[0],
  background: "#f7f3ec",
  lineColor: "#111111",
  moduleColor: "#d4e4df",
  safeColor: "#ef6f6c",
  lineWidth: 2,
  showModules: true,
  showSafeZones: true,
};

const ZONE_COLORS = ["#f4c95d", "#45a29e", "#ef6f6c", "#6d8ea0", "#a77bf3"];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function numberInputValue(value: number) {
  return Number.isFinite(value) ? String(value) : "";
}

function getGridMetrics(settings: GridSettings) {
  const gridX = settings.margin;
  const gridY = settings.margin + settings.safeTop;
  const gridWidth = Math.max(1, settings.width - settings.margin * 2);
  const gridHeight = Math.max(
    1,
    settings.height - settings.margin * 2 - settings.safeTop - settings.safeBottom,
  );
  const moduleWidth = Math.max(
    1,
    (gridWidth - settings.gutter * (settings.columns - 1)) / settings.columns,
  );
  const moduleHeight = Math.max(
    1,
    (gridHeight - settings.gutter * (settings.rows - 1)) / settings.rows,
  );

  return { gridX, gridY, gridWidth, gridHeight, moduleWidth, moduleHeight };
}

function zoneBounds(zone: Zone, settings: GridSettings) {
  const { gridX, gridY, moduleWidth, moduleHeight } = getGridMetrics(settings);
  const x = gridX + zone.col * (moduleWidth + settings.gutter);
  const y = gridY + zone.row * (moduleHeight + settings.gutter);
  const width = zone.colSpan * moduleWidth + (zone.colSpan - 1) * settings.gutter;
  const height = zone.rowSpan * moduleHeight + (zone.rowSpan - 1) * settings.gutter;

  return { x, y, width, height };
}

function selectionToZone(selection: DraftSelection, settings: GridSettings): Zone {
  const col = Math.min(selection.startCol, selection.endCol);
  const row = Math.min(selection.startRow, selection.endRow);
  const endCol = Math.max(selection.startCol, selection.endCol);
  const endRow = Math.max(selection.startRow, selection.endRow);

  return {
    id: crypto.randomUUID(),
    name: `Zona ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
    col,
    row,
    colSpan: clamp(endCol - col + 1, 1, settings.columns - col),
    rowSpan: clamp(endRow - row + 1, 1, settings.rows - row),
    color: ZONE_COLORS[Math.floor(Math.random() * ZONE_COLORS.length)],
  };
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildSvg(settings: GridSettings, zones: Zone[]) {
  const { gridX, gridY, gridWidth, gridHeight, moduleWidth, moduleHeight } =
    getGridMetrics(settings);
  const modules: string[] = [];
  const verticalLines: string[] = [];
  const horizontalLines: string[] = [];

  for (let row = 0; row < settings.rows; row += 1) {
    for (let col = 0; col < settings.columns; col += 1) {
      const x = gridX + col * (moduleWidth + settings.gutter);
      const y = gridY + row * (moduleHeight + settings.gutter);
      modules.push(
        `<rect x="${x}" y="${y}" width="${moduleWidth}" height="${moduleHeight}" fill="${settings.moduleColor}" fill-opacity="${settings.showModules ? 0.24 : 0}" />`,
      );
    }
  }

  for (let col = 0; col <= settings.columns; col += 1) {
    const x =
      col === settings.columns
        ? gridX + gridWidth
        : gridX + col * (moduleWidth + settings.gutter);
    verticalLines.push(
      `<line x1="${x}" y1="${gridY}" x2="${x}" y2="${gridY + gridHeight}" stroke="${settings.lineColor}" stroke-width="${settings.lineWidth}" stroke-opacity="0.85" />`,
    );
    if (col < settings.columns && settings.gutter > 0) {
      const gutterX = x + moduleWidth;
      verticalLines.push(
        `<line x1="${gutterX}" y1="${gridY}" x2="${gutterX}" y2="${gridY + gridHeight}" stroke="${settings.lineColor}" stroke-width="${settings.lineWidth}" stroke-opacity="0.22" />`,
      );
    }
  }

  for (let row = 0; row <= settings.rows; row += 1) {
    const y =
      row === settings.rows
        ? gridY + gridHeight
        : gridY + row * (moduleHeight + settings.gutter);
    horizontalLines.push(
      `<line x1="${gridX}" y1="${y}" x2="${gridX + gridWidth}" y2="${y}" stroke="${settings.lineColor}" stroke-width="${settings.lineWidth}" stroke-opacity="0.85" />`,
    );
    if (row < settings.rows && settings.gutter > 0) {
      const gutterY = y + moduleHeight;
      horizontalLines.push(
        `<line x1="${gridX}" y1="${gutterY}" x2="${gridX + gridWidth}" y2="${gutterY}" stroke="${settings.lineColor}" stroke-width="${settings.lineWidth}" stroke-opacity="0.22" />`,
      );
    }
  }

  const safeZones =
    settings.showSafeZones && (settings.safeTop > 0 || settings.safeBottom > 0)
      ? [
          settings.safeTop > 0
            ? `<rect x="0" y="0" width="${settings.width}" height="${settings.safeTop}" fill="${settings.safeColor}" fill-opacity="0.14" />`
            : "",
          settings.safeBottom > 0
            ? `<rect x="0" y="${settings.height - settings.safeBottom}" width="${settings.width}" height="${settings.safeBottom}" fill="${settings.safeColor}" fill-opacity="0.14" />`
            : "",
        ].join("")
      : "";

  const zoneMarkup = zones
    .map((zone) => {
      const bounds = zoneBounds(zone, settings);
      return `<g><rect x="${bounds.x}" y="${bounds.y}" width="${bounds.width}" height="${bounds.height}" rx="0" fill="${zone.color}" fill-opacity="0.3" stroke="${zone.color}" stroke-width="${settings.lineWidth * 2}" /><text x="${bounds.x + 16}" y="${bounds.y + 34}" fill="${settings.lineColor}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">${escapeXml(zone.name)}</text></g>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${settings.width}" height="${settings.height}" viewBox="0 0 ${settings.width} ${settings.height}">
  <rect width="100%" height="100%" fill="${settings.background}" />
  ${safeZones}
  <rect x="${gridX}" y="${gridY}" width="${gridWidth}" height="${gridHeight}" fill="none" stroke="${settings.lineColor}" stroke-width="${settings.lineWidth * 1.5}" />
  ${modules.join("\n  ")}
  ${zoneMarkup}
  ${verticalLines.join("\n  ")}
  ${horizontalLines.join("\n  ")}
</svg>`;
}

function downloadBlob(blob: Blob, filename: string) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

async function exportRaster(
  settings: GridSettings,
  zones: Zone[],
  type: "image/png" | "image/jpeg",
) {
  const svg = buildSvg(settings, zones);
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);
  const image = new Image();

  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = reject;
    image.src = url;
  });

  const canvas = document.createElement("canvas");
  canvas.width = settings.width;
  canvas.height = settings.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = settings.background;
  ctx.fillRect(0, 0, settings.width, settings.height);
  ctx.drawImage(image, 0, 0);
  URL.revokeObjectURL(url);

  canvas.toBlob(
    (blob) => {
      if (!blob) return;
      downloadBlob(blob, `brockmann-grid-${settings.width}x${settings.height}.${type === "image/png" ? "png" : "jpg"}`);
    },
    type,
    0.94,
  );
}

function App() {
  const [settings, setSettings] = useState<GridSettings>(INITIAL_SETTINGS);
  const [zones, setZones] = useState<Zone[]>([
    { id: crypto.randomUUID(), name: "Hero", col: 0, row: 0, colSpan: 6, rowSpan: 2, color: "#f4c95d" },
    { id: crypto.randomUUID(), name: "Texto", col: 1, row: 3, colSpan: 4, rowSpan: 2, color: "#45a29e" },
  ]);
  const [selection, setSelection] = useState<DraftSelection | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const metrics = useMemo(() => getGridMetrics(settings), [settings]);
  const svgMarkup = useMemo(() => buildSvg(settings, zones), [settings, zones]);
  const activePreset = PRESETS.find(
    (preset) =>
      preset.width === settings.width &&
      preset.height === settings.height &&
      preset.columns === settings.columns &&
      preset.rows === settings.rows,
  );

  function updateSetting<K extends keyof GridSettings>(key: K, value: GridSettings[K]) {
    setSettings((current) => ({ ...current, [key]: value }));
  }

  function applyPreset(preset: FormatPreset) {
    setSettings((current) => ({
      ...current,
      width: preset.width,
      height: preset.height,
      columns: preset.columns,
      rows: preset.rows,
      margin: preset.margin,
      gutter: preset.gutter,
      safeTop: preset.safeTop,
      safeBottom: preset.safeBottom,
    }));
    setZones([]);
  }

  function pointerToCell(event: PointerEvent<SVGSVGElement>) {
    if (!svgRef.current) return null;
    const point = svgRef.current.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const transform = svgRef.current.getScreenCTM();
    if (!transform) return null;
    const transformed = point.matrixTransform(transform.inverse());
    const rawCol = Math.floor((transformed.x - metrics.gridX) / (metrics.moduleWidth + settings.gutter));
    const rawRow = Math.floor((transformed.y - metrics.gridY) / (metrics.moduleHeight + settings.gutter));
    const col = clamp(rawCol, 0, settings.columns - 1);
    const row = clamp(rawRow, 0, settings.rows - 1);
    const inGrid =
      transformed.x >= metrics.gridX &&
      transformed.x <= metrics.gridX + metrics.gridWidth &&
      transformed.y >= metrics.gridY &&
      transformed.y <= metrics.gridY + metrics.gridHeight;

    return inGrid ? { col, row } : null;
  }

  function handlePointerDown(event: PointerEvent<SVGSVGElement>) {
    const cell = pointerToCell(event);
    if (!cell) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setSelection({ startCol: cell.col, startRow: cell.row, endCol: cell.col, endRow: cell.row });
  }

  function handlePointerMove(event: PointerEvent<SVGSVGElement>) {
    if (!selection) return;
    const cell = pointerToCell(event);
    if (!cell) return;
    setSelection((current) => (current ? { ...current, endCol: cell.col, endRow: cell.row } : null));
  }

  function handlePointerUp() {
    if (!selection) return;
    const zone = selectionToZone(selection, settings);
    setZones((current) => [...current, zone]);
    setSelection(null);
  }

  function addZone() {
    const colSpan = Math.min(3, settings.columns);
    const rowSpan = Math.min(2, settings.rows);
    setZones((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        name: `Zona ${current.length + 1}`,
        col: 0,
        row: 0,
        colSpan,
        rowSpan,
        color: ZONE_COLORS[current.length % ZONE_COLORS.length],
      },
    ]);
  }

  function downloadSvg() {
    downloadBlob(
      new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" }),
      `brockmann-grid-${settings.width}x${settings.height}.svg`,
    );
  }

  const draftZone = selection ? selectionToZone(selection, settings) : null;

  return (
    <main className="app-shell">
      <aside className="control-panel" aria-label="Configurações do grid">
        <header className="brand-row">
          <div>
            <p className="eyebrow">Josef Muller-Brockmann</p>
            <h1>Grid System Design</h1>
          </div>
          <Grid3X3 aria-hidden="true" />
        </header>

        <section className="panel-section">
          <div className="section-title">
            <Layers3 aria-hidden="true" />
            <h2>Formato</h2>
          </div>
          <div className="preset-grid" role="list">
            {PRESETS.map((preset) => (
              <button
                className={activePreset?.id === preset.id ? "preset active" : "preset"}
                key={preset.id}
                onClick={() => applyPreset(preset)}
                type="button"
              >
                <span>{preset.name}</span>
                <small>{preset.ratio} · {preset.width}x{preset.height}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="panel-section compact-grid">
          <NumberField label="Largura" value={settings.width} min={320} max={4000} onChange={(value) => updateSetting("width", value)} />
          <NumberField label="Altura" value={settings.height} min={320} max={4000} onChange={(value) => updateSetting("height", value)} />
          <NumberField label="Colunas" value={settings.columns} min={1} max={24} onChange={(value) => updateSetting("columns", value)} />
          <NumberField label="Linhas" value={settings.rows} min={1} max={30} onChange={(value) => updateSetting("rows", value)} />
          <NumberField label="Margem" value={settings.margin} min={0} max={400} onChange={(value) => updateSetting("margin", value)} />
          <NumberField label="Calha" value={settings.gutter} min={0} max={160} onChange={(value) => updateSetting("gutter", value)} />
          <NumberField label="Safe topo" value={settings.safeTop} min={0} max={600} onChange={(value) => updateSetting("safeTop", value)} />
          <NumberField label="Safe base" value={settings.safeBottom} min={0} max={700} onChange={(value) => updateSetting("safeBottom", value)} />
        </section>

        <section className="panel-section">
          <div className="section-title">
            <Lock aria-hidden="true" />
            <h2>Visual</h2>
          </div>
          <div className="swatch-row">
            <ColorField label="Fundo" value={settings.background} onChange={(value) => updateSetting("background", value)} />
            <ColorField label="Linhas" value={settings.lineColor} onChange={(value) => updateSetting("lineColor", value)} />
            <ColorField label="Módulos" value={settings.moduleColor} onChange={(value) => updateSetting("moduleColor", value)} />
            <ColorField label="Safe" value={settings.safeColor} onChange={(value) => updateSetting("safeColor", value)} />
          </div>
          <label className="range-field">
            <span>Espessura</span>
            <input
              type="range"
              min="1"
              max="10"
              value={settings.lineWidth}
              onChange={(event) => updateSetting("lineWidth", Number(event.target.value))}
            />
            <strong>{settings.lineWidth}px</strong>
          </label>
          <div className="toggle-row">
            <label>
              <input
                type="checkbox"
                checked={settings.showModules}
                onChange={(event) => updateSetting("showModules", event.target.checked)}
              />
              Módulos
            </label>
            <label>
              <input
                type="checkbox"
                checked={settings.showSafeZones}
                onChange={(event) => updateSetting("showSafeZones", event.target.checked)}
              />
              Zonas de segurança
            </label>
          </div>
        </section>

        <section className="panel-section">
          <div className="section-title split">
            <span>
              <Layers3 aria-hidden="true" />
              <h2>Zonas espaciais</h2>
            </span>
            <button className="icon-button" onClick={addZone} type="button" title="Adicionar zona" aria-label="Adicionar zona">
              <Plus size={18} />
            </button>
          </div>
          <div className="zone-list">
            {zones.map((zone) => (
              <div className="zone-item" key={zone.id}>
                <input
                  aria-label="Nome da zona"
                  value={zone.name}
                  onChange={(event) =>
                    setZones((current) =>
                      current.map((item) => (item.id === zone.id ? { ...item, name: event.target.value } : item)),
                    )
                  }
                />
                <input
                  aria-label="Cor da zona"
                  type="color"
                  value={zone.color}
                  onChange={(event) =>
                    setZones((current) =>
                      current.map((item) => (item.id === zone.id ? { ...item, color: event.target.value } : item)),
                    )
                  }
                />
                <button
                  className="icon-button danger"
                  onClick={() => setZones((current) => current.filter((item) => item.id !== zone.id))}
                  type="button"
                  title="Remover zona"
                  aria-label={`Remover ${zone.name}`}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </aside>

      <section className="workspace">
        <div className="toolbar">
          <div>
            <p>{settings.columns} colunas x {settings.rows} linhas</p>
            <strong>{settings.width} x {settings.height}px</strong>
          </div>
          <div className="export-buttons">
            <button type="button" onClick={downloadSvg}>
              <Download size={18} />
              SVG
            </button>
            <button type="button" onClick={() => exportRaster(settings, zones, "image/png")}>
              <ImageDown size={18} />
              PNG
            </button>
            <button type="button" onClick={() => exportRaster(settings, zones, "image/jpeg")}>
              <FileImage size={18} />
              JPG
            </button>
            <button type="button" className="ghost" onClick={() => setZones([])}>
              <RefreshCcw size={18} />
              Limpar
            </button>
          </div>
        </div>

        <div className="stage">
          <svg
            ref={svgRef}
            className="grid-preview"
            viewBox={`0 0 ${settings.width} ${settings.height}`}
            style={{ aspectRatio: `${settings.width} / ${settings.height}` }}
            role="img"
            aria-label="Preview interativo do grid"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => setSelection(null)}
          >
            <rect width={settings.width} height={settings.height} fill={settings.background} />
            {settings.showSafeZones && settings.safeTop > 0 && (
              <rect width={settings.width} height={settings.safeTop} fill={settings.safeColor} opacity="0.14" />
            )}
            {settings.showSafeZones && settings.safeBottom > 0 && (
              <rect
                y={settings.height - settings.safeBottom}
                width={settings.width}
                height={settings.safeBottom}
                fill={settings.safeColor}
                opacity="0.14"
              />
            )}
            <rect
              x={metrics.gridX}
              y={metrics.gridY}
              width={metrics.gridWidth}
              height={metrics.gridHeight}
              fill="none"
              stroke={settings.lineColor}
              strokeWidth={settings.lineWidth * 1.5}
            />
            {Array.from({ length: settings.rows }).map((_, row) =>
              Array.from({ length: settings.columns }).map((__, col) => {
                const x = metrics.gridX + col * (metrics.moduleWidth + settings.gutter);
                const y = metrics.gridY + row * (metrics.moduleHeight + settings.gutter);
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={x}
                    y={y}
                    width={metrics.moduleWidth}
                    height={metrics.moduleHeight}
                    fill={settings.moduleColor}
                    opacity={settings.showModules ? 0.24 : 0}
                  />
                );
              }),
            )}
            {zones.map((zone) => {
              const bounds = zoneBounds(zone, settings);
              return (
                <g key={zone.id}>
                  <rect
                    x={bounds.x}
                    y={bounds.y}
                    width={bounds.width}
                    height={bounds.height}
                    fill={zone.color}
                    opacity="0.3"
                    stroke={zone.color}
                    strokeWidth={settings.lineWidth * 2}
                  />
                  <text
                    x={bounds.x + 16}
                    y={bounds.y + 34}
                    fill={settings.lineColor}
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="28"
                    fontWeight="700"
                  >
                    {zone.name}
                  </text>
                </g>
              );
            })}
            {draftZone && (
              <rect
                {...zoneBounds(draftZone, settings)}
                fill="#111111"
                opacity="0.14"
                stroke="#111111"
                strokeDasharray="18 14"
                strokeWidth={settings.lineWidth * 2}
              />
            )}
            {Array.from({ length: settings.columns + 1 }).map((_, col) => {
              const x =
                col === settings.columns
                  ? metrics.gridX + metrics.gridWidth
                  : metrics.gridX + col * (metrics.moduleWidth + settings.gutter);
              return (
                <g key={`v-${col}`}>
                  <line
                    x1={x}
                    y1={metrics.gridY}
                    x2={x}
                    y2={metrics.gridY + metrics.gridHeight}
                    stroke={settings.lineColor}
                    strokeWidth={settings.lineWidth}
                    opacity="0.85"
                  />
                  {col < settings.columns && settings.gutter > 0 && (
                    <line
                      x1={x + metrics.moduleWidth}
                      y1={metrics.gridY}
                      x2={x + metrics.moduleWidth}
                      y2={metrics.gridY + metrics.gridHeight}
                      stroke={settings.lineColor}
                      strokeWidth={settings.lineWidth}
                      opacity="0.22"
                    />
                  )}
                </g>
              );
            })}
            {Array.from({ length: settings.rows + 1 }).map((_, row) => {
              const y =
                row === settings.rows
                  ? metrics.gridY + metrics.gridHeight
                  : metrics.gridY + row * (metrics.moduleHeight + settings.gutter);
              return (
                <g key={`h-${row}`}>
                  <line
                    x1={metrics.gridX}
                    y1={y}
                    x2={metrics.gridX + metrics.gridWidth}
                    y2={y}
                    stroke={settings.lineColor}
                    strokeWidth={settings.lineWidth}
                    opacity="0.85"
                  />
                  {row < settings.rows && settings.gutter > 0 && (
                    <line
                      x1={metrics.gridX}
                      y1={y + metrics.moduleHeight}
                      x2={metrics.gridX + metrics.gridWidth}
                      y2={y + metrics.moduleHeight}
                      stroke={settings.lineColor}
                      strokeWidth={settings.lineWidth}
                      opacity="0.22"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </section>
    </main>
  );
}

type NumberFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

function NumberField({ label, value, min, max, onChange }: NumberFieldProps) {
  return (
    <label className="number-field">
      <span>{label}</span>
      <input
        type="number"
        value={numberInputValue(value)}
        min={min}
        max={max}
        onChange={(event) => onChange(clamp(Number(event.target.value), min, max))}
      />
    </label>
  );
}

type ColorFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function ColorField({ label, value, onChange }: ColorFieldProps) {
  return (
    <label className="color-field">
      <input type="color" value={value} onChange={(event) => onChange(event.target.value)} />
      <span>{label}</span>
    </label>
  );
}

export default App;
