import { NavLink, Outlet, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { getInvoices } from './data';

export default function App() {
  let location = useLocation();
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log('searchParams', location.search);
  
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
            <div
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : 'blue',
                };
              }}
              onClick={() => {
                navigate(`/info/${invoice.number}${location.search}`);
              }}
              key={invoice.number}
            >
              {invoice.name}
            </div>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
