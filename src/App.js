import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Matheus"
  return (
    <div className="App">
      <h1>Ola React</h1>
      <p>Ola {name}</p>
      <HelloWorld />
    </div>
  );
}

export default App;
