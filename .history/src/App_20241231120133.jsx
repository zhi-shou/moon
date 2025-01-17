import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from './data';

export default function App() {
  const invoices = getInvoices();
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              console.log(isActive);
              
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : 'blue',
              };
            }}
            to={`/info/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
