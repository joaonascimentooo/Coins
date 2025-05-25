import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';

function App() {

  const name = "Matheus"
  return (
    <div className="App">
      <h1>Ola React</h1>
      <p>Ola {name}</p>
      <HelloWorld />
      <Frase/>
      <SayMyName nome="João"/>
      <SayMyName nome="Manuel"/>
      <SayMyName nome={name}/>
    </div>
  );
}

export default App;
