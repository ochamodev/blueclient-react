export type CustomerType = 'nit' | 'cui';

export interface CustomerApiResponse {
  Status: boolean;
  Data: string | null;
  Informacion: string | null;
}

export interface CustomerData {
  cui?: string;
  nit?: string;
  nombre: string;
  fallecido: string;
  mensaje?: string;
}

export interface Customer {
  id: string;
  name: string;
  type: CustomerType;
}
