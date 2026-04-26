import { useQuery } from '@tanstack/react-query';
import { fetchCustomer } from './customer.api';
import type { CustomerType } from './customer.types';

export const useCustomer = (type: CustomerType, id: string) => {
  return useQuery({
    queryKey: ['customer', type, id],
    queryFn: () => fetchCustomer(type, id),
    retry: 1,
    enabled: !!id,
  });
};
