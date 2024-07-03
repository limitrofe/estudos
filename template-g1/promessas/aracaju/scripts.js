document.addEventListener('DOMContentLoaded', () => {
    fetch('aracaju.json')
        .then(response => response.json())
        .then(data => {
            displayPromessas(data);
            updateFilterCounts(data);
            createPromiseGrid(data);
            displayMaxStats(data);
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});

const filterButtons = document.querySelectorAll('.filter-button');
const promessasContainer = document.getElementById('promessasContainer');
const lightbox = document.getElementById('lightbox');
const lightboxText = document.getElementById('lightboxText');
const closeBtn = document.querySelector('.lightbox .close');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        fetch('aracaju.json')
            .then(response => response.json())
            .then(data => {
                const filteredPromessas = filterValue === 'todos' ? data : data.filter(promessa => promessa.status === filterValue);
                displayPromessas(filteredPromessas);
            })
            .catch(error => console.error('Erro ao carregar os dados:', error));
    });
});

function displayPromessas(promessas) {
    promessasContainer.innerHTML = '';
    const groupedPromessas = groupBy(promessas, 'tema');
    for (const tema in groupedPromessas) {
        const count = groupedPromessas[tema].length;
        const countText = count === 1 ? 'promessa' : 'promessas';
        const temaGroup = document.createElement('div');
        temaGroup.classList.add('temaGroup');
        temaGroup.innerHTML = `<h2>${tema} (${count} ${countText})</h2>
            <div class="swiper-container">
                <div class="swiper-wrapper"></div>
            </div>`;
        
        const swiperWrapper = temaGroup.querySelector('.swiper-wrapper');
        groupedPromessas[tema].forEach(promessa => {
            const promessaBox = document.createElement('div');
            promessaBox.classList.add('swiper-slide');
            promessaBox.innerHTML = `
                <div class="promessaBox ${getStatusClass(promessa.status)}">
                    <p><strong>Promessa:</strong> ${promessa.promessa}</p>
                    <p><strong>Status:</strong> ${promessa.status}</p>
                    <button onclick="openLightbox('${promessa.textoLightbox}')">Leia Mais</button>
                </div>
            `;
            swiperWrapper.appendChild(promessaBox);
        });

        promessasContainer.appendChild(temaGroup);
    }
}

function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
    }, {});
}

function getStatusClass(status) {
    switch (status) {
        case 'cumpriu':
            return 'cumpriu';
        case 'em-parte':
            return 'em-parte';
        case 'nao-cumpriu-ainda':
            return 'nao-cumpriu';
        default:
            return '';
    }
}

function openLightbox(text) {
    if (!text) {
        console.error('No text provided for the lightbox');
        return;
    }
    lightbox.style.display = 'flex';
    lightboxText.textContent = text;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

closeBtn.addEventListener('click', closeLightbox);

function updateFilterCounts(promessas) {
    const totalCounts = {
        todos: promessas.length,
        cumpriu: promessas.filter(p => p.status === 'cumpriu').length,
        'em-parte': promessas.filter(p => p.status === 'em-parte').length,
        'nao-cumpriu-ainda': promessas.filter(p => p.status === 'nao-cumpriu-ainda').length,
    };

    document.getElementById('filter-todos').innerHTML = `<i class="icon fas fa-list"></i> Todos (${totalCounts.todos})`;
    document.getElementById('filter-cumpriu').innerHTML = `<i class="icon fas fa-check-circle"></i> Cumpriu (${totalCounts.cumpriu})`;
    document.getElementById('filter-em-parte').innerHTML = `<i class="icon fas fa-exclamation-circle"></i> Em Parte (${totalCounts['em-parte']})`;
    document.getElementById('filter-nao-cumpriu').innerHTML = `<i class="icon fas fa-times-circle"></i> Não Cumpriu (${totalCounts['nao-cumpriu-ainda']})`;
}

function createPromiseGrid(data) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');

    data.forEach(item => {
        const square = document.createElement('div');
        square.classList.add('grid-square', getStatusClass(item.status));
        gridContainer.appendChild(square);
    });

    const headerContent = document.querySelector('.header-content');
    headerContent.appendChild(gridContainer);
}

function displayMaxStats(data) {
    const temaCounts = data.reduce((acc, promessa) => {
        const tema = promessa.tema;
        const status = promessa.status;
        if (!acc[tema]) {
            acc[tema] = { total: 0, cumpriu: 0, 'em-parte': 0, 'nao-cumpriu-ainda': 0 };
        }
        acc[tema].total++;
        acc[tema][status]++;
        return acc;
    }, {});

    let maxCumpriu = { tema: '', count: 0, total: 0 };
    let maxEmParte = { tema: '', count: 0, total: 0 };
    let maxNaoCumpriu = { tema: '', count: 0, total: 0 };
    let maxTotal = { tema: '', count: 0 };

    for (const [tema, counts] of Object.entries(temaCounts)) {
        if (counts.cumpriu > maxCumpriu.count) {
            maxCumpriu = { tema, count: counts.cumpriu, total: counts.total };
        }
        if (counts['em-parte'] > maxEmParte.count) {
            maxEmParte = { tema, count: counts['em-parte'], total: counts.total };
        }
        if (counts['nao-cumpriu-ainda'] > maxNaoCumpriu.count) {
            maxNaoCumpriu = { tema, count: counts['nao-cumpriu-ainda'], total: counts.total };
        }
        if (counts.total > maxTotal.count) {
            maxTotal = { tema, count: counts.total };
        }
    }

    const headerContent = document.querySelector('.header-content');
    const statsDiv = document.createElement('div');
    statsDiv.classList.add('stats');
    statsDiv.innerHTML = `
        <p>Tema com mais promessas: ${maxTotal.tema} (${maxTotal.count} de ${data.length} total de promessas)</p>
        <p>Tema que mais cumpriu: ${maxCumpriu.tema} (${maxCumpriu.count} de ${maxCumpriu.total} promessas em ${maxCumpriu.tema})</p>
        <p>Tema que mais cumpriu em partes: ${maxEmParte.tema} (${maxEmParte.count} de ${maxEmParte.total} promessas em ${maxEmParte.tema})</p>
        <p>Tema que mais não cumpriu: ${maxNaoCumpriu.tema} (${maxNaoCumpriu.count} de ${maxNaoCumpriu.total} promessas em ${maxNaoCumpriu.tema})</p>
    `;

    headerContent.appendChild(statsDiv);
}
