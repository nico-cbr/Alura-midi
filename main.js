function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio); //! Armazena o retorno da busca do query selector

    if(elemento != null && elemento.localName ==='audio'){
        // ! console.log(elemento.localName === 'audio'); no firefox podemos explorar as funcionalidades de um elemento com console.log
        //!elemento.play() verifica se é tag audio
            elemento.play()
    } 
    else {
        alert('Elemento não encontrado')
    }
}

//? colocando o querySelectAll
//? document.querySelectAll('tecla');

//? Atribuindo o comando query de cima a uma lista
const listaDeTeclas = document.querySelectorAll('.tecla');

//! Usando for
for(let contador =0; contador< listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador]; //? Criando uma referencia para lista de buttons que pode rececber o onclick
    const instrumento = tecla.classList[1]; //? pegando a segunda referencia para lista de classes
    const idAudio = `#som_${instrumento}`; //? concatenando a string que vai em cada botao na funão toca som, ficando do tipo #som_ concatenadi com tecla_pom

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){ //! em JS o comando onkeydown possui o recurso .code oara expessificar o que ocorreu no teclado, neste caso estamos chamando de evento.
        console.log(evento.code); //? abre as propriedades do .code do JS

        if(evento.code === 'Space' || evento.code === 'Enter'){ //! o igual atribui, adiciona o questa do lado direito ao esquerdo, operação igual é ==, nesste caso comparam os valores 1 = '1' (true). caso eu use === retorna falso pq 1 é numero e '1' é string. Operador lógico || pipe é equivalente ao OR
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}