import { Button } from '@/components/ui/button';
import { useCartStore } from '@/features/cart/cart.store';
import type { Customer } from '@/features/customer/customer.types';
import { toast } from 'sonner';

type Props = {
  customer: Customer | null;
  onSuccess?: () => void;
};

export function Checkout({ customer, onSuccess }: Props) {
  const { items, total, clearCart } = useCartStore();

  const handleCheckout = () => {
    if (!customer) {
      toast.error('Por favor seleccione un cliente');
      return;
    }

    if (items.length === 0) {
      toast.error('Carrito vacio');
      return;
    }

    console.log('Venta', {
      customer,
      items,
      total: total(),
    });

    toast.success('Se completo la venta exitosamente');

    clearCart();
    onSuccess?.();
  };

  return (
    <div className="p-4 border rounded space-y-3">
      <h2 className="font-semibold">Checkout</h2>

      <div className="text-sm space-y-1">
        <p>Items: {items.length}</p>
        <p className="font-bold">Total: Q{total()}</p>
      </div>

      <Button
        onClick={handleCheckout}
        disabled={!customer || items.length === 0}
        className="w-full"
      >
        Completar venta ({items.length} items)
      </Button>
    </div>
  );
}
