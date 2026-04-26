export interface ProductData {
    CmpCode: number;
    ItemCode: string;
    ItemName: string;
    BaseQty: number;
    UomCode: string;
    UomName: string;
    Currency: string;
    Price: number;
    Status: string;
    FirmName: string;
    U_Order: number;
    Bonus: string;
    PrdStdCst: number;
    KitchenOrder: string;
    ItemType: string;
    ForDiscount?: string;
    Packaging?: string;
};

export interface ProductModel {
    id: string;
    name: string;
    price: number;
    currency: string;
};
