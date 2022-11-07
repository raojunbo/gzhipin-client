import { Route, Routes, Navigate, useRoutes } from 'react-router-dom'
import routes from './routes/routes';

{/* <Routes>
<Route path='dasheninfo' element={<DashenInfo />}></Route>
<Route path='laobaninfo' element={<LaobanInfo />}></Route>
<Route path="dashen" element={<Dashen />}></Route>
<Route path="laoban" element={<Laoban />}></Route>
<Route path="person" element={<Person />}></Route>
<Route path="message" element={<Message />}></Route>
<Route path="notfound" element={<NotFound />}></Route>
</Routes> */}


function App() {
  const routeElements = useRoutes(routes)
  return (
    <div className='App'>
      {routeElements}
    </div>
  );
}

export default App;