const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}
const idof = f => f.id === 469;

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .filter(menorSalario)
    .filter(idof)

    //console.log(func)

    console.log(func)

})

