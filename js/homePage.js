(
    function (win, doc) {
        const $recomendarCarroButton = doc.querySelector("#recomendarCarro")
        const $recomendacaoImg = doc.querySelector("#recomendacaoImg")
        const $recomendacaoNome = doc.querySelector("#recomendacaoNome")
        var pergunta1 = document.querySelectorAll("[name=pergunta1]")
        var pergunta2 = document.querySelectorAll("[name=pergunta2]")
        var tipoVeiculo;
        var tipoViagem;

        pergunta1.forEach((opcao) => {
            opcao.addEventListener('click', () => {
                tipoVeiculo = opcao.value
            })
        })

        pergunta2.forEach((opcao) => {
            opcao.addEventListener('click', () => {
                tipoViagem = opcao.value
            })
        })

        $recomendarCarroButton.addEventListener('click', (e) => {
            e.preventDefault()
            const carrosRecomendados = carros.filter((carro) => {
                return carro.tipo === tipoVeiculo && carro.categoria === tipoViagem
            })
            const recomendacao = carrosRecomendados[0]
            $recomendacaoImg.setAttribute('src', recomendacao.imagem)
            $recomendacaoNome.style["font-weight"] = 500;
            $recomendacaoNome.innerHTML = recomendacao.nome
        })
    }
)(window, document)
