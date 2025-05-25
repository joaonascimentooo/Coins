import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import List from './components/List';

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
      <List/>
    </div>
  );
}

export default App;
