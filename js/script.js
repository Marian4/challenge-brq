(
    function (win, doc) {
        const carros = [
            {
                nome: "Mercedes Benz Sprinter",
                categoria: "cidade",
                tipo: "van",
                imagem: "https://revistacarro.com.br/wp-content/uploads/2020/04/MB-Sprinter_1.jpg"
            },
            {
                nome: "Jeep Wrangler",
                categoria: "praia",
                tipo: "carro",
                imagem: "https://cdn.motor1.com/images/mgl/jl2qoo/s3/2024-jeep-wrangler-front-view.webp"
            },
            {
                nome: "Renault Sandero Stepway",
                categoria: "cachoeira",
                tipo: "carro",
                imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/10/stepway10_001-1-e1665169601442.jpg?quality=70&strip=info&w=1280&h=720&crop=1"
            },
            {
                nome: "Renault Kwid",
                categoria: "cidade",
                tipo: "carro",
                imagem: "https://renault.grupoamazonas.com.br/wp-content/uploads/2021/11/img-renault-kwid.jpg"
            },
            {
                nome: "volkswagen crossfox",
                categoria: "fazenda",
                tipo: "carro",
                imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2017/12/crossfox5.jpg?quality=70&strip=info"
            }
        ]

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
            $recomendacaoNome.innerHTML = recomendacao.nome
        })
    }
)(window, document)
