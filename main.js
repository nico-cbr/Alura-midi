function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio); //armazena o retorno da busca do query selector

   
   if(elemento != null && elemento.localName ==='audio'){
        //console.log(elemento.localName === 'audio');  // no FireFox podemos explorar as funcionalidades de um elemento com o console.log
        //elemento.play(); Verifica se é tag audio
            elemento.play();        
   }
   else{
        alert('Elemento não encontrado');
   }
}



//colocando o querySelectAll
//document.querySelectorAll('.tecla');

//atribuindo o comado query de cima a uma lista
const listaDeTeclas = document.querySelectorAll('.tecla');


//usando for
for(let contador =0; contador< listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]; // criando uma referencia para lista de buttons que pode receber o onclick
    const instrumento = tecla.classList[1]; // pegando a segunda referencia para lista de classes    
    const idAudio = `#som_${instrumento}`;    //concatenando a string que vai em cada botao na função tocaSom, ficando do tipo #som_ concatenado com tecla_pom. 

    tecla.onclick = function (){
        tocaSom(idAudio);
    } //Nao podemos colocar uma função tocaSom() com parenteses pq ela executa no momento do carregamento, devo chamar uma função anonima.

    tecla.onkeydown = function(evento){  // em JS o comando onkeydown possui o recurso .code para expessificar o que ocorreu no teclado neste caso estamos chamando de enveto.
    console.log(evento.code);  // abre as propriedades do .code do JS


            if (evento.code === 'Space' || evento.code === 'Enter'){   //o igual atribui adiciona o que esta do lado direito do esquerdo, o peração de igual é == neste caso comparamos valores 1 = '1' (TRUE). Caso eu use === retorna false pq 1 é numero e '1' é string. O perador lógico || pipe é equivalente ao OR.
                tecla.classList.add('ativa');
            }            
        }

        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }    
}