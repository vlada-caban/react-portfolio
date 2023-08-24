import { Outlet } from 'react-router-dom';
import MyNav from './components/Nav';

function App() {

  return (
    <>
      <MyNav />
      <main className="mx-3">
      <Outlet />
      </main>
    </>
  );
}

export default App
