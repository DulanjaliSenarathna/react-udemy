import { Link } from "react-router-dom"

const PRODUCTS = [
    {id:'p1', titile:'Product 1'},
    {id:'p2', titile:'Product 1'},
    {id:'p3', titile:'Product 1'}
];

function Products(){
    return <>
    <h1>Products</h1>
    <ul>
        {PRODUCTS.map((prod)=><li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.titile}</Link>
        </li>)}
        
    </ul>
    </>
}

export default Products