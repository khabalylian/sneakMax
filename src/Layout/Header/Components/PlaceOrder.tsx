import stylex from '@stylexjs/stylex';
import { colors } from '../../../variables/tokens.stylex';
import { GoodsState } from '../../../store';
import { ByuItem } from './BuyItem';
import { CustomButton } from '../../../helpers/CustomButton';
import { ModalBackground } from '../../../helpers/ModalBackground';

interface IPlaceOrder {
    totalPrice: number;
    setShowPlaceOrder: (active: boolean) => void;
}

const styles = stylex.create({
    order: {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        position: 'fixed',
        width: '580px',
        height: '900px',
        backgroundColor: colors.text_main,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '40px',
        zIndex: 1000
    },
    headerInfo: {
        display: 'flex',
        gap: '200px'
    },
    headerTitle: {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '20px',
        color: colors.text
    },
    headerOrder: {
        fontSize: '14px',
        fontWeight: 400,
        color: colors.small_text
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: '4px',
        border: `1px solid ${colors.small_text}`,
        padding: '30px'
    },
    wrapperTitle: {
        color: colors.small_text
    },
    wrapperOrder: {
        height: '250px',
        overflow: 'auto',
        '::-webkit-scrollbar': {
            width: '4px'
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: colors.small_text,
            borderRadius: '4px'
        }
    },
    orderTitle: {
        color: colors.text
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    formInput: {
        height: '60px',
        border: 'none',
        borderRadius: '4px',
        paddingLeft: '10px'
    },
    wrapperSpan: {
        color: colors.text,
        fontWeight: 700,
        marginLeft: '10px'
    }
});

export const PlaceOrder = ({ setShowPlaceOrder, totalPrice }: IPlaceOrder) => {
    const countGoods = GoodsState(state => state.countGoods);
    const busketGoods = GoodsState(state => state.busketGoods);

    return (
        <>
            <ModalBackground onClick={() => setShowPlaceOrder(false)} />
            <div className={stylex(styles.order)}>
                <div className={stylex(styles.headerInfo)}>
                    <p className={stylex(styles.headerTitle)}>
                        Оформление заказа
                    </p>
                    <p className={stylex(styles.headerOrder)}>Заказ 3456 67</p>
                </div>
                <div className={stylex(styles.wrapper)}>
                    <p className={stylex(styles.wrapperTitle)}>
                        Товаров в заказе:
                        <span className={stylex(styles.wrapperSpan)}>
                            {totalPrice}
                        </span>
                    </p>
                    <p className={stylex(styles.wrapperTitle)}>
                        Общая сумма заказа:
                        <span className={stylex(styles.wrapperSpan)}>
                            {countGoods} шт.
                        </span>
                    </p>
                    <p className={stylex(styles.orderTitle)}>Состав заказа:</p>
                    <div className={stylex(styles.wrapperOrder)}>
                        {busketGoods.map(goods => (
                            <ByuItem key={goods.article} {...goods} />
                        ))}
                    </div>
                </div>
                <div className={stylex(styles.form)}>
                    <input
                        className={stylex(styles.formInput)}
                        type='text'
                        placeholder='Ваше имя'
                    />
                    <input
                        className={stylex(styles.formInput)}
                        type='text'
                        placeholder='Номер телефона'
                    />
                    <input
                        className={stylex(styles.formInput)}
                        type='text'
                        placeholder='E-mail'
                    />
                </div>
                <CustomButton backgroundColor='red'>
                    Оформити заказ
                </CustomButton>
            </div>
        </>
    );
};
