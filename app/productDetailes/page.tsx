import Image from 'next/image';
import Link from 'next/link';

function ProductDetailes() {
    return (
        <div>
            <Image src='/images/black-bottle.png' width={550} height={550} alt='bottle' />
            <div>
                <div>Lorem Ipsum is simply dummy</div>
                <Link href='#'>sony</Link>
                <hr />
                <div>
                    <div>Price:</div>
                    <div> 70$</div>
                </div>

                <div>
                    <div>Quantity:</div>
                    <div>
                        <button>test</button>
                    </div>
                </div>
            </div>
            <div>
                <div>Description</div>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    );
}

export default ProductDetailes;
