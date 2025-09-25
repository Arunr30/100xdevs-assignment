import Link from 'next/link'

export default function Product() {
    const products = [
        {
            id: 1,
            productName: 'Laptop',
        },
        {
            id: 2,
            productName: 'Mobile',
        },
    ]

    return (
        <div>
            {products.map((product) => (
                <div className="font-bold border-2 m-2">
                    <h1 key={product.id}>{product.id}</h1>
                    <h2>{product.productName}</h2>
                    <Link href={`/products/${product.id}`}>view details</Link>
                </div>
            ))}
        </div>
    )
}
