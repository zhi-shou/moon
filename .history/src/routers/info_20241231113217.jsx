import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';
export default function Info() {
    const { invoiceId } = useParams();
    const invoice = getInvoice(parseInt(invoiceId, 10));
    console.log({invoiceId});
    return (
        <div>
            <h1>info invoiceId： {invoiceId}</h1>
            <p>Name: {invoice.name}</p>
            <p>Amount: {invoice.amount}</p>
            <p>Due: {invoice.due}</p>
        </div>
    );
}