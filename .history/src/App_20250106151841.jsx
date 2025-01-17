import {
  Outlet,
  useSearchParams,
  useLocation,
  useNavigate,
  Link,
} from 'react-router-dom';
import { getInvoices } from './data';
import * as models from './models';

export default function App() {
  let location = useLocation();
  const invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  const invoiceId = searchParams.get('invoiceId');
  const navigate = useNavigate();
  console.log('searchParams', searchParams.get('invoiceId'));
  console.log('location', location.state);

  Object.keys(models).map((namespace) => {
    console.log(models[namespace]);
  });
  return (
    <>
      <div style={{ display: 'flex' }}>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams((prev) => ({
                ...Object.fromEntries(prev),
                filter,
              }));
            } else {
              setSearchParams({});
            }
          }}
        />
        <div style={{ borderRight: 'solid 1px', padding: '1rem' }}>
          {invoices
            .filter((invoice) => {
              let filter = searchParams.get('filter');
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((invoice) => (
              <div
                style={{
                  margin: '1rem 0',
                  color: invoiceId === String(invoice.number) ? 'red' : 'blue',
                }}
                onClick={() => {
                  navigate(
                    `/info/invoiceId?invoiceId=${invoice.number}&filter=${
                      searchParams.get('filter') || ''
                    }`
                  );
                }}
                key={invoice.number}
              >
                {invoice.name}
              </div>
            ))}
        </div>
        <Outlet />
      </div>
      <Link to="/home">home</Link>
    </>
  );
}
