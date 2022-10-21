import { Route, Routes } from 'react-router-dom'
import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;