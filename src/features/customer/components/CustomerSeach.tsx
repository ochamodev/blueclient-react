import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import type { Customer, CustomerType } from '../customer.types';
import { useCustomer } from '../useCustomer';

type Props = {
  onSelect: (customer: Customer) => void;
};

export function CustomerSearch({ onSelect }: Props) {
  const [type, setType] = useState<CustomerType>('nit');
  const [inputId, setInputId] = useState('');
  const [searchId, setSearchId] = useState('');

  const { data, isLoading, isError, error } = useCustomer(type, searchId);

  const errorMessage = isError && error instanceof Error ? error.message : null;

  const handleSearch = () => {
    if (!inputId.trim()) {
      toast.error('Por favor ingrese un NIT o CUI valido');
      return;
    }

    setSearchId(inputId.trim());
  };

  const handleType = (type: CustomerType) => {
    setType(type);
    setSearchId('');
  };

  const handleSelect = () => {
    if (!data) return;
    onSelect(data);
    toast.success('Cliente seleccionado');
  };

  return (
    <div className="p-4 border rounded space-y-3">
      <h2 className="font-semibold">Cliente</h2>

      {/* Type selector */}
      <div className="flex gap-2">
        <Button
          variant={type === 'nit' ? 'default' : 'outline'}
          onClick={() => handleType('nit')}
        >
          NIT
        </Button>

        <Button
          variant={type === 'cui' ? 'default' : 'outline'}
          onClick={() => handleType('cui')}
        >
          CUI
        </Button>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <Input
          placeholder="Enter ID"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />

        <Button onClick={handleSearch}>Buscar</Button>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="animate-pulse text-sm text-muted-foreground">
          Cargando cliente...
        </div>
      )}

      {/* Error */}
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}

      {/* Result */}
      {data && !isLoading && (
        <div className="border p-3 rounded space-y-2">
          <p className="font-medium">{data.name}</p>

          <Button onClick={handleSelect}>Select customer</Button>
        </div>
      )}
    </div>
  );
}
