import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {

  const name = "Matheus"
  return (
    <div className="App">
      <h1>Ola React</h1>
      <p>Ola {name}</p>
      <HelloWorld />
      <SayMyName nome="João"/>
      <SayMyName nome="Manuel"/>
      <SayMyName nome={name}/>
    </div>
  );
}

export default App;
