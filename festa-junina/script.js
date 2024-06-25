// script.js
const festaData = {
    10: {
        "Cachorro quente": 2,
        "Dadinho de tapioca": 2,
        "Sanduíche de farofa de carne seca": null,
        "Cuscuz paulista": null,
        "Saquinho de pipoca": 20,
        "Amendoim torrado (em gr)": 300,
        "Espetinhos": null,
        "Espiga de milho": null,
        "Bolo de fubá (pedaço)": 1,
        "Bolo flocão cremoso": 2,
        "Brigadeiro de paçoca (unidade)": 2,
        "Caixa paçoquinha rolha": 1,
        "Canjica com coco (12 unidades)": 1.5,
        "Sagu com vinho (20 unidades)": null,
        "Quentão (3 lts)": 0.5,
        "Vinho quente (20 unidades)": null,
        "Latas refrigerante": 3,
        "Lata cerveja (335ml)": 20,
        "Latas suco": 2,
        "Latas água": 3,
        "recipeLink": {
            "Cachorro quente": "https://example.com/receita-cachorro-quente",
            "Dadinho de tapioca": "https://example.com/receita-dadinho-tapioca",
            "Saquinho de pipoca": "https://example.com/receita-pipoca",
            // Adicione os links das receitas para todos os itens
        }
    },
    20: {
        "Cachorro quente": 2,
        "Dadinho de tapioca": 3,
        "Sanduíche de farofa de carne seca": 4,
        "Cuscuz paulista": null,
        "Saquinho de pipoca": 40,
        "Amendoim torrado (em gr)": 600,
        "Espetinhos": null,
        "Espiga de milho": null,
        "Bolo de fubá (pedaço)": 1,
        "Bolo flocão cremoso": 1,
        "Brigadeiro de paçoca (unidade)": 1,
        "Caixa paçoquinha rolha": 1,
        "Canjica com coco (12 unidades)": 2,
        "Sagu com vinho (20 unidades)": null,
        "Quentão (3 lts)": 1,
        "Vinho quente (20 unidades)": null,
        "Latas refrigerante": 6,
        "Lata cerveja (335ml)": 40,
        "Latas suco": 4,
        "Latas água": 6,
        "recipeLink": {
            "Cachorro quente": "https://example.com/receita-cachorro-quente",
            "Dadinho de tapioca": "https://example.com/receita-dadinho-tapioca",
            "Saquinho de pipoca": "https://example.com/receita-pipoca",
            // Adicione os links das receitas para todos os itens
        }
    },
    30: {
        "Cachorro quente": 3,
        "Dadinho de tapioca": 3,
        "Sanduíche de farofa de carne seca": 10,
        "Cuscuz paulista": 30,
        "Saquinho de pipoca": 60,
        "Amendoim torrado (em gr)": 900,
        "Espetinhos": 30,
        "Espiga de milho": null,
        "Bolo de fubá (pedaço)": 2,
        "Bolo flocão cremoso": 1,
        "Brigadeiro de paçoca (unidade)": 1.5,
        "Caixa paçoquinha rolha": 2,
        "Canjica com coco (12 unidades)": 3,
        "Sagu com vinho (20 unidades)": 2,
        "Quentão (3 lts)": 1.5,
        "Vinho quente (20 unidades)": null,
        "Latas refrigerante": 9,
        "Lata cerveja (335ml)": 60,
        "Latas suco": 5,
        "Latas água": 6,
        "recipeLink": {
            "Cachorro quente": "https://example.com/receita-cachorro-quente",
            "Dadinho de tapioca": "https://example.com/receita-dadinho-tapioca",
            "Saquinho de pipoca": "https://example.com/receita-pipoca",
            // Adicione os links das receitas para todos os itens
        }
    },
    40: {
        "Cachorro quente": 4,
        "Dadinho de tapioca": 4,
        "Sanduíche de farofa de carne seca": 14,
        "Cuscuz paulista": 4,
        "Saquinho de pipoca": 80,
        "Amendoim torrado (em gr)": 1200,
        "Espetinhos": 80,
        "Espiga de milho": 15,
        "Bolo de fubá (pedaço)": 2,
        "Bolo flocão cremoso": 2,
        "Brigadeiro de paçoca (unidade)": 2,
        "Caixa paçoquinha rolha": 3,
        "Canjica com coco (12 unidades)": 4,
        "Sagu com vinho (20 unidades)": 3,
        "Quentão (3 lts)": 2,
        "Vinho quente (20 unidades)": 2,
        "Latas refrigerante": 12,
        "Lata cerveja (335ml)": 80,
        "Latas suco": 7,
        "Latas água": 10,
        "recipeLink": {
            "Cachorro quente": "https://example.com/receita-cachorro-quente",
            "Dadinho de tapioca": "https://example.com/receita-dadinho-tapioca",
            "Saquinho de pipoca": "https://example.com/receita-pipoca",
            // Adicione os links das receitas para todos os itens
        }
    }
};

function calculate(guests) {
    const items = festaData[guests];
    let resultsHTML = "";
    
    Object.keys(items).forEach(key => {
        if (key !== "recipeLink") {
            const quantity = items[key];
            const recipeLink = items.recipeLink[key];
            if (quantity !== null) {
                resultsHTML += `<div class="item">
                                    <img src="${key.toLowerCase().replace(/ /g, '-')}.jpg" alt="${key}">
                                    <p>${key}: ${quantity} <a href="${recipeLink}" target="_blank">Receita</a></p>
                                </div>`;
            }
        }
    });

    document.getElementById('results').innerHTML = resultsHTML;
}
