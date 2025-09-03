
const alunos = [
  { nome: 'João', nota: 7 },
  { nome: 'Maria', nota: 5 },
  { nome: 'Pedro', nota: 8 },
  { nome: 'Ana', nota: 6 },
  { nome: 'Carlos', nota: 4 },
  { nome: 'Juliana', nota: 9 },
  { nome: 'Fernando', nota: 2 },
  { nome: 'Beatriz', nota: 10 }
];

function filtrarAlunosAprovados(alunos) {
  const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);
  return alunosAprovados;
}


const aprovados = filtrarAlunosAprovados(alunos);
console.log(aprovados);
