import './App.css';
import routes from './routes/index'
import Header from '@/components/header';
import {  useRoutes } from 'react-router-dom';

function App() {
  const elements = useRoutes(routes)
  return (
    <div id='app'>
      {/* 登陆页面是没有header的 */}
      <Header/>
     {elements}
    </div>
  );
}

export default App;
