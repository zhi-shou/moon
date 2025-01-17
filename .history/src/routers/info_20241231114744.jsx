import { useParams, Outlet } from 'react-router-dom';
import { getInvoice } from '../data';
export default function Info() {
  const { invoiceId } = useParams();
  const invoice = getInvoice(parseInt(invoiceId, 10));
  console.log({ invoiceId });
  if (!invoice) {
    return <Outlet />;
  }
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
