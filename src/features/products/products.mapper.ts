import type { ProductData, ProductModel } from "./products.types";

export const mapProduct = (p: ProductData): ProductModel => {
    return {
        id: p.ItemCode,
        name: p.ItemName.trim(),
        price: p.Price,
        currency: p.Currency
    };
};
