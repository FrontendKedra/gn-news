import { HashRouter, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './features/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
      </Switch>
    </HashRouter>
  );
}

export default App;
