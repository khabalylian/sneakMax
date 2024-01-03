import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';
import { SelectionPrice } from './Components/SelectionPrice';
import { CustomButton } from '../../helpers/CustomButton';
import { HoverGoods } from './Components/HoverGoods';
export interface IGoods {
    article: string;
    image: string;
    title: string;
    price: number;
}

const GOODS: IGoods[] = [
    {
        article: '2331Acvf2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 11342
    },
    {
        article: '231423f2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 123
    },
    {
        article: '232fdGcvf2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 564
    },
    {
        article: '4123w2WWf2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 11000
    },
    {
        article: '2511Ac54Gf2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 11000
    },
    {
        article: '7612433f2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 11000
    },
    {
        article: '643asWWavf2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 11000
    },
    {
        article: '63jkhHvf2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 11000
    },
    {
        article: '1332vf2',
        image: 'src/Layout/Goods/img/footwear.jpg',
        title: 'Кроссовки Nike Air Force 1 "07 QS"',
        price: 11000
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
                                    article={goods.article}
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
