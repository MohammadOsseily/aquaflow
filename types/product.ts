export type ProductType = {
    id: number;
    label: string;
    description?: string;
    price: number;
    stock: number;
    sku: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
};
