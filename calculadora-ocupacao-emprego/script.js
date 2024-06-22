document.addEventListener("DOMContentLoaded", () => {
     
    const mascRadio = document.getElementById("gender_masc");
    const femRadio = document.getElementById("gender_fem");
    mascRadio.addEventListener("change", () => {
        if (mascRadio.checked) {
            document.getElementById("masc_img").src = "https://public.flourish.studio/uploads/685449/399651a1-ea56-4cbb-a8f8-fc8817dd9171.png";
            document.getElementById("fem_img").src = "https://public.flourish.studio/uploads/685449/84bff448-91fc-4157-b661-0ee949d1cb17.png";
        }
    });

    femRadio.addEventListener("change", () => {
        if (femRadio.checked) {
            document.getElementById("fem_img").src = "url_da_nova_imagem_fem.png";
            document.getElementById("masc_img").src = "https://public.flourish.studio/uploads/685449/1fad3eec-ee24-4f40-a0c7-5c65e656d8bd.png";
        }
    });

     const elements = document.querySelectorAll('input, textarea, select, button');

    elements.forEach(element => {
        element.addEventListener('focus', (event) => {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        });

        element.addEventListener('blur', (event) => {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1');
        });
    });
  
  
    const data = [
        {
            grupo: "Todos",
            areas: [
                { area: "Todas as Ã¡reas", masc_ocupado: 27493142, fem_ocupado: 22730257, masc_salario: 3791.58, fem_salario: 3241.18 }
            ]
        },
        {
            grupo: "Agricultura, pecuÃ¡ria, produÃ§Ã£o florestal, pesca e aquicultura",
            areas: [
                { area: "Agricultura, pecuÃ¡ria, produÃ§Ã£o florestal, pesca e aquicultura", masc_ocupado: 414219, fem_ocupado: 97190, masc_salario: 2463.43, fem_salario: 2058.97 },
                { area: "Agricultura, pecuÃ¡ria e serviÃ§os relacionados", masc_ocupado: 330524, fem_ocupado: 84090, masc_salario: 2554.14, fem_salario: 2081.10 },
                { area: "ProduÃ§Ã£o de lavouras temporÃ¡rias", masc_ocupado: 106883, fem_ocupado: 18229, masc_salario: 3238.73, fem_salario: 2751.19 },
                { area: "Horticultura e floricultura", masc_ocupado: 6290, fem_ocupado: 3114, masc_salario: 2172.35, fem_salario: 1902.54 },
                { area: "ProduÃ§Ã£o de lavouras permanentes", masc_ocupado: 67774, fem_ocupado: 25699, masc_salario: 1882.91, fem_salario: 1569.61 },
                { area: "ProduÃ§Ã£o de sementes e mudas certificadas", masc_ocupado: 11147, fem_ocupado: 4626, masc_salario: 3778.87, fem_salario: 2653.70 },
                { area: "PecuÃ¡ria", masc_ocupado: 74072, fem_ocupado: 21846, masc_salario: 2489.23, fem_salario: 2112.92 },
                { area: "Atividades de apoio Ã  agricultura e Ã  pecuÃ¡ria; atividades de pÃ³s-colheita", masc_ocupado: 64358, fem_ocupado: 10576, masc_salario: 2092.39, fem_salario: 2022.29 },
                { area: "ProduÃ§Ã£o florestal", masc_ocupado: 74915, fem_ocupado: 11577, masc_salario: 2128.83, fem_salario: 1904.42 },
                { area: "ProduÃ§Ã£o florestal - florestas plantadas", masc_ocupado: 38231, fem_ocupado: 7869, masc_salario: 2182.76, fem_salario: 1853.54 },
                { area: "ProduÃ§Ã£o florestal - florestas nativas", masc_ocupado: 4013, fem_ocupado: 569, masc_salario: 1811.11, fem_salario: 1724.24 },
                { area: "Atividades de apoio Ã  produÃ§Ã£o florestal", masc_ocupado: 32671, fem_ocupado: 3139, masc_salario: 2104.91, fem_salario: 2063.51 },
                { area: "Pesca e aquicultura", masc_ocupado: 8780, fem_ocupado: 1523, masc_salario: 1806.06, fem_salario: 1959.84 },
                { area: "Pesca", masc_ocupado: 1382, fem_ocupado: 341, masc_salario: 2077.19, fem_salario: 2252.41 },
                { area: "Aquicultura", masc_ocupado: 7398, fem_ocupado: 1182, masc_salario: 1749.05, fem_salario: 1882.94 }
            ]
        },
        {
            grupo: "IndÃºstrias extrativas",
            areas: [
                { area: "IndÃºstrias extrativas", masc_ocupado: 191310, fem_ocupado: 35847, masc_salario: 6328.57, fem_salario: 6791.76 },
                { area: "ExtraÃ§Ã£o de carvÃ£o mineral", masc_ocupado: 3550, fem_ocupado: 192, masc_salario: 5300.27, fem_salario: 5383.67 },
                { area: "ExtraÃ§Ã£o de petrÃ³leo e gÃ¡s natural", masc_ocupado: 5984, fem_ocupado: 2137, masc_salario: 28274.63, fem_salario: 23898.30 },
                { area: "ExtraÃ§Ã£o de minerais metÃ¡licos", masc_ocupado: 78527, fem_ocupado: 20323, masc_salario: 6189.13, fem_salario: 6126.56 },
                { area: "ExtraÃ§Ã£o de minÃ©rio de ferro", masc_ocupado: 61690, fem_ocupado: 17044, masc_salario: 6232.38, fem_salario: 6240.70 },
                { area: "ExtraÃ§Ã£o de minerais metÃ¡licos nÃ£o ferrosos", masc_ocupado: 16837, fem_ocupado: 3279, masc_salario: 6017.96, fem_salario: 5512.30 },
                { area: "ExtraÃ§Ã£o de minerais nÃ£o metÃ¡licos", masc_ocupado: 73446, fem_ocupado: 8522, masc_salario: 2980.45, fem_salario: 2661.11 },
                { area: "ExtraÃ§Ã£o de pedra, areia e argila", masc_ocupado: 59645, fem_ocupado: 6794, masc_salario: 2915.78, fem_salario: 2553.53 },
                { area: "ExtraÃ§Ã£o de outros minerais nÃ£o metÃ¡licos", masc_ocupado: 13801, fem_ocupado: 1728, masc_salario: 3267.29, fem_salario: 3094.18 },
                { area: "Atividades de apoio Ã  extraÃ§Ã£o de minerais", masc_ocupado: 29803, fem_ocupado: 4673, masc_salario: 11869.01, fem_salario: 11039.88 },
                { area: "Atividades de apoio Ã  extraÃ§Ã£o de petrÃ³leo e gÃ¡s natural", masc_ocupado: 26680, fem_ocupado: 4172, masc_salario: 12817.79, fem_salario: 11859.62 },
                { area: "Atividades de apoio Ã  extraÃ§Ã£o de minerais, exceto petrÃ³leo e gÃ¡s natural", masc_ocupado: 3123, fem_ocupado: 501, masc_salario: 3677.29, fem_salario: 3274.07 }
            ]
        },
        {
            grupo: "IndÃºstrias de transformaÃ§Ã£o",
            areas: [
                { area: "IndÃºstrias de transformaÃ§Ã£o", masc_ocupado: 5520289, fem_ocupado: 2433119, masc_salario: 3933.95, fem_salario: 2875.18 },
                { area: "FabricaÃ§Ã£o de produtos alimentÃ­cios", masc_ocupado: 1261812, fem_ocupado: 657437, masc_salario: 3193.98, fem_salario: 2473.76 },
                { area: "Abate e fabricaÃ§Ã£o de produtos de carne", masc_ocupado: 411158, fem_ocupado: 268164, masc_salario: 2966.13, fem_salario: 2273.98 },
                { area: "PreservaÃ§Ã£o do pescado e fabricaÃ§Ã£o de produtos do pescado", masc_ocupado: 12494, fem_ocupado: 9845, masc_salario: 2364.90, fem_salario: 1872.26 },
                { area: "FabricaÃ§Ã£o de conservas de frutas, legumes e outros vegetais", masc_ocupado: 68731, fem_ocupado: 31812, masc_salario: 2691.17, fem_salario: 2118.69 },
                { area: "FabricaÃ§Ã£o de Ã³leos e gorduras vegetais e animais", masc_ocupado: 46485, fem_ocupado: 13574, masc_salario: 5878.09, fem_salario: 6101.87 },
                { area: "LaticÃ­nios", masc_ocupado: 99685, fem_ocupado: 47504, masc_salario: 3083.65, fem_salario: 2666.47 },
                { area: "Moagem, fabricaÃ§Ã£o de produtos amilÃ¡ceos e de alimentos para animais", masc_ocupado: 110704, fem_ocupado: 34230, masc_salario: 3634.37, fem_salario: 3606.47 },
                { area: "FabricaÃ§Ã£o e refino de aÃ§Ãºcar", masc_ocupado: 248553, fem_ocupado: 28534, masc_salario: 3219.28, fem_salario: 3086.72 },
                { area: "TorrefaÃ§Ã£o e moagem de cafÃ©", masc_ocupado: 24172, fem_ocupado: 12403, masc_salario: 4569.68, fem_salario: 4127.65 },
                { area: "FabricaÃ§Ã£o de outros produtos alimentÃ­cios", masc_ocupado: 239830, fem_ocupado: 211371, masc_salario: 2934.64, fem_salario: 2177.88 },
                { area: "FabricaÃ§Ã£o de bebidas", masc_ocupado: 145666, fem_ocupado: 37928, masc_salario: 4001.35, fem_salario: 4374.89 },
                { area: "FabricaÃ§Ã£o de bebidas alcoÃ³licas", masc_ocupado: 67738, fem_ocupado: 19199, masc_salario: 4832.52, fem_salario: 5231.77 },
                { area: "FabricaÃ§Ã£o de bebidas nÃ£o alcoÃ³licas", masc_ocupado: 77928, fem_ocupado: 18729, masc_salario: 3257.09, fem_salario: 3517.77 },
                { area: "FabricaÃ§Ã£o de produtos do fumo", masc_ocupado: 10038, fem_ocupado: 5901, masc_salario: 5662.27, fem_salario: 3150.85 },
                { area: "Processamento industrial do fumo", masc_ocupado: 4251, fem_ocupado: 2919, masc_salario: 4532.73, fem_salario: 2077.59 },
                { area: "FabricaÃ§Ã£o de produtos do fumo", masc_ocupado: 5787, fem_ocupado: 2982, masc_salario: 6764.18, fem_salario: 4858.87 },
                { area: "FabricaÃ§Ã£o de produtos tÃªxteis", masc_ocupado: 156195, fem_ocupado: 95325, masc_salario: 2754.53, fem_salario: 2129.23 },
                { area: "PreparaÃ§Ã£o e fiaÃ§Ã£o de fibras tÃªxteis", masc_ocupado: 19223, fem_ocupado: 11363, masc_salario: 2620.51, fem_salario: 2020.77 },
                { area: "Tecelagem, exceto malha", masc_ocupado: 49861, fem_ocupado: 25130, masc_salario: 2718.13, fem_salario: 2150.48 },
                { area: "FabricaÃ§Ã£o de tecidos de malha", masc_ocupado: 16410, fem_ocupado: 7733, masc_salario: 3274.39, fem_salario: 2879.02 },
                { area: "Acabamentos em fios, tecidos e artefatos tÃªxteis", masc_ocupado: 22220, fem_ocupado: 10050, masc_salario: 2553.03, fem_salario: 1895.99 },
                { area: "FabricaÃ§Ã£o de artefatos tÃªxteis, exceto vestuÃ¡rio", masc_ocupado: 48481, fem_ocupado: 41049, masc_salario: 2765.60, fem_salario: 2061.05 },
                { area: "ConfecÃ§Ã£o de artigos do vestuÃ¡rio e acessÃ³rios", masc_ocupado: 150689, fem_ocupado: 399610, masc_salario: 2065.73, fem_salario: 1789.08 },
                { area: "ConfecÃ§Ã£o de artigos do vestuÃ¡rio e acessÃ³rios", masc_ocupado: 146177, fem_ocupado: 390379, masc_salario: 2057.20, fem_salario: 1789.23 },
                { area: "FabricaÃ§Ã£o de artigos de malharia e tricotagem", masc_ocupado: 4512, fem_ocupado: 9231, masc_salario: 2342.65, fem_salario: 1783.06 },
                { area: "PreparaÃ§Ã£o de couros e fabricaÃ§Ã£o de artefatos de couro, artigos para viagem e calÃ§ados", masc_ocupado: 174177, fem_ocupado: 170015, masc_salario: 2116.06, fem_salario: 1719.93 },
                { area: "Curtimento e outras preparaÃ§Ãµes de couro", masc_ocupado: 17468, fem_ocupado: 5778, masc_salario: 2604.97, fem_salario: 2129.84 },
                { area: "FabricaÃ§Ã£o de artigos para viagem e de artefatos diversos de couro", masc_ocupado: 8466, fem_ocupado: 11476, masc_salario: 1865.02, fem_salario: 1693.40 },
                { area: "FabricaÃ§Ã£o de calÃ§ados", masc_ocupado: 133709, fem_ocupado: 141764, masc_salario: 2078.45, fem_salario: 1705.93 },
                { area: "FabricaÃ§Ã£o de partes para calÃ§ados, de qualquer material", masc_ocupado: 14534, fem_ocupado: 10997, masc_salario: 2006.27, fem_salario: 1706.35 },
                { area: "FabricaÃ§Ã£o de produtos de madeira", masc_ocupado: 148285, fem_ocupado: 36790, masc_salario: 2423.77, fem_salario: 2094.21 },
                { area: "Desdobramento de madeira", masc_ocupado: 61691, fem_ocupado: 11644, masc_salario: 2175.29, fem_salario: 1955.97 },
                { area: "FabricaÃ§Ã£o de produtos de madeira, cortiÃ§a e material tranÃ§ado, exceto mÃ³veis", masc_ocupado: 86594, fem_ocupado: 25146, masc_salario: 2600.06, fem_salario: 2159.23 },
                { area: "FabricaÃ§Ã£o de celulose, papel e produtos de papel", masc_ocupado: 159817, fem_ocupado: 49315, masc_salario: 4693.72, fem_salario: 3666.29 },
                { area: "FabricaÃ§Ã£o de celulose e outras pastas para a fabricaÃ§Ã£o de papel", masc_ocupado: 46110, fem_ocupado: 10425, masc_salario: 6469.82, fem_salario: 5641.14 },
                { area: "FabricaÃ§Ã£o de papel, cartolina e papel-cartÃ£o", masc_ocupado: 24819, fem_ocupado: 5375, masc_salario: 4845.57, fem_salario: 4494.42 },
                { area: "FabricaÃ§Ã£o de embalagens de papel, cartolina, papel-cartÃ£o e papelÃ£o ondulado", masc_ocupado: 52165, fem_ocupado: 17012, masc_salario: 3711.77, fem_salario: 2851.37 },
                { area: "FabricaÃ§Ã£o de produtos diversos de papel, cartolina, papel-cartÃ£o e papelÃ£o ondulado", masc_ocupado: 36723, fem_ocupado: 16503, masc_salario: 3820.96, fem_salario: 3099.16 },
                { area: "ImpressÃ£o e reproduÃ§Ã£o de gravaÃ§Ãµes", masc_ocupado: 59367, fem_ocupado: 31292, masc_salario: 3055.55, fem_salario: 2475.60 },
                { area: "Atividade de impressÃ£o", masc_ocupado: 47826, fem_ocupado: 25057, masc_salario: 3127.65, fem_salario: 2529.08 },
                { area: "ServiÃ§os de prÃ©-impressÃ£o e acabamentos grÃ¡ficos", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                { area: "ReproduÃ§Ã£o de materiais gravados em qualquer suporte", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                { area: "FabricaÃ§Ã£o de coque, de produtos derivados do petrÃ³leo e de biocombustÃ­veis", masc_ocupado: 147177, fem_ocupado: 25265, masc_salario: 8359.28, fem_salario: 8524.36 },
                { area: "Coquerias", masc_ocupado: 327, fem_ocupado: 40, masc_salario: 8706.12, fem_salario: 7847.97 },
                { area: "FabricaÃ§Ã£o de produtos derivados do petrÃ³leo", masc_ocupado: 41491, fem_ocupado: 9559, masc_salario: 21292.16, fem_salario: 17590.70 },
                { area: "FabricaÃ§Ã£o de biocombustÃ­veis", masc_ocupado: 105359, fem_ocupado: 15666, masc_salario: 3538.33, fem_salario: 3072.80 },
                { area: "FabricaÃ§Ã£o de produtos quÃ­micos", masc_ocupado: 243728, fem_ocupado: 97458, masc_salario: 6459.59, fem_salario: 5698.39 },
                { area: "FabricaÃ§Ã£o de produtos quÃ­micos inorgÃ¢nicos", masc_ocupado: 60718, fem_ocupado: 15798, masc_salario: 6800.10, fem_salario: 6483.66 },
                { area: "FabricaÃ§Ã£o de produtos quÃ­micos orgÃ¢nicos", masc_ocupado: 17933, fem_ocupado: 5440, masc_salario: 8009.37, fem_salario: 8786.38 },
                { area: "FabricaÃ§Ã£o de resinas e elastÃ´meros", masc_ocupado: 24018, fem_ocupado: 7685, masc_salario: 10726.56, fem_salario: 10924.37 },
                { area: "FabricaÃ§Ã£o de fibras artificiais e sintÃ©ticas", masc_ocupado: 3165, fem_ocupado: 1162, masc_salario: 4641.40, fem_salario: 3843.84 },
                { area: "FabricaÃ§Ã£o de defensivos agrÃ­colas e desinfestantes domissanitÃ¡rios", masc_ocupado: 14930, fem_ocupado: 7458, masc_salario: 11642.65, fem_salario: 9394.52 },
                { area: "FabricaÃ§Ã£o de sabÃµes, detergentes, produtos de limpeza, cosmÃ©ticos, produtos de perfumaria e de higiene pessoal", masc_ocupado: 65666, fem_ocupado: 39614, masc_salario: 3811.49, fem_salario: 3362.60 },
                { area: "FabricaÃ§Ã£o de tintas, vernizes, esmaltes, lacas e produtos afins", masc_ocupado: 27129, fem_ocupado: 6359, masc_salario: 5098.65, fem_salario: 5365.89 },
                { area: "FabricaÃ§Ã£o de produtos e preparados quÃ­micos diversos", masc_ocupado: 30169, fem_ocupado: 13942, masc_salario: 5665.75, fem_salario: 5580.37 },
                { area: "FabricaÃ§Ã£o de produtos farmoquÃ­micos e farmacÃªuticos", masc_ocupado: 62795, fem_ocupado: 59301, masc_salario: 8285.74, fem_salario: 6994.27 },
                { area: "FabricaÃ§Ã£o de produtos farmoquÃ­micos", masc_ocupado: 1660, fem_ocupado: 947, masc_salario: 5036.62, fem_salario: 4426.26 },
                { area: "FabricaÃ§Ã£o de produtos farmacÃªuticos", masc_ocupado: 61135, fem_ocupado: 58354, masc_salario: 8372.36, fem_salario: 7037.23 },
                { area: "FabricaÃ§Ã£o de produtos de borracha e de material plÃ¡stico", masc_ocupado: 286443, fem_ocupado: 112305, masc_salario: 3626.18, fem_salario: 2728.54 },
                { area: "FabricaÃ§Ã£o de produtos de borracha", masc_ocupado: 72887, fem_ocupado: 16117, masc_salario: 4221.18, fem_salario: 3470.53 },
                { area: "FabricaÃ§Ã£o de produtos de material plÃ¡stico", masc_ocupado: 213556, fem_ocupado: 96188, masc_salario: 3419.93, fem_salario: 2602.87 },
                { area: "FabricaÃ§Ã£o de produtos de minerais nÃ£o metÃ¡licos", masc_ocupado: 364110, fem_ocupado: 62072, masc_salario: 2919.63, fem_salario: 3098.28 },
                { area: "FabricaÃ§Ã£o de vidro e de produtos do vidro", masc_ocupado: 34119, fem_ocupado: 9356, masc_salario: 4015.23, fem_salario: 3265.60 },
                { area: "FabricaÃ§Ã£o de cimento", masc_ocupado: 16950, fem_ocupado: 3362, masc_salario: 5459.86, fem_salario: 6030.47 },
                { area: "FabricaÃ§Ã£o de artefatos de concreto, cimento, fibrocimento, gesso e materiais semelhantes", masc_ocupado: 119364, fem_ocupado: 15118, masc_salario: 2583.37, fem_salario: 2969.50 },
                { area: "FabricaÃ§Ã£o de produtos cerÃ¢micos", masc_ocupado: 120931, fem_ocupado: 20106, masc_salario: 2578.40, fem_salario: 2560.53 },
                { area: "Aparelhamento de pedras e fabricaÃ§Ã£o de outros produtos de minerais nÃ£o metÃ¡licos", masc_ocupado: 72746, fem_ocupado: 14130, masc_salario: 2911.50, fem_salario: 3188.28 },
                { area: "Metalurgia", masc_ocupado: 209419, fem_ocupado: 33873, masc_salario: 5369.62, fem_salario: 5246.41 },
                { area: "ProduÃ§Ã£o de ferro-gusa e de ferroligas", masc_ocupado: 23490, fem_ocupado: 2565, masc_salario: 4425.77, fem_salario: 4624.34 },
                { area: "Siderurgia", masc_ocupado: 85166, fem_ocupado: 13612, masc_salario: 6123.76, fem_salario: 5885.89 },
                { area: "ProduÃ§Ã£o de tubos de aÃ§o, exceto tubos sem costura", masc_ocupado: 16561, fem_ocupado: 2681, masc_salario: 5434.36, fem_salario: 5594.04 },
                { area: "Metalurgia dos metais nÃ£o ferrosos", masc_ocupado: 57258, fem_ocupado: 11372, masc_salario: 5442.08, fem_salario: 5268.34 },
                { area: "FundiÃ§Ã£o", masc_ocupado: 26944, fem_ocupado: 3643, masc_salario: 3539.16, fem_salario: 2972.18 },
                { area: "FabricaÃ§Ã£o de produtos de metal, exceto mÃ¡quinas e equipamentos", masc_ocupado: 389312, fem_ocupado: 77107, masc_salario: 3091.34, fem_salario: 2771.00 },
                { area: "FabricaÃ§Ã£o de estruturas metÃ¡licas e obras de caldeiraria pesada", masc_ocupado: 118991, fem_ocupado: 15811, masc_salario: 2690.84, fem_salario: 2560.27 },
                { area: "FabricaÃ§Ã£o de tanques, reservatÃ³rios metÃ¡licos e caldeiras", masc_ocupado: 10179, fem_ocupado: 1182, masc_salario: 3818.94, fem_salario: 3178.43 },
                { area: "Forjaria, estamparia, metalurgia do pÃ³ e serviÃ§os de tratamento de metais", masc_ocupado: 89145, fem_ocupado: 15825, masc_salario: 2811.84, fem_salario: 2446.82 },
                { area: "FabricaÃ§Ã£o de artigos de cutelaria, de serralheria e ferramentas", masc_ocupado: 54130, fem_ocupado: 14955, masc_salario: 3356.61, fem_salario: 2765.40 },
                { area: "FabricaÃ§Ã£o de equipamento bÃ©lico pesado, armas de fogo e muniÃ§Ãµes", masc_ocupado: 6909, fem_ocupado: 2360, masc_salario: 3902.82, fem_salario: 3134.95 },
                { area: "FabricaÃ§Ã£o de produtos de metal nÃ£o especificados anteriormente", masc_ocupado: 109958, fem_ocupado: 26974, masc_salario: 3489.22, fem_salario: 3028.32 },
                { area: "FabricaÃ§Ã£o de equipamentos de informÃ¡tica, produtos eletrÃ´nicos e Ã³pticos", masc_ocupado: 72621, fem_ocupado: 54246, masc_salario: 5758.74, fem_salario: 3580.62 },
                { area: "FabricaÃ§Ã£o de componentes eletrÃ´nicos", masc_ocupado: 8568, fem_ocupado: 7849, masc_salario: 4906.71, fem_salario: 3016.17 },
                { area: "FabricaÃ§Ã£o de equipamentos de informÃ¡tica e perifÃ©ricos", masc_ocupado: 15829, fem_ocupado: 12280, masc_salario: 7718.02, fem_salario: 4718.02 },
                { area: "FabricaÃ§Ã£o de equipamentos de comunicaÃ§Ã£o", masc_ocupado: 18579, fem_ocupado: 16844, masc_salario: 5869.05, fem_salario: 3402.99 },
                { area: "FabricaÃ§Ã£o de aparelhos de recepÃ§Ã£o, reproduÃ§Ã£o, gravaÃ§Ã£o e amplificaÃ§Ã£o de Ã¡udio e vÃ­deo", masc_ocupado: 9805, fem_ocupado: 6718, masc_salario: 4801.89, fem_salario: 3171.47 },
                { area: "FabricaÃ§Ã£o de aparelhos e instrumentos de medida, teste e controle; cronÃ´metros e relÃ³gios", masc_ocupado: 16855, fem_ocupado: 8643, masc_salario: 5176.66, fem_salario: 3284.74 },
                { area: "FabricaÃ§Ã£o de aparelhos eletromÃ©dicos e eletroterapÃªuticos e equipamentos de irradiaÃ§Ã£o", masc_ocupado: 2471, fem_ocupado: 1702, masc_salario: 4086.63, fem_salario: 3479.77 },
                { area: "FabricaÃ§Ã£o de equipamentos e instrumentos Ã³pticos, fotogrÃ¡ficos e cinematogrÃ¡ficos", masc_ocupado: 487, fem_ocupado: 183, masc_salario: 3654.85, fem_salario: 2668.06 },
                { area: "FabricaÃ§Ã£o de mÃ­dias virgens, magnÃ©ticas e Ã³pticas", masc_ocupado: 27, fem_ocupado: 27, masc_salario: 7509.33, fem_salario: 1834.09 },
                { area: "FabricaÃ§Ã£o de mÃ¡quinas, aparelhos e materiais elÃ©tricos", masc_ocupado: 165107, fem_ocupado: 70160, masc_salario: 4926.52, fem_salario: 3405.88 },
                { area: "FabricaÃ§Ã£o de geradores, transformadores e motores elÃ©tricos", masc_ocupado: 53164, fem_ocupado: 16157, masc_salario: 6009.02, fem_salario: 4182.54 },
                { area: "FabricaÃ§Ã£o de pilhas, baterias e acumuladores elÃ©tricos", masc_ocupado: 10171, fem_ocupado: 2307, masc_salario: 4250.97, fem_salario: 3351.69 },
                { area: "FabricaÃ§Ã£o de equipamentos para distribuiÃ§Ã£o e controle de energia elÃ©trica", masc_ocupado: 49661, fem_ocupado: 20293, masc_salario: 4824.43, fem_salario: 3373.83 },
                { area: "FabricaÃ§Ã£o de lÃ¢mpadas e outros equipamentos de iluminaÃ§Ã£o", masc_ocupado: 6846, fem_ocupado: 3968, masc_salario: 3135.85, fem_salario: 2558.04 },
                { area: "FabricaÃ§Ã£o de eletrodomÃ©sticos", masc_ocupado: 33119, fem_ocupado: 21922, masc_salario: 4338.06, fem_salario: 3177.74 },
                { area: "FabricaÃ§Ã£o de equipamentos e aparelhos elÃ©tricos nÃ£o especificados anteriormente", masc_ocupado: 12146, fem_ocupado: 5513, masc_salario: 3863.04, fem_salario: 2874.43 },
                { area: "FabricaÃ§Ã£o de mÃ¡quinas e equipamentos", masc_ocupado: 347251, fem_ocupado: 68455, masc_salario: 5028.59, fem_salario: 4105.73 },
                { area: "FabricaÃ§Ã£o de motores, bombas, compressores e equipamentos de transmissÃ£o", masc_ocupado: 53021, fem_ocupado: 14113, masc_salario: 5296.50, fem_salario: 3870.88 },
                { area: "FabricaÃ§Ã£o de mÃ¡quinas e equipamentos de uso geral", masc_ocupado: 98364, fem_ocupado: 21562, masc_salario: 4757.81, fem_salario: 3911.54 },
                { area: "FabricaÃ§Ã£o de tratores e de mÃ¡quinas e equipamentos para a agricultura e pecuÃ¡ria", masc_ocupado: 81487, fem_ocupado: 14146, masc_salario: 4991.78, fem_salario: 4323.23 },
                { area: "FabricaÃ§Ã£o de mÃ¡quinas-ferramenta", masc_ocupado: 21326, fem_ocupado: 3488, masc_salario: 5372.94, fem_salario: 4189.21 },
                { area: "FabricaÃ§Ã£o de mÃ¡quinas e equipamentos de uso na extraÃ§Ã£o mineral e na construÃ§Ã£o", masc_ocupado: 32088, fem_ocupado: 5095, masc_salario: 6641.14, fem_salario: 6232.99 },
                { area: "FabricaÃ§Ã£o de mÃ¡quinas e equipamentos de uso industrial especÃ­fico", masc_ocupado: 60965, fem_ocupado: 10051, masc_salario: 4322.36, fem_salario: 3499.30 },
                { area: "FabricaÃ§Ã£o de veÃ­culos automotores, reboques e carrocerias", masc_ocupado: 366568, fem_ocupado: 96060, masc_salario: 5576.92, fem_salario: 4025.83 },
                { area: "FabricaÃ§Ã£o de automÃ³veis, camionetas e utilitÃ¡rios", masc_ocupado: 64638, fem_ocupado: 12028, masc_salario: 8344.63, fem_salario: 6578.18 },
                { area: "FabricaÃ§Ã£o de caminhÃµes e Ã´nibus", masc_ocupado: 26346, fem_ocupado: 5127, masc_salario: 8815.62, fem_salario: 7959.35 },
                { area: "FabricaÃ§Ã£o de cabines, carrocerias e reboques para veÃ­culos automotores", masc_ocupado: 50734, fem_ocupado: 8134, masc_salario: 3492.96, fem_salario: 3027.71 },
                { area: "FabricaÃ§Ã£o de peÃ§as e acessÃ³rios para veÃ­culos automotores", masc_ocupado: 214665, fem_ocupado: 69492, masc_salario: 4972.02, fem_salario: 3451.61 },
                { area: "Recondicionamento e recuperaÃ§Ã£o de motores para veÃ­culos automotores", masc_ocupado: 10185, fem_ocupado: 1279, masc_salario: 2324.11, fem_salario: 1933.28 },
                { area: "FabricaÃ§Ã£o de outros equipamentos de transporte, exceto veÃ­culos automotores", masc_ocupado: 68790, fem_ocupado: 14108, masc_salario: 5813.77, fem_salario: 4817.60 },
                { area: "ConstruÃ§Ã£o de embarcaÃ§Ãµes", masc_ocupado: 20433, fem_ocupado: 2269, masc_salario: 4305.04, fem_salario: 4396.83 },
                { area: "FabricaÃ§Ã£o de veÃ­culos ferroviÃ¡rios", masc_ocupado: 5010, fem_ocupado: 811, masc_salario: 7894.00, fem_salario: 7033.45 },
                { area: "FabricaÃ§Ã£o de aeronaves", masc_ocupado: 15940, fem_ocupado: 3409, masc_salario: 8994.53, fem_salario: 7685.52 },
                { area: "FabricaÃ§Ã£o de veÃ­culos militares de combate", masc_ocupado: 1082, fem_ocupado: 184, masc_salario: 10144.25, fem_salario: 9538.56 },
                { area: "FabricaÃ§Ã£o de equipamentos de transporte nÃ£o especificados anteriormente", masc_ocupado: 26325, fem_ocupado: 7435, masc_salario: 4525.31, fem_salario: 3411.06 },
                { area: "FabricaÃ§Ã£o de mÃ³veis", masc_ocupado: 190370, fem_ocupado: 63182, masc_salario: 2385.47, fem_salario: 2176.64 },
                { area: "FabricaÃ§Ã£o de mÃ³veis", masc_ocupado: 190370, fem_ocupado: 63182, masc_salario: 2385.47, fem_salario: 2176.64 },
                { area: "FabricaÃ§Ã£o de produtos diversos", masc_ocupado: 97268, fem_ocupado: 81084, masc_salario: 3117.22, fem_salario: 2479.85 },
                { area: "FabricaÃ§Ã£o de artigos de joalheria, bijuteria e semelhantes", masc_ocupado: 8047, fem_ocupado: 11037, masc_salario: 2604.96, fem_salario: 2081.98 },
                { area: "FabricaÃ§Ã£o de instrumentos musicais", masc_ocupado: 824, fem_ocupado: 407, masc_salario: 2400.62, fem_salario: 2295.78 },
                { area: "FabricaÃ§Ã£o de artefatos para pesca e esporte", masc_ocupado: 3849, fem_ocupado: 1874, masc_salario: 2548.25, fem_salario: 1983.22 },
                { area: "FabricaÃ§Ã£o de brinquedos e jogos recreativos", masc_ocupado: 8507, fem_ocupado: 7394, masc_salario: 2579.25, fem_salario: 2041.35 },
                { area: "FabricaÃ§Ã£o de instrumentos e materiais para uso mÃ©dico e odontolÃ³gico e de artigos Ã³pticos", masc_ocupado: 35358, fem_ocupado: 33964, masc_salario: 3667.04, fem_salario: 2889.64 },
                { area: "FabricaÃ§Ã£o de produtos diversos", masc_ocupado: 40683, fem_ocupado: 26408, masc_salario: 2931.31, fem_salario: 2296.86 },
                { area: "ManutenÃ§Ã£o, reparaÃ§Ã£o e instalaÃ§Ã£o de mÃ¡quinas e equipamentos", masc_ocupado: 243284, fem_ocupado: 34830, masc_salario: 3037.49, fem_salario: 2663.83 },
                { area: "ManutenÃ§Ã£o e reparaÃ§Ã£o de mÃ¡quinas e equipamentos", masc_ocupado: 193931, fem_ocupado: 27428, masc_salario: 3190.74, fem_salario: 2793.51 },
                { area: "InstalaÃ§Ã£o de mÃ¡quinas e equipamentos", masc_ocupado: 49353, fem_ocupado: 7402, masc_salario: 2416.18, fem_salario: 2179.18 }
            ]
        },
        {
                grupo: "Eletricidade e gÃ¡s",
                areas: [
                    { area: "Eletricidade, gÃ¡s e outras utilidades", masc_ocupado: 105232, fem_ocupado: 26976, masc_salario: 8497.55, fem_salario: 7574.70 },
                    { area: "GeraÃ§Ã£o, transmissÃ£o e distribuiÃ§Ã£o de energia elÃ©trica", masc_ocupado: 101398, fem_ocupado: 25528, masc_salario: 8458.31, fem_salario: 7453.76 },
                    { area: "ProduÃ§Ã£o e distribuiÃ§Ã£o de combustÃ­veis gasosos por redes urbanas", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                    { area: "ProduÃ§Ã£o e distribuiÃ§Ã£o de vapor, Ã¡gua quente e ar condicionado", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 }
                ]
            },
            {
                grupo: "Ãgua, esgoto, atividades de gestÃ£o de resÃ­duos e descontaminaÃ§Ã£o",
                areas: [
                    { area: "Ãgua, esgoto, atividades de gestÃ£o de resÃ­duos e descontaminaÃ§Ã£o", masc_ocupado: 358557, fem_ocupado: 86998, masc_salario: 3784.18, fem_salario: 3779.80 },
                    { area: "CaptaÃ§Ã£o, tratamento e distribuiÃ§Ã£o de Ã¡gua", masc_ocupado: 121193, fem_ocupado: 31263, masc_salario: 6089.81, fem_salario: 6379.05 },
                    { area: "Esgoto e atividades relacionadas", masc_ocupado: 13499, fem_ocupado: 2702, masc_salario: 3133.84, fem_salario: 3644.41 },
                    { area: "Coleta, tratamento e disposiÃ§Ã£o de resÃ­duos; recuperaÃ§Ã£o de materiais", masc_ocupado: 222458, fem_ocupado: 52648, masc_salario: 2580.31, fem_salario: 2318.01 },
                    { area: "Coleta de resÃ­duos", masc_ocupado: 175167, fem_ocupado: 41843, masc_salario: 2548.19, fem_salario: 2300.38 },
                    { area: "Tratamento e disposiÃ§Ã£o de resÃ­duos", masc_ocupado: 20534, fem_ocupado: 3799, masc_salario: 3150.24, fem_salario: 3138.95 },
                    { area: "RecuperaÃ§Ã£o de materiais", masc_ocupado: 26757, fem_ocupado: 7006, masc_salario: 2358.62, fem_salario: 1991.42 },
                    { area: "DescontaminaÃ§Ã£o e outros serviÃ§os de gestÃ£o de resÃ­duos", masc_ocupado: 1407, fem_ocupado: 385, masc_salario: 2479.23, fem_salario: 2517.70 }
                ]
            },
            {
                grupo: "ConstruÃ§Ã£o",
                areas: [
                    { area: "ConstruÃ§Ã£o", masc_ocupado: 1942865, fem_ocupado: 275765, masc_salario: 2776.09, fem_salario: 3381.12 },
                    { area: "ConstruÃ§Ã£o de edifÃ­cios", masc_ocupado: 647200, fem_ocupado: 120477, masc_salario: 2523.21, fem_salario: 3785.62 },
                    { area: "IncorporaÃ§Ã£o de empreendimentos imobiliÃ¡rios", masc_ocupado: 41516, fem_ocupado: 16392, masc_salario: 2821.84, fem_salario: 3525.62 },
                    { area: "Obras de infraestrutura", masc_ocupado: 617209, fem_ocupado: 76181, masc_salario: 3465.87, fem_salario: 3846.35 },
                    { area: "ConstruÃ§Ã£o de rodovias, ferrovias, obras urbanas e obras-de-arte especiais", masc_ocupado: 221561, fem_ocupado: 27360, masc_salario: 3635.96, fem_salario: 4561.59 },
                    { area: "Obras de infraestrutura para energia elÃ©trica, telecomunicaÃ§Ãµes, Ã¡gua, esgoto e transporte por dutos", masc_ocupado: 220933, fem_ocupado: 29181, masc_salario: 3490.77, fem_salario: 3371.13 },
                    { area: "ConstruÃ§Ã£o de outras obras de infraestrutura", masc_ocupado: 174715, fem_ocupado: 19640, masc_salario: 3238.63, fem_salario: 3753.51 },
                    { area: "ServiÃ§os especializados para construÃ§Ã£o", masc_ocupado: 678456, fem_ocupado: 79107, masc_salario: 2409.89, fem_salario: 2491.20 },
                    { area: "DemoliÃ§Ã£o e preparaÃ§Ã£o do terreno", masc_ocupado: 88874, fem_ocupado: 9912, masc_salario: 2857.83, fem_salario: 2757.50 },
                    { area: "InstalaÃ§Ãµes elÃ©tricas, hidrÃ¡ulicas e outras instalaÃ§Ãµes em construÃ§Ãµes", masc_ocupado: 276981, fem_ocupado: 39613, masc_salario: 2551.79, fem_salario: 2390.54 },
                    { area: "Obras de acabamento", masc_ocupado: 113875, fem_ocupado: 8519, masc_salario: 1867.66, fem_salario: 1974.89 },
                    { area: "Outros serviÃ§os especializados para construÃ§Ã£o", masc_ocupado: 198726, fem_ocupado: 21063, masc_salario: 2326.01, fem_salario: 2808.56 }
                ]
            },
            {
                grupo: "ComÃ©rcio; reparaÃ§Ã£o de veÃ­culos automotores e motocicletas",
                areas: [
                    { area: "ComÃ©rcio; reparaÃ§Ã£o de veÃ­culos automotores e motocicletas", masc_ocupado: 5287410, fem_ocupado: 4245068, masc_salario: 2598.59, fem_salario: 2233.73 },
                    { area: "ComÃ©rcio e reparaÃ§Ã£o de veÃ­culos automotores e motocicletas", masc_ocupado: 771086, fem_ocupado: 231086, masc_salario: 2619.24, fem_salario: 2452.82 },
                    { area: "ComÃ©rcio de veÃ­culos automotores", masc_ocupado: 155409, fem_ocupado: 72406, masc_salario: 4095.40, fem_salario: 3269.16 },
                    { area: "ManutenÃ§Ã£o e reparaÃ§Ã£o de veÃ­culos automotores", masc_ocupado: 191786, fem_ocupado: 38218, masc_salario: 1982.65, fem_salario: 1735.48 },
                    { area: "ComÃ©rcio de peÃ§as e acessÃ³rios para veÃ­culos automotores", masc_ocupado: 361070, fem_ocupado: 95340, masc_salario: 2358.17, fem_salario: 2149.25 },
                    { area: "ComÃ©rcio, manutenÃ§Ã£o e reparaÃ§Ã£o de motocicletas, peÃ§as e acessÃ³rios", masc_ocupado: 62821, fem_ocupado: 25122, masc_salario: 2344.74, fem_salario: 2294.42 },
                    { area: "ComÃ©rcio por atacado, exceto veÃ­culos automotores e motocicletas", masc_ocupado: 1160471, fem_ocupado: 578548, masc_salario: 3844.20, fem_salario: 3569.05 },
                    { area: "Representantes comerciais e agentes do comÃ©rcio, exceto de veÃ­culos automotores e motocicletas", masc_ocupado: 26258, fem_ocupado: 24388, masc_salario: 3053.69, fem_salario: 2570.37 },
                    { area: "ComÃ©rcio atacadista de matÃ©rias-primas agrÃ­colas e animais vivos", masc_ocupado: 81933, fem_ocupado: 30163, masc_salario: 3782.34, fem_salario: 2940.93 },
                    { area: "ComÃ©rcio atacadista especializado em produtos alimentÃ­cios, bebidas e fumo", masc_ocupado: 308712, fem_ocupado: 118811, masc_salario: 2688.29, fem_salario: 2476.27 },
                    { area: "ComÃ©rcio atacadista de produtos de consumo nÃ£o alimentar", masc_ocupado: 197329, fem_ocupado: 190683, masc_salario: 4865.20, fem_salario: 4446.73 },
                    { area: "ComÃ©rcio atacadista de equipamentos e produtos de tecnologias de informaÃ§Ã£o e comunicaÃ§Ã£o", masc_ocupado: 21071, fem_ocupado: 12426, masc_salario: 8679.18, fem_salario: 5705.45 },
                    { area: "ComÃ©rcio atacadista de mÃ¡quinas, aparelhos e equipamentos, exceto de tecnologias de informaÃ§Ã£o e comunicaÃ§Ã£o", masc_ocupado: 125327, fem_ocupado: 47266, masc_salario: 5658.66, fem_salario: 4201.77 },
                    { area: "ComÃ©rcio atacadista de madeira, ferragens, ferramentas, material elÃ©trico e material de construÃ§Ã£o", masc_ocupado: 99888, fem_ocupado: 34109, masc_salario: 2750.34, fem_salario: 2717.82 },
                    { area: "ComÃ©rcio atacadista especializado em outros produtos", masc_ocupado: 180259, fem_ocupado: 65858, masc_salario: 4023.95, fem_salario: 3802.75 },
                    { area: "ComÃ©rcio atacadista nÃ£o especializado", masc_ocupado: 119694, fem_ocupado: 54844, masc_salario: 3294.72, fem_salario: 2881.67 },
                    { area: "ComÃ©rcio varejista", masc_ocupado: 3355853, fem_ocupado: 3435434, masc_salario: 2165.92, fem_salario: 1994.05 },
                    { area: "ComÃ©rcio varejista nÃ£o especializado", masc_ocupado: 1067206, fem_ocupado: 1066344, masc_salario: 2199.92, fem_salario: 1940.16 },
                    { area: "ComÃ©rcio varejista de produtos alimentÃ­cios, bebidas e fumo", masc_ocupado: 303453, fem_ocupado: 313922, masc_salario: 1744.58, fem_salario: 1590.99 },
                    { area: "ComÃ©rcio varejista de combustÃ­veis para veÃ­culos automotores", masc_ocupado: 278484, fem_ocupado: 89811, masc_salario: 2114.26, fem_salario: 2074.60 },
                    { area: "ComÃ©rcio varejista de material de construÃ§Ã£o", masc_ocupado: 581136, fem_ocupado: 202540, masc_salario: 2039.76, fem_salario: 2039.17 },
                    { area: "ComÃ©rcio varejista de equipamentos de informÃ¡tica e comunicaÃ§Ã£o; equipamentos e artigos de uso domÃ©stico", masc_ocupado: 378679, fem_ocupado: 345236, masc_salario: 2361.50, fem_salario: 2057.44 },
                    { area: "ComÃ©rcio varejista de artigos culturais, recreativos e esportivos", masc_ocupado: 78197, fem_ocupado: 98706, masc_salario: 2202.27, fem_salario: 1908.03 },
                    { area: "ComÃ©rcio varejista de produtos farmacÃªuticos, perfumaria e cosmÃ©ticos e artigos mÃ©dicos, Ã³pticos e ortopÃ©dicos", masc_ocupado: 265924, fem_ocupado: 518098, masc_salario: 2470.22, fem_salario: 2362.61 },
                    { area: "ComÃ©rcio varejista de produtos novos nÃ£o especificados anteriormente e de produtos usados", masc_ocupado: 402774, fem_ocupado: 800777, masc_salario: 2217.86, fem_salario: 1943.21 }
                ]
            },
                {
                    grupo: "Transporte, armazenagem e correio",
                    areas: [
                        { area: "Transporte, armazenagem e correio", masc_ocupado: 2044297, fem_ocupado: 458639, masc_salario: 3348.74, fem_salario: 3299.42 },
                        { area: "Transporte terrestre", masc_ocupado: 1492987, fem_ocupado: 257691, masc_salario: 2974.96, fem_salario: 2825.36 },
                        { area: "Transporte ferroviÃ¡rio e metroferroviÃ¡rio", masc_ocupado: 46049, fem_ocupado: 10046, masc_salario: 6709.20, fem_salario: 6201.52 },
                        { area: "Transporte rodoviÃ¡rio de passageiros", masc_ocupado: 477334, fem_ocupado: 82251, masc_salario: 2596.24, fem_salario: 1925.29 },
                        { area: "Transporte rodoviÃ¡rio de carga", masc_ocupado: 964164, fem_ocupado: 164182, masc_salario: 2878.69, fem_salario: 2970.08 },
                        { area: "Transporte dutoviÃ¡rio", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "Trens turÃ­sticos, telefÃ©ricos e similares", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "Transporte aquaviÃ¡rio", masc_ocupado: 37898, fem_ocupado: 6344, masc_salario: 8546.03, fem_salario: 6921.61 },
                        { area: "Transporte marÃ­timo de cabotagem e longo curso", masc_ocupado: 3992, fem_ocupado: 1204, masc_salario: 10724.75, fem_salario: 9615.64 },
                        { area: "Transporte por navegaÃ§Ã£o interior", masc_ocupado: 10646, fem_ocupado: 1891, masc_salario: 3341.31, fem_salario: 2476.63 },
                        { area: "NavegaÃ§Ã£o de apoio", masc_ocupado: 19372, fem_ocupado: 2378, masc_salario: 12312.26, fem_salario: 10927.52 },
                        { area: "Outros transportes aquaviÃ¡rios", masc_ocupado: 3888, fem_ocupado: 871, masc_salario: 3045.17, fem_salario: 2802.77 },
                        { area: "Transporte aÃ©reo", masc_ocupado: 38375, fem_ocupado: 21802, masc_salario: 9336.26, fem_salario: 5167.72 },
                        { area: "Transporte aÃ©reo de passageiros", masc_ocupado: 36515, fem_ocupado: 21275, masc_salario: 9339.79, fem_salario: 5176.41 },
                        { area: "Transporte aÃ©reo de carga", masc_ocupado: 1860, fem_ocupado: 527, masc_salario: 9265.03, fem_salario: 4757.39 },
                        { area: "Transporte espacial", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "Armazenamento e atividades auxiliares dos transportes", masc_ocupado: 346065, fem_ocupado: 128544, masc_salario: 3638.28, fem_salario: 3652.46 },
                        { area: "Armazenamento, carga e descarga", masc_ocupado: 120026, fem_ocupado: 29755, masc_salario: 2673.63, fem_salario: 2733.87 },
                        { area: "Atividades auxiliares dos transportes terrestres", masc_ocupado: 99230, fem_ocupado: 45951, masc_salario: 3377.33, fem_salario: 3497.63 },
                        { area: "Atividades auxiliares dos transportes aquaviÃ¡rios", masc_ocupado: 40961, fem_ocupado: 10720, masc_salario: 6722.10, fem_salario: 6186.40 },
                        { area: "Atividades auxiliares dos transportes aÃ©reos", masc_ocupado: 30305, fem_ocupado: 12974, masc_salario: 3759.96, fem_salario: 3509.25 },
                        { area: "Atividades relacionadas Ã  organizaÃ§Ã£o do transporte de carga", masc_ocupado: 55543, fem_ocupado: 29144, masc_salario: 3845.45, fem_salario: 3920.61 },
                        { area: "Correio e outras atividades de entrega", masc_ocupado: 128972, fem_ocupado: 44258, masc_salario: 3672.59, fem_salario: 3592.40 },
                        { area: "Atividades de correio", masc_ocupado: 74956, fem_ocupado: 26775, masc_salario: 4811.99, fem_salario: 4462.20 },
                        { area: "Atividades de malote e de entrega", masc_ocupado: 54016, fem_ocupado: 17483, masc_salario: 1936.28, fem_salario: 2104.42 }
                    ]
                },
                {
                    grupo: "Alojamento e alimentaÃ§Ã£o",
                    areas: [
                        { area: "Alojamento e alimentaÃ§Ã£o", masc_ocupado: 817113, fem_ocupado: 1092807, masc_salario: 1904.59, fem_salario: 1667.96 },
                        { area: "Alojamento", masc_ocupado: 136849, fem_ocupado: 196164, masc_salario: 2286.88, fem_salario: 1853.08 },
                        { area: "HotÃ©is e similares", masc_ocupado: 131360, fem_ocupado: 185686, masc_salario: 2309.83, fem_salario: 1874.19 },
                        { area: "Outros tipos de alojamento nÃ£o especificados anteriormente", masc_ocupado: 5489, fem_ocupado: 10478, masc_salario: 1714.30, fem_salario: 1476.63 },
                        { area: "AlimentaÃ§Ã£o", masc_ocupado: 680264, fem_ocupado: 896643, masc_salario: 1827.67, fem_salario: 1627.00 },
                        { area: "Restaurantes e outros serviÃ§os de alimentaÃ§Ã£o e bebidas", masc_ocupado: 579414, fem_ocupado: 682218, masc_salario: 1803.32, fem_salario: 1578.20 },
                        { area: "ServiÃ§os de catering, bufÃª e outros serviÃ§os de comida preparada", masc_ocupado: 100850, fem_ocupado: 214425, masc_salario: 1965.34, fem_salario: 1778.52 }
                    ]
                },
                {
                    grupo: "InformaÃ§Ã£o e comunicaÃ§Ã£o",
                    areas: [
                        { area: "InformaÃ§Ã£o e comunicaÃ§Ã£o", masc_ocupado: 729726, fem_ocupado: 430785, masc_salario: 6848.04, fem_salario: 5276.89 },
                        { area: "EdiÃ§Ã£o e ediÃ§Ã£o integrada Ã  impressÃ£o", masc_ocupado: 28336, fem_ocupado: 23575, masc_salario: 4715.87, fem_salario: 4537.24 },
                        { area: "EdiÃ§Ã£o de livros, jornais, revistas e outras atividades de ediÃ§Ã£o", masc_ocupado: 8144, fem_ocupado: 9504, masc_salario: 4599.27, fem_salario: 4340.94 },
                        { area: "EdiÃ§Ã£o integrada Ã  impressÃ£o de livros, jornais, revistas e outras publicaÃ§Ãµes", masc_ocupado: 20192, fem_ocupado: 14071, masc_salario: 4761.17, fem_salario: 4666.82 },
                        { area: "Atividades cinematogrÃ¡ficas, produÃ§Ã£o de vÃ­deos e de programas de televisÃ£o; gravaÃ§Ã£o de som e ediÃ§Ã£o de mÃºsica", masc_ocupado: 13303, fem_ocupado: 14569, masc_salario: 4025.51, fem_salario: 3468.43 },
                        { area: "Atividades cinematogrÃ¡ficas, produÃ§Ã£o de vÃ­deos e de programas de televisÃ£o", masc_ocupado: 12321, fem_ocupado: 13582, masc_salario: 3726.53, fem_salario: 3110.31 },
                        { area: "Atividades de gravaÃ§Ã£o de som e de ediÃ§Ã£o de mÃºsica", masc_ocupado: 982, fem_ocupado: 987, masc_salario: 7882.97, fem_salario: 8545.27 },
                        { area: "Atividades de rÃ¡dio e de televisÃ£o", masc_ocupado: 51453, fem_ocupado: 28544, masc_salario: 6922.85, fem_salario: 6942.10 },
                        { area: "Atividades de rÃ¡dio", masc_ocupado: 17634, fem_ocupado: 9065, masc_salario: 2854.92, fem_salario: 2660.05 },
                        { area: "Atividades de televisÃ£o", masc_ocupado: 33819, fem_ocupado: 19479, masc_salario: 9027.29, fem_salario: 8947.52 },
                        { area: "TelecomunicaÃ§Ãµes", masc_ocupado: 180686, fem_ocupado: 93931, masc_salario: 4178.79, fem_salario: 3590.65 },
                        { area: "TelecomunicaÃ§Ãµes por fio", masc_ocupado: 72499, fem_ocupado: 34153, masc_salario: 3295.16, fem_salario: 2795.97 },
                        { area: "TelecomunicaÃ§Ãµes sem fio", masc_ocupado: 37811, fem_ocupado: 26742, masc_salario: 7426.93, fem_salario: 5617.63 },
                        { area: "TelecomunicaÃ§Ãµes por satÃ©lite", masc_ocupado: 1329, fem_ocupado: 708, masc_salario: 13391.25, fem_salario: 9737.55 },
                        { area: "Operadoras de televisÃ£o por assinatura", masc_ocupado: 3173, fem_ocupado: 1697, masc_salario: 5196.22, fem_salario: 4578.38 },
                        { area: "Outras atividades de telecomunicaÃ§Ãµes", masc_ocupado: 65874, fem_ocupado: 30631, masc_salario: 2868.37, fem_salario: 2301.01 },
                        { area: "Atividades dos serviÃ§os de tecnologia da informaÃ§Ã£o", masc_ocupado: 376876, fem_ocupado: 206552, masc_salario: 8065.24, fem_salario: 5796.56 },
                        { area: "Atividades de prestaÃ§Ã£o de serviÃ§os de informaÃ§Ã£o", masc_ocupado: 79072, fem_ocupado: 63614, masc_salario: 8704.70, fem_salario: 6132.36 },
                        { area: "Tratamento de dados, hospedagem na internet e outras atividades relacionadas", masc_ocupado: 71405, fem_ocupado: 57651, masc_salario: 9201.41, fem_salario: 6406.51 },
                        { area: "Outras atividades de prestaÃ§Ã£o de serviÃ§os de informaÃ§Ã£o", masc_ocupado: 7667, fem_ocupado: 5963, masc_salario: 3930.29, fem_salario: 3485.26 }
                    ]
                },
                {
                    grupo: "Atividades financeiras, de seguros e serviÃ§os relacionados",
                    areas: [
                        { area: "Atividades financeiras, de seguros e serviÃ§os relacionados", masc_ocupado: 498611, fem_ocupado: 663091, masc_salario: 10469.21, fem_salario: 6205.02 },
                        { area: "Atividades de serviÃ§os financeiros", masc_ocupado: 327801, fem_ocupado: 328580, masc_salario: 10969.42, fem_salario: 7783.78 },
                        { area: "Banco central", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "IntermediaÃ§Ã£o monetÃ¡ria - depÃ³sitos Ã  vista", masc_ocupado: 274456, fem_ocupado: 275550, masc_salario: 10879.18, fem_salario: 7930.77 },
                        { area: "IntermediaÃ§Ã£o nÃ£o monetÃ¡ria - outros instrumentos de captaÃ§Ã£o", masc_ocupado: 10626, fem_ocupado: 9285, masc_salario: 19398.49, fem_salario: 12620.80 },
                        { area: "Arrendamento mercantil", masc_ocupado: 109, fem_ocupado: 106, masc_salario: 15465.12, fem_salario: 9952.82 },
                        { area: "Sociedades de capitalizaÃ§Ã£o", masc_ocupado: 893, fem_ocupado: 962, masc_salario: 9385.42, fem_salario: 6710.00 },
                        { area: "Atividades de sociedades de participaÃ§Ã£o", masc_ocupado: 29687, fem_ocupado: 28995, masc_salario: 8878.65, fem_salario: 6011.02 },
                        { area: "Fundos de investimento", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "Atividades de serviÃ§os financeiros nÃ£o especificadas anteriormente", masc_ocupado: 9422, fem_ocupado: 12918, masc_salario: 6298.06, fem_salario: 3970.86 },
                        { area: "Seguros, resseguros, previdÃªncia complementar e planos de saÃºde", masc_ocupado: 89146, fem_ocupado: 220660, masc_salario: 6103.75, fem_salario: 3982.15 },
                        { area: "Seguros de vida e nÃ£o vida", masc_ocupado: 20443, fem_ocupado: 26239, masc_salario: 9427.25, fem_salario: 6072.10 },
                        { area: "Seguros-saÃºde", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "Resseguros", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "PrevidÃªncia complementar", masc_ocupado: 4361, fem_ocupado: 5736, masc_salario: 10484.43, fem_salario: 7708.00 },
                        { area: "Planos de saÃºde", masc_ocupado: 61911, fem_ocupado: 184293, masc_salario: 4542.94, fem_salario: 3489.83 },
                        { area: "Atividades auxiliares dos serviÃ§os financeiros, seguros, previdÃªncia complementar e planos de saÃºde", masc_ocupado: 81664, fem_ocupado: 113851, masc_salario: 13220.25, fem_salario: 5919.34 },
                        { area: "Atividades auxiliares dos serviÃ§os financeiros", masc_ocupado: 50342, fem_ocupado: 54796, masc_salario: 14615.53, fem_salario: 7318.40 },
                        { area: "Atividades auxiliares dos seguros, da previdÃªncia complementar e dos planos de saÃºde", masc_ocupado: 26071, fem_ocupado: 55193, masc_salario: 5357.03, fem_salario: 3547.08 },
                        { area: "Atividades de administraÃ§Ã£o de fundos por contrato ou comissÃ£o", masc_ocupado: 5251, fem_ocupado: 3862, masc_salario: 39798.51, fem_salario: 20708.83 }
                    ]
                },
                {
                    grupo: "Atividades imobiliÃ¡rias",
                    areas: [
                        { area: "Atividades imobiliÃ¡rias", masc_ocupado: 88429, fem_ocupado: 100470, masc_salario: 3171.52, fem_salario: 2694.88 },
                        { area: "Atividades imobiliÃ¡rias de imÃ³veis prÃ³prios", masc_ocupado: 35118, fem_ocupado: 21647, masc_salario: 3611.50, fem_salario: 3761.76 },
                        { area: "Atividades imobiliÃ¡rias por contrato ou comissÃ£o", masc_ocupado: 53311, fem_ocupado: 78823, masc_salario: 2882.96, fem_salario: 2413.03 }
                    ]
                },
                {
                    grupo: "Atividades profissionais, cientÃ­ficas e tÃ©cnicas",
                    areas: [
                        { area: "Atividades profissionais, cientÃ­ficas e tÃ©cnicas", masc_ocupado: 667547, fem_ocupado: 651952, masc_salario: 4443.09, fem_salario: 3539.17 },
                        { area: "Atividades jurÃ­dicas, de contabilidade e de auditoria", masc_ocupado: 139384, fem_ocupado: 298532, masc_salario: 3164.13, fem_salario: 2823.42 },
                        { area: "Atividades jurÃ­dicas", masc_ocupado: 31655, fem_ocupado: 78413, masc_salario: 4263.76, fem_salario: 3596.95 },
                        { area: "Atividades de contabilidade, consultoria e auditoria contÃ¡bil e tributÃ¡ria", masc_ocupado: 107729, fem_ocupado: 220119, masc_salario: 2860.94, fem_salario: 2564.23 },
                        { area: "Atividades de sedes de empresas e de consultoria em gestÃ£o empresarial", masc_ocupado: 72370, fem_ocupado: 71280, masc_salario: 8152.13, fem_salario: 5361.12 },
                        { area: "Sedes de empresas e unidades administrativas locais", masc_ocupado: 0, fem_ocupado: 0, masc_salario: 0, fem_salario: 0 },
                        { area: "Atividades de consultoria em gestÃ£o empresarial", masc_ocupado: 72370, fem_ocupado: 71280, masc_salario: 8152.13, fem_salario: 5361.12 },
                        { area: "ServiÃ§os de arquitetura e engenharia; testes e anÃ¡lises tÃ©cnicas", masc_ocupado: 265718, fem_ocupado: 85276, masc_salario: 3742.19, fem_salario: 3815.69 },
                        { area: "ServiÃ§os de arquitetura e engenharia e atividades tÃ©cnicas relacionadas", masc_ocupado: 236467, fem_ocupado: 69927, masc_salario: 3700.03, fem_salario: 3903.02 },
                        { area: "Testes e anÃ¡lises tÃ©cnicas", masc_ocupado: 29251, fem_ocupado: 15349, masc_salario: 4060.99, fem_salario: 3435.52 },
                        { area: "Pesquisa e desenvolvimento cientÃ­fico", masc_ocupado: 27385, fem_ocupado: 19935, masc_salario: 11356.64, fem_salario: 10693.17 },
                        { area: "Pesquisa e desenvolvimento experimental em ciÃªncias fÃ­sicas e naturais", masc_ocupado: 25786, fem_ocupado: 17849, masc_salario: 11767.00, fem_salario: 11491.67 },
                        { area: "Pesquisa e desenvolvimento experimental em ciÃªncias sociais e humanas", masc_ocupado: 1599, fem_ocupado: 2086, masc_salario: 4575.33, fem_salario: 3971.85 },
                        { area: "Publicidade e pesquisa de mercado", masc_ocupado: 78701, fem_ocupado: 77571, masc_salario: 3321.95, fem_salario: 3078.97 },
                        { area: "Publicidade", masc_ocupado: 75124, fem_ocupado: 73302, masc_salario: 3076.94, fem_salario: 2894.13 },
                        { area: "Pesquisas de mercado e de opiniÃ£o pÃºblica", masc_ocupado: 3577, fem_ocupado: 4269, masc_salario: 8343.64, fem_salario: 6186.20 },
                        { area: "Outras atividades profissionais, cientÃ­ficas e tÃ©cnicas", masc_ocupado: 73786, fem_ocupado: 77007, masc_salario: 4776.10, fem_salario: 3467.65 },
                        { area: "Design e decoraÃ§Ã£o de interiores", masc_ocupado: 2052, fem_ocupado: 1980, masc_salario: 3142.14, fem_salario: 3332.66 },
                        { area: "Atividades fotogrÃ¡ficas e similares", masc_ocupado: 4570, fem_ocupado: 6275, masc_salario: 2038.78, fem_salario: 1719.15 },
                        { area: "Atividades profissionais, cientÃ­ficas e tÃ©cnicas nÃ£o especificadas anteriormente", masc_ocupado: 67164, fem_ocupado: 68752, masc_salario: 5014.79, fem_salario: 3631.73 },
                        { area: "Atividades veterinÃ¡rias", masc_ocupado: 10203, fem_ocupado: 22351, masc_salario: 1895.03, fem_salario: 1862.51 }
                    ]
                },
                {
                    grupo: "Atividades administrativas e serviÃ§os complementares",
                    areas: [
                        { area: "Atividades administrativas e serviÃ§os complementares", masc_ocupado: 2952114, fem_ocupado: 2262647, masc_salario: 2313.37, fem_salario: 1838.17 },
                        { area: "AluguÃ©is nÃ£o imobiliÃ¡rios e gestÃ£o de ativos intangÃ­veis nÃ£o financeiros", masc_ocupado: 215219, fem_ocupado: 87194, masc_salario: 3114.18, fem_salario: 2910.57 },
                        { area: "LocaÃ§Ã£o de meios de transporte sem condutor", masc_ocupado: 57464, fem_ocupado: 25414, masc_salario: 3403.50, fem_salario: 3454.01 },
                        { area: "Aluguel de objetos pessoais e domÃ©sticos", masc_ocupado: 11475, fem_ocupado: 16353, masc_salario: 2021.95, fem_salario: 1651.25 },
                        { area: "Aluguel de mÃ¡quinas e equipamentos sem operador", masc_ocupado: 138128, fem_ocupado: 34984, masc_salario: 2935.20, fem_salario: 2815.19 },
                        { area: "GestÃ£o de ativos intangÃ­veis nÃ£o financeiros", masc_ocupado: 8152, fem_ocupado: 10443, masc_salario: 5878.65, fem_salario: 4017.81 },
                        { area: "SeleÃ§Ã£o, agenciamento e locaÃ§Ã£o de mÃ£o de obra", masc_ocupado: 481235, fem_ocupado: 455898, masc_salario: 2183.52, fem_salario: 1833.41 },
                        { area: "SeleÃ§Ã£o e agenciamento de mÃ£o de obra", masc_ocupado: 75418, fem_ocupado: 73592, masc_salario: 2289.69, fem_salario: 1883.78 },
                        { area: "LocaÃ§Ã£o de mÃ£o de obra temporÃ¡ria", masc_ocupado: 305452, fem_ocupado: 280189, masc_salario: 2072.41, fem_salario: 1867.96 },
                        { area: "Fornecimento e gestÃ£o de recursos humanos para terceiros", masc_ocupado: 100365, fem_ocupado: 102117, masc_salario: 2402.83, fem_salario: 1719.31 },
                        { area: "AgÃªncias de viagens, operadores turÃ­sticos e serviÃ§os de reservas", masc_ocupado: 25604, fem_ocupado: 31913, masc_salario: 3600.77, fem_salario: 3390.61 },
                        { area: "AgÃªncias de viagens e operadores turÃ­sticos", masc_ocupado: 22974, fem_ocupado: 29299, masc_salario: 3521.46, fem_salario: 3377.07 },
                        { area: "ServiÃ§os de reservas e outros serviÃ§os de turismo nÃ£o especificados anteriormente", masc_ocupado: 2630, fem_ocupado: 2614, masc_salario: 4158.36, fem_salario: 3518.24 },
                        { area: "Atividades de vigilÃ¢ncia, seguranÃ§a e investigaÃ§Ã£o", masc_ocupado: 557613, fem_ocupado: 106968, masc_salario: 2494.06, fem_salario: 2236.76 },
                        { area: "Atividades de vigilÃ¢ncia, seguranÃ§a privada e transporte de valores", masc_ocupado: 492136, fem_ocupado: 76738, masc_salario: 2539.83, fem_salario: 2355.50 },
                        { area: "Atividades de monitoramento de sistemas de seguranÃ§a", masc_ocupado: 65335, fem_ocupado: 30175, masc_salario: 2136.80, fem_salario: 1929.24 },
                        { area: "Atividades de investigaÃ§Ã£o particular", masc_ocupado: 142, fem_ocupado: 55, masc_salario: 3024.97, fem_salario: 2439.16 },
                        { area: "ServiÃ§os para edifÃ­cios e atividades paisagÃ­sticas", masc_ocupado: 1035096, fem_ocupado: 744435, masc_salario: 2048.07, fem_salario: 1523.01 },
                        { area: "ServiÃ§os combinados para apoio a edifÃ­cios", masc_ocupado: 639244, fem_ocupado: 234795, masc_salario: 2240.92, fem_salario: 1672.06 },
                        { area: "Atividades de limpeza", masc_ocupado: 367739, fem_ocupado: 502981, masc_salario: 1742.51, fem_salario: 1456.02 },
                        { area: "Atividades paisagÃ­sticas", masc_ocupado: 28113, fem_ocupado: 6659, masc_salario: 1720.02, fem_salario: 1570.08 },
                        { area: "ServiÃ§os de escritÃ³rio, de apoio administrativo e outros serviÃ§os prestados Ã s empresas", masc_ocupado: 637347, fem_ocupado: 836239, masc_salario: 2369.12, fem_salario: 1913.18 },
                        { area: "ServiÃ§os de escritÃ³rio e apoio administrativo", masc_ocupado: 288975, fem_ocupado: 290851, masc_salario: 2138.72, fem_salario: 1956.50 },
                        { area: "Atividades de teleatendimento", masc_ocupado: 124664, fem_ocupado: 289306, masc_salario: 2092.72, fem_salario: 1649.29 },
                        { area: "Atividades de organizaÃ§Ã£o de eventos, exceto culturais e esportivos", masc_ocupado: 25382, fem_ocupado: 24243, masc_salario: 1984.85, fem_salario: 1946.85 },
                        { area: "Outras atividades de serviÃ§os prestados principalmente Ã s empresas", masc_ocupado: 198326, fem_ocupado: 231839, masc_salario: 2912.12, fem_salario: 2205.31 }
                    ]
                },
                {
                    grupo: "AdministraÃ§Ã£o pÃºblica, defesa e seguridade social",
                    areas: [
                        { area: "AdministraÃ§Ã£o pÃºblica, defesa e seguridade social", masc_ocupado: 3377254, fem_ocupado: 4494408, masc_salario: 5836.65, fem_salario: 4522.59 },
                        { area: "AdministraÃ§Ã£o do estado e da polÃ­tica econÃ´mica e social", masc_ocupado: 2517035, fem_ocupado: 4173929, masc_salario: 4739.87, fem_salario: 4082.87 },
                        { area: "ServiÃ§os coletivos prestados pela administraÃ§Ã£o pÃºblica", masc_ocupado: 841045, fem_ocupado: 292573, masc_salario: 9139.05, fem_salario: 10966.31 },
                        { area: "Seguridade social obrigatÃ³ria", masc_ocupado: 19174, fem_ocupado: 27906, masc_salario: 6784.38, fem_salario: 5990.24 }
                    ]
                },
                {
                    grupo: "EducaÃ§Ã£o",
                    areas: [
                        { area: "EducaÃ§Ã£o", masc_ocupado: 1119065, fem_ocupado: 2302343, masc_salario: 4845.77, fem_salario: 3932.52 },
                        { area: "EducaÃ§Ã£o infantil e ensino fundamental", masc_ocupado: 150954, fem_ocupado: 694389, masc_salario: 2685.80, fem_salario: 2990.86 },
                        { area: "Ensino mÃ©dio", masc_ocupado: 337549, fem_ocupado: 838455, masc_salario: 4218.73, fem_salario: 3985.91 },
                        { area: "EducaÃ§Ã£o superior", masc_ocupado: 400254, fem_ocupado: 469090, masc_salario: 7155.17, fem_salario: 6046.81 },
                        { area: "EducaÃ§Ã£o profissional de nÃ­vel tÃ©cnico e tecnolÃ³gico", masc_ocupado: 26423, fem_ocupado: 33078, masc_salario: 4848.44, fem_salario: 3782.33 },
                        { area: "Atividades de apoio Ã  educaÃ§Ã£o", masc_ocupado: 22523, fem_ocupado: 40639, masc_salario: 3179.07, fem_salario: 2539.68 },
                        { area: "Outras atividades de ensino", masc_ocupado: 181362, fem_ocupado: 226692, masc_salario: 2926.35, fem_salario: 2514.52 }
                    ]
                },
                {
                    grupo: "SaÃºde humana e serviÃ§os sociais",
                    areas: [
                        { area: "SaÃºde humana e serviÃ§os sociais", masc_ocupado: 860499, fem_ocupado: 2549522, masc_salario: 3794.81, fem_salario: 3069.17 },
                        { area: "Atividades de atenÃ§Ã£o Ã  saÃºde humana", masc_ocupado: 746843, fem_ocupado: 2251162, masc_salario: 3993.05, fem_salario: 3175.70 },
                        { area: "Atividades de atendimento hospitalar", masc_ocupado: 545392, fem_ocupado: 1502556, masc_salario: 4280.61, fem_salario: 3515.52 },
                        { area: "ServiÃ§os mÃ³veis de atendimento a urgÃªncias e de remoÃ§Ã£o de pacientes", masc_ocupado: 11576, fem_ocupado: 6672, masc_salario: 2140.58, fem_salario: 2135.69 },
                        { area: "Atividades de atenÃ§Ã£o ambulatorial executadas por mÃ©dicos e odontÃ³logos", masc_ocupado: 70111, fem_ocupado: 352009, masc_salario: 2750.53, fem_salario: 2131.39 },
                        { area: "Atividades de serviÃ§os de complementaÃ§Ã£o diagnÃ³stica e terapÃªutica", masc_ocupado: 62564, fem_ocupado: 234369, masc_salario: 3059.75, fem_salario: 2386.80 },
                        { area: "Atividades de profissionais da Ã¡rea de saÃºde, exceto mÃ©dicos e odontÃ³logos", masc_ocupado: 12900, fem_ocupado: 52987, masc_salario: 2135.73, fem_salario: 1911.17 },
                        { area: "Atividades de apoio Ã  gestÃ£o de saÃºde", masc_ocupado: 42347, fem_ocupado: 95059, masc_salario: 4769.88, fem_salario: 4378.42 },
                        { area: "Atividades de atenÃ§Ã£o Ã  saÃºde humana nÃ£o especificadas anteriormente", masc_ocupado: 1953, fem_ocupado: 7510, masc_salario: 3051.38, fem_salario: 2172.92 },
                        { area: "Atividades de atenÃ§Ã£o Ã  saÃºde humana integradas com assistÃªncia social, prestadas em residÃªncias coletivas e particulares", masc_ocupado: 35142, fem_ocupado: 124707, masc_salario: 2192.74, fem_salario: 1976.48 },
                        { area: "Atividades de assistÃªncia a idosos, deficientes fÃ­sicos, imunodeprimidos e convalescentes, e de infraestrutura e apoio a pacientes prestadas em residÃªncias coletivas e particulares", masc_ocupado: 18835, fem_ocupado: 87508, masc_salario: 2033.61, fem_salario: 1828.74 },
                        { area: "Atividades de assistÃªncia psicossocial e Ã  saÃºde a portadores de distÃºrbios psÃ­quicos, deficiÃªncia mental e dependÃªncia quÃ­mica", masc_ocupado: 5802, fem_ocupado: 9778, masc_salario: 2204.17, fem_salario: 2343.05 },
                        { area: "Atividades de assistÃªncia social prestadas em residÃªncias coletivas e particulares", masc_ocupado: 10505, fem_ocupado: 27421, masc_salario: 2473.16, fem_salario: 2326.88 },
                        { area: "ServiÃ§os de assistÃªncia social sem alojamento", masc_ocupado: 78514, fem_ocupado: 173653, masc_salario: 2603.15, fem_salario: 2470.35 }
                    ]
                },
                {
                    grupo: "Artes, cultura, esporte e recreaÃ§Ã£o",
                    areas: [
                        { area: "Artes, cultura, esporte e recreaÃ§Ã£o", masc_ocupado: 161302, fem_ocupado: 123247, masc_salario: 3244.12, fem_salario: 2046.99 },
                        { area: "Atividades artÃ­sticas, criativas e de espetÃ¡culos", masc_ocupado: 10654, fem_ocupado: 6106, masc_salario: 3291.35, fem_salario: 3691.75 },
                        { area: "Atividades ligadas ao patrimÃ´nio cultural e ambiental", masc_ocupado: 5709, fem_ocupado: 5108, masc_salario: 4077.57, fem_salario: 4512.01 },
                        { area: "Atividades de exploraÃ§Ã£o de jogos de azar e apostas", masc_ocupado: 384, fem_ocupado: 163, masc_salario: 2609.34, fem_salario: 3150.04 },
                        { area: "Atividades esportivas e de recreaÃ§Ã£o e lazer", masc_ocupado: 144555, fem_ocupado: 111870, masc_salario: 3209.78, fem_salario: 1839.90 },
                        { area: "Atividades esportivas", masc_ocupado: 124949, fem_ocupado: 93198, masc_salario: 3359.96, fem_salario: 1835.66 },
                        { area: "Atividades de recreaÃ§Ã£o e lazer", masc_ocupado: 19606, fem_ocupado: 18672, masc_salario: 2248.81, fem_salario: 1861.44 }
                    ]
                },
                {
                    grupo: "Outras atividades de serviÃ§os",
                    areas: [
                        { area: "Outras atividades de serviÃ§os", masc_ocupado: 355928, fem_ocupado: 398007, masc_salario: 2520.06, fem_salario: 2344.20 },
                        { area: "Atividades de organizaÃ§Ãµes associativas", masc_ocupado: 215123, fem_ocupado: 229942, masc_salario: 2688.00, fem_salario: 2709.36 },
                        { area: "Atividades de organizaÃ§Ãµes associativas patronais, empresariais e profissionais", masc_ocupado: 37012, fem_ocupado: 51607, masc_salario: 5384.54, fem_salario: 4226.93 },
                        { area: "Atividades de organizaÃ§Ãµes sindicais", masc_ocupado: 77364, fem_ocupado: 33839, masc_salario: 1262.40, fem_salario: 2380.88 },
                        { area: "Atividades de associaÃ§Ãµes de defesa de direitos sociais", masc_ocupado: 29763, fem_ocupado: 43582, masc_salario: 2891.62, fem_salario: 2742.63 },
                        { area: "Atividades de organizaÃ§Ãµes associativas nÃ£o especificadas anteriormente", masc_ocupado: 70984, fem_ocupado: 100914, masc_salario: 2649.23, fem_salario: 2029.22 },
                        { area: "ReparaÃ§Ã£o e manutenÃ§Ã£o de equipamentos de informÃ¡tica e comunicaÃ§Ã£o e de objetos pessoais e domÃ©sticos", masc_ocupado: 68199, fem_ocupado: 29110, masc_salario: 2463.82, fem_salario: 2062.75 },
                        { area: "ReparaÃ§Ã£o e manutenÃ§Ã£o de equipamentos de informÃ¡tica e comunicaÃ§Ã£o", masc_ocupado: 38639, fem_ocupado: 16718, masc_salario: 2868.43, fem_salario: 2299.07 },
                        { area: "ReparaÃ§Ã£o e manutenÃ§Ã£o de objetos e equipamentos pessoais e domÃ©sticos", masc_ocupado: 29560, fem_ocupado: 12392, masc_salario: 1947.34, fem_salario: 1743.68 },
                        { area: "Outras atividades de serviÃ§os pessoais", masc_ocupado: 72606, fem_ocupado: 138955, masc_salario: 2088.73, fem_salario: 1799.57 }
                    ]
                },
                {
                    grupo: "Organismos internacionais e outras instituiÃ§Ãµes extraterritoriais",
                    areas: [
                        { area: "Organismos internacionais e outras instituiÃ§Ãµes extraterritoriais", masc_ocupado: 1375, fem_ocupado: 1376, masc_salario: 4717.09, fem_salario: 9018.70 }
                    ]
                }      
    ];

    const groupInput = document.getElementById("group");
    const areaInput = document.getElementById("area");
    const groupAutocomplete = document.getElementById("groupAutocomplete");
    const areaAutocomplete = document.getElementById("areaAutocomplete");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const resultsDiv = document.getElementById("results");
    const resultHeader = document.getElementById("resultHeader");
    const occupancy = document.getElementById("occupancy");
    const salary = document.getElementById("salary");
    const comparison = document.getElementById("comparison");

    const occupancyChartCtx = document.getElementById('occupancyChart').getContext('2d');
    const salaryChartCtx = document.getElementById('salaryChart').getContext('2d');

    let occupancyChart, salaryChart;

    // FunÃƒÂ§ÃƒÂ£o para mostrar sugestÃƒÂµes de autocomplete
    function showSuggestions(input, suggestions, listElement) {
        listElement.innerHTML = '';
        suggestions.forEach(suggestion => {
            const div = document.createElement("div");
            div.classList.add("autocomplete-suggestion");
            div.textContent = suggestion;
            div.addEventListener("click", () => {
                input.value = suggestion;
                listElement.innerHTML = '';
                if (input.id === 'group') {
                    updateAreaAutocomplete(suggestion);
                }
            });
            listElement.appendChild(div);
        });
    }

    // Atualiza as sugestÃƒÂµes de ÃƒÂ¡rea com base no grupo selecionado
    function updateAreaAutocomplete(selectedGroup) {
        const group = data.find(group => group.grupo === selectedGroup);
        if (group) {
            showSuggestions(areaInput, group.areas.map(area => area.area), areaAutocomplete);
        } else {
            areaAutocomplete.innerHTML = '';
        }
    }

    // Mostra sugestÃƒÂµes ao clicar e ao digitar
    groupInput.addEventListener("focus", () => {
        showSuggestions(groupInput, data.map(group => group.grupo), groupAutocomplete);
    });

    groupInput.addEventListener("input", () => {
        showSuggestions(groupInput, data.map(group => group.grupo), groupAutocomplete);
    });

    // Atualiza o autocomplete das ÃƒÂ¡reas ao selecionar um grupo
    groupInput.addEventListener("change", () => {
        updateAreaAutocomplete(groupInput.value);
    });

    // Popula o autocomplete das ÃƒÂ¡reas ao clicar e ao digitar
    areaInput.addEventListener("focus", () => {
        const selectedGroup = data.find(group => group.grupo === groupInput.value);
        if (selectedGroup) {
            showSuggestions(areaInput, selectedGroup.areas.map(area => area.area), areaAutocomplete);
        }
    });

    areaInput.addEventListener("input", () => {
        const selectedGroup = data.find(group => group.grupo === groupInput.value);
        if (selectedGroup) {
            showSuggestions(areaInput, selectedGroup.areas.map(area => area.area), areaAutocomplete);
        }
    });

    // Exibe os resultados ao clicar no botÃƒÂ£o
    submitBtn.addEventListener("click", () => {
        const selectedGroup = data.find(group => group.grupo === groupInput.value);
        const selectedArea = selectedGroup ? selectedGroup.areas.find(area => area.area === areaInput.value) : null;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        if (selectedArea) {
            resultsDiv.style.display = "block"; // Mostra a seÃƒÂ§ÃƒÂ£o de resultados
            resultHeader.innerHTML = `${selectedGroup.grupo}<br>${selectedArea.area}`;
            occupancy.innerHTML = `<center><big><strong>NÃºmero de ocupados</strong></big><br><strong> ${selectedArea.masc_ocupado.toLocaleString('pt-BR')} </strong> homens
                <br><strong>${selectedArea.fem_ocupado.toLocaleString('pt-BR')}</strong> mulheres</center>`;
            salary.innerHTML = `<br><center><big><strong>SalÃ¡rio mÃ©dio</strong></big><br><strong> R$ ${selectedArea.masc_salario.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong> homens <br><strong>R$ ${selectedArea.fem_salario.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong> mulheres </center>`;

            if (occupancyChart) occupancyChart.destroy();
            if (salaryChart) salaryChart.destroy();

            const colors = gender === 'masc' ? ['#c4170c', '#d6d6d6'] : ['#d6d6d6', '#c4170c'];

            occupancyChart = new Chart(occupancyChartCtx, {
                type: 'bar',
                data: {
                    labels: [
                        `Homens: ${selectedArea.masc_ocupado.toLocaleString('pt-BR')}`,
                        `Mulheres: ${selectedArea.fem_ocupado.toLocaleString('pt-BR')}`
                    ],
                    datasets: [{
                        data: [selectedArea.masc_ocupado, selectedArea.fem_ocupado],
                        backgroundColor: colors
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            formatter: (value, context) => {
                                return `${context.chart.data.labels[context.dataIndex]}`;
                            },
                            color: '#000',
                            font: {
                                weight: 'bold',
                                align: 'center'
                            }
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                title: function(tooltipItems) {
                                    return tooltipItems[0].label;
                                },
                                label: function() {
                                    return '';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            salaryChart = new Chart(salaryChartCtx, {
                type: 'bar',
                data: {
                    labels: [
                        `Homens: R$ ${selectedArea.masc_salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                        `Mulheres: R$ ${selectedArea.fem_salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                    ],
                    datasets: [{
                        data: [selectedArea.masc_salario, selectedArea.fem_salario],
                        backgroundColor: colors
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            formatter: (value, context) => {
                                return `${context.chart.data.labels[context.dataIndex]}`;
                            },
                            color: '#000',
                            font: {
                                weight: 'bold'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                title: function(tooltipItems) {
                                    return tooltipItems[0].label;
                                },
                                label: function() {
                                    return '';
                                }
                            }
                        },
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true
                        }
                    }
                }
            });

        } else {
            resultsDiv.style.display = "none"; // Esconde a seÃƒÂ§ÃƒÂ£o de resultados
            occupancy.textContent = "Selecione um grupo e uma Ã¡rea vÃ¡lidos.";
            salary.textContent = "";
            comparison.textContent = "";
        }
    });

    // Limpa os campos de busca ao clicar no botÃƒÂ£o "Fazer Nova Busca"
    resetBtn.addEventListener("click", () => {
        document.querySelector('input[name="gender"]:checked').checked = false;
        groupInput.value = '';
        areaInput.value = '';
        areaAutocomplete.innerHTML = '';
        resultsDiv.style.display = "none";
    });
});