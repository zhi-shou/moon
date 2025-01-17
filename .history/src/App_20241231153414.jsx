import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getInvoices } from './data';

export default function App() {
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('filter'));
  let location = useLocation();
  return (
    <div style={{ display: 'flex' }}>
      <input
        value={searchParams.get('filter') || ''}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : 'blue',
                };
              }}
              to={`/info/${invoice.number}?${location.search}`}
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
