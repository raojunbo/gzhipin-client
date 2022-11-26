import { Route, Routes, Navigate, useRoutes } from 'react-router-dom'
import routes from './routes/routes';
import './App.less' // 加载app的全局样式

function App() {
  const routeElements = useRoutes(routes)
  return (
    <div className='App'>
      {routeElements}
    </div>
  );
}

export default App;