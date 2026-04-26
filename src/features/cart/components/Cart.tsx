import { Button } from '@/components/ui/button'
import { useCartStore } from '@/features/cart/cart.store'

export function Cart() {
    const { items, removeItem, total } = useCartStore()

    return (
        <div className="p-4 border rounded space-y-2">
            <h2 className="font-bold">Carrito</h2>

            {items.length === 0 && <p>Vacío</p>}

            {items.map(i => (
                <div key={i.id} className="flex justify-between">
                    <span>{i.name} x{i.quantity}</span>
                    <Button size="sm" onClick={() => removeItem(i.id)}>X</Button>
                </div>
            ))}

            <div className="font-bold pt-2">
                Total: Q{total()}
            </div>
        </div>
    )
}