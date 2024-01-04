import "./App.css";
import Logo from "./componentes/Logo";
import Header from "./componentes/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <footer className="App-footer">
        <Logo></Logo>
      </footer>
    </div>
  );
}

export default App;
