import stylex from '@stylexjs/stylex';
import { colors } from '../../variables/tokens.stylex';
import {SelectionPrice} from './Components/SelectionPrice';

const styles = stylex.create({
	goods: {
		padding: '60px 0'
	},
    container: {
        maxWidth: '1180px',
        margin: '0 auto'
    },
	title: {
		color: colors.text
	},
	wrapper: {

	}
});

export const Goods = () => {
	return (
        <section className={stylex(styles.goods)}>
            <div className={stylex(styles.container)}>
                <h2 className={stylex(styles.title)}>Каталог</h2>
                <div className={stylex(styles.wrapper)}>
                    <SelectionPrice />
                </div>
            </div>
        </section>
    );
}