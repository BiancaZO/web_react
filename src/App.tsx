

// interface utilizada para adicionar essas informações esperadas dos parãmetros
interface ButtonProps {   
  text?: string;
}
// símbolo ? depois do text é para deixar a propriedade como opcional

// Toda vez que recebe parâmetros numa função é preciso falar o formato dos parâmetros, o que espera que seja
function Button(props : ButtonProps){  
  return <button className="bg-[#FFB6C1] p-2  h-10 rounded text-pink-900 hover:bg-[#DB7093] transition-colors">{props.text}</button> //as chaves nesse caso: {props.text} permitem mostrar uma variável Js dentro do HTML que tem no React
}
/*
opção 2 para propriedade como opcional: -->
function Button(props : ButtonProps){ 
  console.log(props.text)

  return <button>{props.text ?? 'Default'}</button>  // aqui estou estabelecendo que quando não tiver text definido, usar ess, no caso, Default}
*/


function App() {
  return (
    <div className="flex gap-2"> {/* "distanciar um botão do outro*/}
      <Button text="Enviar" />  {/* "text" é um atributo e precisa estar no parametro"props" da função*/}
      <Button text="Ok" />
       {/*<Button />*/}


    </div>
  )
}

export default App
