'use client';

import { useEffect, useState } from 'react';

import UserList from '../../components/UserList';
import { PaginationType } from '../../../types/pagination';
// sdfsd
function ProductCardHandler() {
    const [users, setProducts] = useState<PaginationType | null>(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/user/list', { method: 'post' })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <>
            <div className='grid grid-cols-2 gap-4 py-5  md:mx-auto  md:grid-cols-4 '>
                {users?.data?.map((user, index) => {
                    return (
                        <div className='neumorphism card glass  flex  items-center bg-primary pt-4 ' key={index}>
                            <UserList user={user} key={index} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ProductCardHandler;
