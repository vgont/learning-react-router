import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato"
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/sobre" Component={Sobre}/>
                <Route path="/contato" Component={Contato}/>
                <Route path="/produto/:id" Component={Produto}/>
                
                <Route path="*" Component={Erro} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;