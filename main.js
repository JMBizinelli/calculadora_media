const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./reprovado.png" alt="emoji decepcionado" />';
const atividades = []; /*array vazio pois vai ser add pelo usuario por um push*/
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("DIgite a media minima:"));

let linhas = ''; /* varieavel linhas, ela é global devido a posição */

form,addEventListener('submit', function(e) {
    e.preventDefault();  /*ao apertar o submit a funçõa acima é executada*/

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNotaAtividade.value)) {
        alert(`A Atividade: ${inputNomeAtividade.value} ja foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value)); /*parseFloat pois as notas estao entrando como string e com isso elas entram como numerias*/

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;  /*isso é igual a: linha = linha + 'outro conteudo' (contatenação)*/
        linha += `<td>${inputNotaAtividade.value}</td>`;  
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`; /* : = else */
        linha += '</tr>'; 

        linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length; /*como o numero das notas estav vindo em string o lenght tres ele em numeral */ 
}