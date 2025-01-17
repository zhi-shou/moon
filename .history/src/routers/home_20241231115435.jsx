import { NavLink } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Home() {
  const invoices = getInvoices();
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        {invoices.map((invoice) => (
          <NavLink
            style={{ display: 'block', margin: '1rem 0' }}
            to={`/info/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
        <NavLink style={{ display: 'block', margin: '1rem 0' }} to={`/info`}>
          没有id
        </NavLink>
      </nav>
    </div>
  );
}
