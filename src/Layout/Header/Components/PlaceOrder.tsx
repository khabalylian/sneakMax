import stylex from '@stylexjs/stylex';

import { colors } from '../../../variables/tokens.stylex';
import { GoodsState } from '../../../store';
import { ByuItem } from './BuyItem';
import { CustomButton } from '../../../helpers/CustomButton';
import { ModalBackground } from '../../../helpers/ModalBackground';

const MEDIA_WIDTH_576 = '@media (max-width: 576px)';
const MEDIA_WIDTH_480 = '@media (max-width: 480px)';
interface IPlaceOrder {
    totalPrice: number;
    setShowPlaceOrder: (active: boolean) => void;
}

const styles = stylex.create({
    order: {
        display: 'flex',
        flexDirection: 'column',
        gap: {
            default: '30px',
            [MEDIA_WIDTH_480]: '10px'
        },
        position: 'fixed',
        width: {
            default: '580px',
            [MEDIA_WIDTH_576]: {
                default: '480px',
                [MEDIA_WIDTH_480]: '300px'
            }
        },
        height: {
            default: '900px',
            [MEDIA_WIDTH_480]: 'auto'
        },
        backgroundColor: colors.text_main,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: {
            default: '40px',
            [MEDIA_WIDTH_480]: '10px'
        },
        zIndex: 1000
    },
    headerInfo: {
        display: 'flex',
        gap: {
            default: '200px',
            [MEDIA_WIDTH_480]: '20px'
        }
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
        padding: {
            default: '30px',
            [MEDIA_WIDTH_480]: '10px'
        }
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
    },
    wrapperOrderItem: {
        display: 'flex',
        flexDirection: {
            default: 'row',
            [MEDIA_WIDTH_480]: 'column'
        },
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: {
            default: 'start',
            [MEDIA_WIDTH_480]: 'center !important'
        },
        gap: {
            default: '14px',
            [MEDIA_WIDTH_480]: '5px'
        },
        borderBottom: {
            default: 'none',
            [MEDIA_WIDTH_480]: `1px solid ${colors.small_text}`
        },
        paddingBottom: {
            default: '0',
            [MEDIA_WIDTH_480]: '5px'
        }
    }
});

export const PlaceOrder = ({ setShowPlaceOrder, totalPrice }: IPlaceOrder) => {
    const busketGoods = GoodsState(state => state.busketGoods);

    return (
        <>
            <ModalBackground onClick={() => setShowPlaceOrder(false)} />
            <div className={stylex(styles.order)}>
                <div className={stylex(styles.headerInfo)}>
                    <p className={stylex(styles.headerTitle)}>
                        Оформлення заказу
                    </p>
                    <p className={stylex(styles.headerOrder)}>Заказ 3456 67</p>
                </div>
                <div className={stylex(styles.wrapper)}>
                    <p className={stylex(styles.wrapperTitle)}>
                        Товарів в заказі:
                        <span className={stylex(styles.wrapperSpan)}>
                            {busketGoods.length} шт.
                        </span>
                    </p>
                    <p className={stylex(styles.wrapperTitle)}>
                        Загальна сума заказу:
                        <span className={stylex(styles.wrapperSpan)}>
                            {totalPrice} грн.
                        </span>
                    </p>
                    <p className={stylex(styles.orderTitle)}>
                        Склад замовлення:
                    </p>
                    <div className={stylex(styles.wrapperOrder)}>
                        {busketGoods.map(goods => (
                            <ByuItem
                                key={goods.article}
                                className={stylex(styles.wrapperOrderItem)}
                                {...goods}
                            />
                        ))}
                    </div>
                </div>
                <div className={stylex(styles.form)}>
                    <input
                        className={stylex(styles.formInput)}
                        type='text'
                        placeholder='Ваше імя'
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
