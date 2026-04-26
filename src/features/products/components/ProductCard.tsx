import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCartStore } from '@/features/cart/cart.store'
import { toast } from 'sonner'
import type { ProductModel } from '../products.types'

export function ProductCard({ product }: { product: ProductModel }) {
    const addItem = useCartStore(s => s.addItem)

    return (
        <Card>
            <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold">{product.name}</h3>

                <p className="text-sm text-muted-foreground">
                    {product.currency} {product.price}
                </p>

                <Button
                    onClick={() => {
                        addItem(product)
                        toast.success('Producto agregado')
                    }}
                    className="w-full"
                >
                    Agregar
                </Button>
            </CardContent>
        </Card>
    )
}