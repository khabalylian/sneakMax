import stylex from '@stylexjs/stylex';
import { ByuItem } from './BuyItem';
import { CustomButton } from '../../../helpers/CustomButton';

import { colors } from '../../../variables/tokens.stylex';
import { GoodsState } from '../../../store';

interface IBasketModal {
    totalPrice: number;
    handleClose: () => void;
    setShowPlaceOrder: (active: boolean) => void;
}

const styles = stylex.create({
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '100vw',
        height: '100vh',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        opacity: 0.35,
        zIndex: 1000
    },
    card: {
        position: 'absolute',
        top: '64px',
        right: 0,
        width: '480px',
        height: '415px',
        backgroundColor: colors.text_main,
        zIndex: 2000
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        overflow: 'auto',
        height: '323px',
        marginRight: '5px',
        '::-webkit-scrollbar': {
            width: '4px'
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: colors.small_text,
            borderRadius: '4px'
        }
    },
    total: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px'
    },
    totalPrice: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        color: colors.text,
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal'
    },
    totalSpan: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '142%'
    }
});

export const BasketModal = ({
    totalPrice,
    handleClose,
    setShowPlaceOrder
}: IBasketModal) => {
    const busketGoods = GoodsState(state => state.busketGoods);

    return (
        <>
            <div className={stylex(styles.modal)} onClick={handleClose}></div>
            <div className={stylex(styles.card)}>
                <div className={stylex(styles.listItem)}>
                    {busketGoods.map((goods, id) => (
                        <ByuItem key={id} {...goods} />
                    ))}
                </div>
                <div className={stylex(styles.total)}>
                    <div className={stylex(styles.totalPrice)}>
                        <span className={stylex(styles.totalSpan)}>Итого:</span>
                        {totalPrice}
                    </div>
                    <CustomButton
                        onClick={() => {
                            setShowPlaceOrder(true);
                            handleClose();
                        }}
                        backgroundColor='red'
                    >
                        Перейти в корзину
                    </CustomButton>
                </div>
            </div>
        </>
    );
};
