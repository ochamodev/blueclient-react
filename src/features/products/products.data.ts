import data from "@/data/articulos.json";
import { mapProduct } from "./products.mapper";
import type { ProductData } from "./products.types";

export const productList = (data as ProductData[])
    .map(mapProduct);