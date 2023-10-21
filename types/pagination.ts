import { UserAddresses } from './addresses';
import { OrderHistory } from './ordersHistory';
import { Product } from './product';

export type Pagination = {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url?: string;
    next_page_url?: string;
    prev_page_url?: string;
    path: string;
    from: number;
    to: number;
    data?: Product[];
    orderData?: OrderHistory[];
    userAddress?: UserAddresses[];
};
