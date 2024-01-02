import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';
import { SelectionPrice } from './Components/SelectionPrice';
import { CustomButton } from '../../helpers/CustomButton';
import { HoverGoods } from './Components/HoverGoods';

export interface IGoods {
    image: string;
    title: string;
    price: string;
}

const GOODS: IGoods[] = [
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    },
    {
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: '11 000'
    }
];

const styles = stylex.create({
    goods: {
        padding: '60px 0'
    },
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    title: {
        color: colors.text
    },
    wrapper: {
        display: 'flex',
        gap: '20px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
    },
    goodsContent: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
    }
});

export const Goods = () => {
    return (
        <section className={stylex(styles.goods)}>
            <div className={stylex(styles.container)}>
                <h2 className={stylex(styles.title)}>Каталог</h2>
                <div className={stylex(styles.wrapper)}>
                    <SelectionPrice />
                    <div className={stylex(styles.content)}>
                        <div className={stylex(styles.goodsContent)}>
                            {GOODS.map((goods, id: number) => (
								<HoverGoods
									key={id}
									title={goods.title}
									price={goods.price}
									image={goods.image}
								/>
                            ))}
                        </div>
                        <CustomButton backgroundColor='red'>
                            Показать еще
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
