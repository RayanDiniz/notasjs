import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewNota from "./pages/NewNota";

export default function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" component={Home} exact/>
      <Route path="/create" component={NewNota} />
    </BrowserRouter>
  )
}