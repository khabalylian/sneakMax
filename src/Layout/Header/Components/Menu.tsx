import { useEffect, useState } from 'react';
import stylex from '@stylexjs/stylex';

import { colors } from '../../../variables/tokens.stylex';
import { GoodsState } from '../../../store';
import { IGoods } from '../../Goods/Goods';
import { CustomMenu } from '../../../helpers/CustomMenu';
import { BasketModal } from './BasketModal';
import { BurgerMenu } from './BurgerMenu';
import { PlaceOrder } from './PlaceOrder';

const MEDIA_WIDTH_576 = '@media (max-width: 576px)';
const MEDIA_WIDTH_991 = '@media (max-width: 991px)';

const styles = stylex.create({
    wrapper: {
        display: 'flex',
        height: '64px',
        justifyContent: 'space-between',
        gap: '20px',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.50);'
    },
    list: {
        display: 'flex',
        gap: {
            default: '40px',
            [MEDIA_WIDTH_991]: '15px'
        },
        flexWrap: 'wrap',
        color: 'white'
    },
    logo: {
        color: colors.text_main,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal'
    },
    busket: {
        position: 'relative',
        width: '20px'
    },
    burgerMenu: {
        transition: 'all 0.3s ease',
        display: {
            default: 'none',
            [MEDIA_WIDTH_576]: 'block'
        }
    },
    menuList: {
        display: {
            default: 'block',
            [MEDIA_WIDTH_576]: 'none'
        }
    },
    container: {
        display: 'flex',
        width: '100%',
        gap: '20px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    busketCounter: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '-30%',
        right: '-30%',
        width: '16px',
        height: '16px',
        fontSize: '14px',
        borderRadius: '50%',
        backgroundColor: colors.btn_main,
        cursor: 'pointer'
    }
});

export const Menu = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);
    const [showPlaceOrder, setShowPlaceOrder] = useState<boolean>(false);

    const busketGoods = GoodsState(state => state.busketGoods);

    const sumPrice = (goods: IGoods[]) => {
        return goods.reduce((acc, product) => (acc += product.data.price), 0);
    };

    useEffect(() => {
        setTotalPrice(sumPrice(busketGoods));
    }, [busketGoods]);

    const handleOpen = () => {
        setOpenModal(true);
    };
    const handleClose = () => {
        setOpenModal(false);
    };

    const handleBurger = () => {
        setOpenBurgerMenu(!openBurgerMenu);
        document.body.style.overflow = openBurgerMenu ? 'auto' : 'hidden';
    };

    return (
        <div className={stylex(styles.wrapper)}>
            <div className={stylex(styles.container)}>
                <h2 className={stylex(styles.logo)}>SneakMax</h2>
                <CustomMenu menuList={styles.menuList} list={styles.list} />
                <div className={stylex(styles.burgerMenu)}>
                    <BurgerMenu
                        openBurgerMenu={openBurgerMenu}
                        handleBurger={handleBurger}
                    />
                </div>
            </div>
            <div className={stylex(styles.busket)}>
                <svg
                    style={{ cursor: 'pointer' }}
                    width='20'
                    height='19'
                    viewBox='0 0 20 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={handleOpen}
                >
                    <path
                        d='M20 6.57893H16.6038L13.0359 0.319309C12.8589 0.0083658 12.475 -0.093156 12.1784 0.0938088C11.8823 0.280773 11.7865 0.684867 11.9641 0.996475L15.1461 6.57893H4.85388L8.03587 0.996431C8.21348 0.684823 8.11767 0.280729 7.82164 0.0937645C7.52439 -0.0932003 7.14173 0.00832153 6.96411 0.319265L3.39617 6.57888H0V7.89468H1.35651L2.94432 16.8103C3.11033 17.7438 3.88547 18.421 4.78761 18.421H15.2124C16.1145 18.421 16.8896 17.7438 17.055 16.811L18.6434 7.89468H20C20 7.89468 20 6.57893 20 6.57893ZM15.8264 16.5688C15.7715 16.8797 15.5133 17.1053 15.2124 17.1053H4.78761C4.4867 17.1053 4.22854 16.8798 4.173 16.5681L2.62789 7.89468H17.3721L15.8264 16.5688Z'
                        fill='white'
                    />
                </svg>
                {busketGoods.length ? (
                    <span
                        onClick={handleOpen}
                        className={stylex(styles.busketCounter)}
                    >
                        {busketGoods.length}
                    </span>
                ) : null}
            </div>
            {openModal && (
                <BasketModal
                    totalPrice={totalPrice}
                    handleClose={handleClose}
                    setShowPlaceOrder={setShowPlaceOrder}
                />
            )}
            {showPlaceOrder && (
                <PlaceOrder
                    setShowPlaceOrder={setShowPlaceOrder}
                    totalPrice={totalPrice}
                />
            )}
        </div>
    );
};
