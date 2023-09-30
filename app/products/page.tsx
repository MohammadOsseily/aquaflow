import Productcard, { Pagination } from '../components/ProductCard';

const pagination = {
    total: 23,
    per_page: 5,
    current_page: 1,
    last_page: 5,
    first_page_url: 'http://laravel.app/?page=1',
    last_page_url: 'http://laravel.app/?page=4',
    next_page_url: 'http://laravel.app/?page=2',
    prev_page_url: undefined,
    path: 'http://laravel.app/',
    from: 1,
    to: 5,
    data: [
        { price: 45, productName: 'black bottle', image: 'black-bottle.png' },
        { price: 90, productName: 'blac bottle', image: 'black-bottle.png' },
        { price: 80, productName: 'bl bottle', image: 'black-bottle.png' },
        { price: 22, productName: ' bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },

        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
        { price: 12, productName: 'bla bottle', image: 'black-bottle.png' },
    ],
};

function Page() {
    return (
        <div>
            <div className='mx-auto  flex flex-row flex-wrap gap-4 py-5 '>
                {pagination.data.map((product, index) => {
                    return <Productcard product={product} key={index} />;
                })}
            </div>

            <Pagination pagination={pagination} />
        </div>
    );
}
export default Page;
