import { Route, Routes, Navigate, useRoutes } from 'react-router-dom'
import routes from './routes/routes';

function App() {
  const routeElements = useRoutes(routes)
  return (
    <div className='App'>
      {routeElements}
    </div>
  );
}

export default App;