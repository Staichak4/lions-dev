const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
    2. Listar todos os funcionários
	3. Exibir maior salário
	4. Editar funcionários
	5. Deletar funcionario
    6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listaFuncionarios()
				break
            case '3':
                maiorSalario()
                break;
			case '4':
				editarFuncionario()
				break;
			case '5':
                deletarFuncionario()
                break;
            case '6':
                rl.close()
                break;
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listaFuncionarios() {
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i])        
    }
    exibirMenu()
}

function maiorSalario() {
let maxSalario = []

    if (funcionarios.lenght == 0) {
        console.log('Não há ninguem na lista.')
        exibirMenu()
    } else {
        for (let i = 0; i < funcionarios.length; i++) {
			if (funcionarios[i].salario > maxSalario) {
				maxSalario = funcionarios[i].salario
			}
            }
        }
console.log(`O maior salário é ${maxSalario}}`)
}

function editarFuncionario() {
	if (funcionarios.length == 0) {
		console.log('Não há ninguem na lista.')	
		exibirMenu()
	} else {
		rl.question('Digite o número do elemento que deseja editar: ', (opcao) => {
			if (opcao > 0 && opcao <= funcionarios.length) {
				rl.question('Digite o novo nome: ', (nome) => {
				rl.question('Digite o novo cargo: ', (cargo) => {
				rl.question('Digite o novo salário: ', (salario) => {
					funcionarios[opcao - 1] = {
						nome,
						cargo,
						salario
				}
		console.log('editado com sucesso!')
		exibirMenu()
		})
			})
				})
	} else {
		console.log('Número inválido, tente novamente.')
		exibirMenu()
			}
		})
		
	}
}

function deletarFuncionario() {
	if (funcionarios.length == 0) {
		console.log('Nada cadastrado.')
		exibirMenu()
	} else {
		console.log('Lista de elementos')
		funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. ${funcionarios.nome}`)
		})
		rl.question('Digite o número do elemento que deseja remover: ', (opcao) => {
			if (opcao > 0 && opcao <= funcionarios.length) {
				funcionarios.splice(opcao - 1, 1)
				console.log('Elemento removido com sucesso!')
				exibirMenu()
			} else {
				console.log('Número inválido, tente novamente.')
				exibirMenu()
			}
		})
	}
}