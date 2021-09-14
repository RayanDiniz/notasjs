import Form from "./components/Form";
import ListNota from "./components/ListNota";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="criar-bloco">
        <h2 className="title">Bloco de notas</h2>
        <Form/>
      </div>

      <div className="listar-blocos">
        <h2 className="title">Minhas notas:</h2>
        <ListNota />
      </div>
    </div>
  )
}