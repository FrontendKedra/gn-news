import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./features/Header";
import { SideMenu } from "./features/SideMenu";
import { Main } from "./features/Main";
import { Footer } from "./features/Footer";
import { AppContainer } from "./features/AppContainer/styled";

function App() {
  return (
    <HashRouter>
      <AppContainer>
        <Header />
        <SideMenu />
        <Footer />
        <Switch>
          <Route path="/country/:id">
            <Main />
          </Route>
          <Route path="/">
            <Redirect to="/country/Poland" />
          </Route>
        </Switch>
      </AppContainer>
    </HashRouter>
  );
}

export default App;
