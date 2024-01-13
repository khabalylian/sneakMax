import stylex from '@stylexjs/stylex';
import { colors } from '../../../variables/tokens.stylex';
import { CustomButton } from '../../../helpers/CustomButton';
import { IGoods } from '../Goods';
import { GoodsState } from '../../../store';
import { useState } from 'react';
import { CardOrderGoods } from './CardGoods';

const styles = stylex.create({
    goodsWrapper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    goodsImg: {
        width: '280px',
        height: '280px'
    },
    goodsTitle: {
        maxWidth: '300px'
    },
    goodsPrice: {
        fontSize: '20px',
        fontWeight: 400,
        color: colors.text
    },
    goodsHover: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '280px',
        height: '280px',
        backgroundColor: colors.text_main,
        opacity: 0,
        zIndex: 100,
        ':hover': {
            opacity: 0.8
        }
    },
    goodsCircle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80px',
        height: '80px',
        borderRadius: '100%',
        padding: 0,
        zIndex: 200,
        cursor: 'pointer'
    }
});

export const HoverGoods = ({ article, title, image, data }: IGoods) => {
    const busketGoods = GoodsState(state => state.busketGoods);
    const updateBusketGoods = GoodsState(state => state.updateBusketGoods);

    const [showCardGoods, setShowCardGoods] = useState<boolean>(false);

    return (
        <div className={stylex(styles.goodsWrapper)}>
            <img className={stylex(styles.goodsImg)} src={image} alt={image} />
            <p className={stylex(styles.goodsTitle)}>{title}</p>
            <div className={stylex(styles.goodsPrice)}>{data.price} Грн</div>
            <div className={stylex(styles.goodsHover)}>
                <CustomButton
                    onClick={() => setShowCardGoods(true)}
                    backgroundColor='gray'
                    className={styles.goodsCircle}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='26'
                        height='20'
                        viewBox='0 0 26 20'
                        fill='none'
                    >
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M16.9518 10.0664C16.9518 12.2489 15.1818 14.0176 12.9993 14.0176C10.8168 14.0176 9.0481 12.2489 9.0481 10.0664C9.0481 7.88264 10.8168 6.11389 12.9993 6.11389C15.1818 6.11389 16.9518 7.88264 16.9518 10.0664Z'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M12.9975 19.1936C17.7575 19.1936 22.1113 15.7711 24.5625 10.0661C22.1113 4.3611 17.7575 0.938599 12.9975 0.938599H13.0025C8.2425 0.938599 3.88875 4.3611 1.4375 10.0661C3.88875 15.7711 8.2425 19.1936 13.0025 19.1936H12.9975Z'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </CustomButton>
                <CustomButton
                    backgroundColor='gray'
                    className={styles.goodsCircle}
                    onClick={() =>
                        updateBusketGoods([
                            ...busketGoods,
                            { article, title, image, data }
                        ])
                    }
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 19'
                        fill='none'
                    >
                        <path
                            d='M20 6.57893H16.6038L13.0359 0.319309C12.8589 0.0083658 12.475 -0.093156 12.1784 0.0938088C11.8823 0.280773 11.7865 0.684867 11.9641 0.996475L15.1461 6.57893H4.85388L8.03587 0.996431C8.21348 0.684823 8.11767 0.280729 7.82164 0.0937645C7.52439 -0.0932003 7.14173 0.00832153 6.96411 0.319265L3.39617 6.57888H0V7.89468H1.35651L2.94432 16.8103C3.11033 17.7438 3.88547 18.421 4.78761 18.421H15.2124C16.1145 18.421 16.8896 17.7438 17.055 16.811L18.6434 7.89468H20C20 7.89468 20 6.57893 20 6.57893ZM15.8264 16.5688C15.7715 16.8797 15.5133 17.1053 15.2124 17.1053H4.78761C4.4867 17.1053 4.22854 16.8798 4.173 16.5681L2.62789 7.89468H17.3721L15.8264 16.5688Z'
                            fill='white'
                        />
                    </svg>
                </CustomButton>
            </div>
            {showCardGoods && (
                <CardOrderGoods
                    setShowCardGoods={setShowCardGoods}
                    dataGoods={{ article, title, image, data }}
                />
            )}
        </div>
    );
};
