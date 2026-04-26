import { env } from '@/config/env';
import { apiClient } from '@/lib/api-client';
import { mapCustomer } from './customer.mapper';
import type { CustomerApiResponse, CustomerType } from './customer.types';

export const fetchCustomer = async (type: CustomerType, id: string) => {
  const url = `${env.apiBaseUrl}/Download/${type}/WEB/4/00001/1/${id}`;
  const { data } = await apiClient.get<CustomerApiResponse>(url);
  return mapCustomer(data, type);
};
