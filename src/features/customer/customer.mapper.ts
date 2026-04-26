import type {
  Customer,
  CustomerApiResponse,
  CustomerData,
  CustomerType,
} from './customer.types';

export const mapCustomer = (
  response: CustomerApiResponse,
  type: CustomerType,
): Customer => {
  if (!response.Status || !response.Data) {
    throw new Error(response.Informacion || 'Invalid customer');
  }

  const parsed: CustomerData = JSON.parse(response.Data);
  const id = parsed.cui || parsed.nit;
  if (!id) {
    throw new Error('Invalid customer data');
  }

  return {
    id,
    name: parsed.nombre.replace(/, /g, ' ').trim(),
    type,
  };
};
