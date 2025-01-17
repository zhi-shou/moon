import { useParams } from 'react-router-dom';

export default function Info() {
    const { invoiceId } = useParams();
    console.log({invoiceId});
    return (
        <div>
            <h1>info invoiceId： {invoiceId}</h1>
        </div>
    );
}