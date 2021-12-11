import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Comprar from "./pages/comprar";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Comprar }  path="/comprar" />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Contato }  path="/contato" />
       </BrowserRouter>
   )
}

export default Routes;