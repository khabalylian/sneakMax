import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';
import { SelectionPrice } from './Components/SelectionPrice';
import { CustomButton } from '../../helpers/CustomButton';
import { HoverGoods } from './Components/HoverGoods';
import { GoodsState } from '../../store';
export interface IGoods {
    article: string;
    image: string;
    title: string;
	size: number;
    price: number;
	gender: 'male' | 'female';
}


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
		justifyContent: 'center',
		gap: '40px',
		width: '100%'
    },
    goodsContent: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
		height: '1075px'
    },
	btn: {
		margin: '0 auto'
	}
});

export const Goods = () => {
	const filteredGoods = GoodsState(state => state.filteredGoods);

    return (
        <section className={stylex(styles.goods)}>
            <div className={stylex(styles.container)}>
                <h2 className={stylex(styles.title)}>Каталог</h2>
                <div className={stylex(styles.wrapper)}>
                    <SelectionPrice />
                    <div className={stylex(styles.content)}>
                        <div className={stylex(styles.goodsContent)}>
                            {filteredGoods.map((goods, id: number) => (
                                <HoverGoods key={id} {...goods} />
                            ))}
                        </div>
						<CustomButton
							className={styles.btn}
							backgroundColor='red'
						>
							Показать еще
						</CustomButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
