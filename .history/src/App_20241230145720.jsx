import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/list">List</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
