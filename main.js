document.addEventListener('DOMContentLoaded', () => {
    function Curso(nome, valor, cargaHora) {
    this.nome = nome;
    this.valor = valor;
    this.cargaHora = cargaHora + " , leia o regulamento";
}

    function Design(nome) {
        Curso.call(this, nome, 3500, '360h')
    }

    function Backend(nome, empregoGarantido) {
        Curso.call(this, nome, 5500, '460h')
        this.empregoGarantido = empregoGarantido
    }

    function Cientista(nome) {
        Curso.call(this, nome, 6500, '480h')
    }

    let curso1 = new Design('Web Design', 3500, '360h');
    let curso2 = new Backend('Back-end', true)
    let curso3 = new Cientista('Ciencias de Dados')

    console.log(`O curso ${curso1.nome}, o valor é R$${curso1.valor} e tem uma carga horária de ${curso1.cargaHora}`)
    console.log(`O curso ${curso2.nome}, o valor é R$${curso2.valor} e tem uma carga horária de ${curso2.cargaHora}`)
    console.log(`O curso ${curso3.nome}, o valor é R$${curso3.valor} e tem uma carga horária de ${curso3.cargaHora}`)


})