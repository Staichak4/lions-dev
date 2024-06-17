const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let filmes = []

menuFilmes()

function menuFilmes() {
    console.log(`
        1. Cadastrar filme
        2. Filmes listados
        3. Editar filme cadastrado
        4. Deletar filme
        5. Sair
    `)

    rl.question(`Escolha uma opção: `, (opcao) => {
        switch(opcao) {
            case '1':
                cadastroFilme()
                break;
            case '2':
                listaFilmes()
                break;
            case '3':
                editarFilmes()
                break;
            case '4':
                deletarFilme()
                break;
            case '5':
                console.log('Tchau, até mais tarde!')
                rl.close()
                break;
            default:
                console.log("Opção inválida, tente novamente.")
                menuFilmes()
                break;
                
        }
    })
}

function cadastroFilme() {
    rl.question('Digite o nome do filme: ', (nome) => {
		rl.question('Digite o diretor do filme: ', (diretor) => {
			rl.question('Digite o ano do filme: ', (ano) => {
				filmes.push({ nome: nome, diretor: diretor, ano: parseInt(ano) })
				console.log('Filme cadastrado com sucesso!')
				menuFilmes()
			})
		})
	})
}

function listaFilmes() {
    for (let i = 0; i < filmes.length; i++) {
        console.log(filmes[i])        
    }
    menuFilmes()
}

function editarFilmes() {
    if (filmes.length == 0) {
		console.log('Não há nenhum filme na lista.')	
		menuFilmes()
	} else {
		rl.question('Digite o número do elemento que deseja editar: ', (opcao) => {
			if (opcao > 0 && opcao <= filmes.length) {
				rl.question('Digite o novo nome: ', (nome) => {
				rl.question('Digite o novo diretor: ', (diretor) => {
				rl.question('Digite o novo ano: ', (ano) => {
					filmes[opcao - 1] = {
						nome,
						diretor,
						ano
				}
		console.log('filme editado com sucesso!')
		menuFilmes()
		})
			})
				})
	} else {
		console.log('Número inválido, tente novamente.')
		menuFilmes()
			}
		})
		
	}
}

function deletarFilme() {
    if (filmes.length == 0) {
		console.log('Nada cadastrado.')
		menuFilmes()
	} else {
		console.log('Lista de elementos')
		filmes.forEach((filmes, index) => {
			console.log(`${index + 1}. ${filmes.nome}`)
		})
		rl.question('Digite o número do elemento que deseja remover: ', (opcao) => {
			if (opcao > 0 && opcao <= filmes.length) {
				filmes.splice(opcao - 1, 1)
				console.log('Elemento removido com sucesso!')
				menuFilmes()
			} else {
				console.log('Número inválido, tente novamente.')
				menuFilmes()
			}
		})
	}
    }
