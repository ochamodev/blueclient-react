import { Cart } from '@/features/cart/components/Cart';
import { Checkout } from '@/features/cart/components/Checkout';
import { CustomerSearch } from '@/features/customer/components/CustomerSeach';
import type { Customer } from '@/features/customer/customer.types';
import { ProductList } from '@/features/products/components/ProductList';
import { useState } from 'react';

export function SalePage() {
  const [customer, setCustomer] = useState<Customer | null>(null);

  const handleSaleSuccess = () => {
    setCustomer(null);
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* LEFT SIDE */}
      <div className="space-y-4">
        <CustomerSearch onSelect={setCustomer} />
        <ProductList />
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-4">
        {customer && (
          <div className="p-4 border rounded">
            <p className="font-semibold">Selected Customer:</p>
            <p>{customer.name}</p>
          </div>
        )}

        <Cart />
        <Checkout customer={customer} onSuccess={handleSaleSuccess} />
      </div>
    </div>
  );
}
