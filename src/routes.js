import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato"
import Header from "./Header";
const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/sobre" Component={Sobre}/>
                <Route path="/contato" Component={Contato}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;