import React from 'react';
import { ProductType } from '../../types/product';
import { useRouter } from 'next/navigation';

interface ProductListProps {
    products: ProductType[];
    onDeleteProduct: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDeleteProduct }) => {
    const router = useRouter();

    const handleDelete = async (id: number) => {
        // Implement logic to delete product using API (e.g., axios)
        try {
            const response = await fetch(`/api/product/delete/${id}`, { method: 'post' });
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            onDeleteProduct(id);
        } catch (error) {
            console.error(error);
            // Handle delete errors appropriately
        }
    };

    return (
        <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.label}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                                <button onClick={() => router.push(`/product/edit/${product.id}`)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
