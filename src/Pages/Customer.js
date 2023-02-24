import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl } from '../shared';

export default function Customer(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    useEffect(() => {
        console.log('useEffect');
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
        .then((response) => {

            if (response.status === 404)

            navigate('/404');
            return response.json();
        })
        .then((data) => {
            setCustomer(data.customer);
        });
    }, []);
    return(
        <>
        { customer ? <div>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
            <p>{customer.industry}</p>
            </div> : null }
            <Link to = "/customers">Go Back</Link>
            </>

    );
}