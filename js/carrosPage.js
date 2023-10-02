(
    function (win, doc) {
        const $carrosArea = doc.querySelector("#carros")
        const $pesquisaInput = doc.querySelector("#pesquisaInput")
        const $pesquisaButton = doc.querySelector("#pesquisaButton")
        const $filtroTodos = doc.querySelector("#filtroTodos")
        const $filtroCarro = doc.querySelector("#filtroCarro")
        const $filtroCaminhao = doc.querySelector("#filtroCaminhao")
        const $filtroVan = doc.querySelector("#filtroVan")
        const $filtroBus = doc.querySelector("#filtroBus")
        const botoesFiltros = [$filtroCarro, $filtroVan, $filtroBus, $filtroCaminhao]
        const filtrosTipo = ["carro", "van", "microonibus", "caminhao"]

        win.onload = carregarCarros(carros)

        $pesquisaButton.addEventListener('click', () => {
            const valorAPesquisar = $pesquisaInput.value.toLocaleLowerCase()
            const carrosFiltrados = carros.filter((carro) => {
                return carro.nome.toLocaleLowerCase().includes(valorAPesquisar) || carro.empresa.toLocaleLowerCase().includes(valorAPesquisar)
            })

            resetarCarros()
            carregarCarros(carrosFiltrados)
        })

        botoesFiltros.forEach((botao, index) => {
            botao.addEventListener('click', () => {
                const carrosFiltrados = carros.filter(carro => carro.tipo == filtrosTipo[index])
                resetarCarros()
                carregarCarros(carrosFiltrados)
            })
        })

        $filtroTodos.addEventListener('click', () => {
            resetarCarros()
            carregarCarros(carros)
        })

        function carregarCarros (listaCarros) {
            listaCarros.forEach((carro) => {
                const carroCard = doc.createElement("div")
                const carroImg = doc.createElement("img")
                const carroInfo = doc.createElement("div")
                const carroTitulo = doc.createElement("span")
                const carroEmpresa = doc.createElement("span")
                const carroDiaria = doc.createElement("span")
                const botaoAlugar = doc.createElement("button")
                carroCard.setAttribute("class", "carro")
                carroInfo.setAttribute("class", "carroInfo")
                carroTitulo.setAttribute("class", "carroNome")
                carroEmpresa.setAttribute("class", "empresaNome")
                carroDiaria.setAttribute("class", "carroDiaria")
                botaoAlugar.setAttribute("class", "botaoAlugar")

                carroImg.setAttribute("src", carro.imagem)
                carroCard.appendChild(carroImg)
                carroTitulo.innerHTML = carro.nome
                carroInfo.appendChild(carroTitulo)
                carroEmpresa.innerHTML = carro.empresa
                carroInfo.appendChild(carroEmpresa)
                carroCard.appendChild(carroInfo)
                carroDiaria.innerHTML = `${carro.diaria}/dia`
                carroCard.appendChild(carroDiaria)
                botaoAlugar.innerHTML = "Alugar"
                carroCard.appendChild(botaoAlugar)

                $carrosArea.appendChild(carroCard)
            })
        }

        function resetarCarros() {
            while ($carrosArea.lastElementChild) {
                $carrosArea.removeChild($carrosArea.lastElementChild);
              }
        }
    }
)(window, document)
