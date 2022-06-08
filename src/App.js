import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header title="Hello World here!"/>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
