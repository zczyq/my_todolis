import './App.css';
import routes from './routes/index'
import { useRoutes } from 'react-router-dom';
function App() {
  const elements = useRoutes(routes)
  return (
    <div id='app'>
     {elements}
    </div>
  );
}

export default App;
