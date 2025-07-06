const btnGerar = document.getElementById('generato');
const numeroBase = document.getElementById('numBase');
const numeroContador = document.getElementById('numContador');


function gerarTabuada(numero) {
      const listaTabuada = document.getElementById("tabuada");
      for (let i = 1; i <= parseInt(numeroContador.value); i++) {
        const resultado = numero * i;
        const item = document.createElement("li");
        item.textContent = `${numero} x ${i} = ${resultado}`;
        listaTabuada.appendChild(item);
      }
    }
    
    btnGerar.addEventListener('click', function(){
       if(numeroBase.value == '' || numeroContador.value == '') {
          alert('Os campos são obrigatório para essa operação')
       }else {

         gerarTabuada(parseInt(numeroBase.value))
         numeroBase.value = '';
         numeroContador.value = '';
       }
    })