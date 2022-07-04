import './App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './route/RoutesApp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <RoutesApp/>
      </div>
    </BrowserRouter>
  );
}

export default App;
