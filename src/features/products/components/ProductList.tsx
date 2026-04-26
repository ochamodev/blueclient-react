import { productList } from '../products.data'
import { ProductCard } from './ProductCard'

export function ProductList() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {productList.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    )
}