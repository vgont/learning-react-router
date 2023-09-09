import { Link } from "react-router-dom";

export default function Erro() {
    return (
      <div>
        <h1>Página inexistente :/</h1>
        <span>Dê uma olhada nessas outras páginas!</span> <br />
        <Link to='/'>Home</Link> <br />
        <Link to='/sobre'>Sobre</Link> <br />
        <Link to='/contato'>Contatos</Link>
      </div>
    );
  } 