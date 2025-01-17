import { useParams } from 'react-router-dom';

export default function Info() {
    const { invoiceId } = useParams();
    console.log({invoiceId});
    return (
        <div>
            <h1>info</h1>
        </div>
    );
}