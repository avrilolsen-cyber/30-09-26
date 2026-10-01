
import './App.css'

 function situacaoAluno(media){
    if(media >= 7) {
      return 'Aprovado'
    }else if(media >= 5){
      return 'Recuperaçao'
    }else{
      return 'Reprovado. Foi de ralo'
    } }  


function App() {
  const nome = 'isa'
  const nota1 = 0
  const nota2 = 3
  const nota3 = 9
  const media = (nota1 + nota2 + nota2)/3
  
 
  
  

  return (
    <>''
      
    <h1>Boletim</h1>
    <p>Aluno: {nome}</p>
    <p>Notas: {nota1}, {nota2}, {nota3}</p>
    <p>Média: {media} </p>
    <p>situaçao: {situacaoAluno(media)} </p>
    
    </>
  )
}

export default App
