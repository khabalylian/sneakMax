import { MouseEvent, TouchEvent, useMemo, useRef, useState } from 'react';
import stylex from '@stylexjs/stylex';

import { colors } from '../../../variables/tokens.stylex';
import { IGoods } from '../Goods';
import { CustomButton } from '../../../helpers/CustomButton';
import { ModalBackground } from '../../../helpers/ModalBackground';

const MEDIA_WIDTH_480 = '@media (max-width: 480px)';
const MEDIA_WIDTH_650 = '@media (max-width: 650px)';
const MEDIA_WIDTH_768 = '@media (max-width: 768px)';
const MEDIA_WIDTH_991 = '@media (max-width: 991px)';
interface ICardGoods {
    setShowCardGoods: (toggle: boolean) => void;
    dataGoods: IGoods;
}

const styles = stylex.create({
    card: {
        display: 'flex',
        gap: '20px',
        flexDirection: {
            default: 'row',
            [MEDIA_WIDTH_650]: 'column'
        },
        position: 'fixed',
        top: '50%',
        left: '50%',
        height: '100%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: colors.text_main,
        padding: '40px',
        overflow: {
            default: 'auto',
            [MEDIA_WIDTH_650]: 'overlay'
        },
        zIndex: 1000
    },
    sliderContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    slider: {
        position: 'relative',
        width: {
            default: '520px',
            [MEDIA_WIDTH_991]: {
                default: '320px',
                [MEDIA_WIDTH_768]: '220px'
            }
        },
        height: {
            default: '450px',
            [MEDIA_WIDTH_991]: {
                default: '350px',
                [MEDIA_WIDTH_768]: '250px'
            }
        }
    },
    sliderBtn: {
        backgroundColor: 'inherit',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    },
    prev: {
        position: 'absolute',
        left: {
            default: 0,
            [MEDIA_WIDTH_650]: '-10%'
        },
        top: '50%'
    },
    next: {
        position: 'absolute',
        right: {
            default: 0,
            [MEDIA_WIDTH_650]: '-10%'
        },
        top: '50%'
    },
    sliderImg: {
        width: '100% !important',
        height: '100%'
    },
    sliderImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    sliderThumbs: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '20px',
        width: '70px',
        height: '75px',
        cursor: 'pointer'
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '430px',
        marginTop: '40px'
    },
    right: {
        display: 'flex',
        width: {
            default: '300px',
            [MEDIA_WIDTH_480]: '250px'
        },
        flexDirection: 'column',
        gap: '20px'
    },
    infoHeader: {
        display: 'flex',
        gap: '50px',
        color: colors.small_text
    },
    countProduct: {
        display: 'flex',
        gap: '5px'
    },
    countProductSpan: {
        display: 'block',
        fontSize: '16px',
        fontWeight: 400,
        color: colors.text
    },
    chooseSize: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    sizeWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
    },
    size: {
        borderRadius: '4px',
        border: `1px solid ${colors.small_text}`,
        padding: '10px, 25px',
        cursor: 'pointer'
    },
    activeSize: {
        border: `1px solid ${colors.btn_main}`
    },
    noStock: {
        position: 'relative',
        color: colors.small_text,
        ':hover::after': {
            content: '',
            backgroundImage: "url('src/Layout/Goods/img/Union.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 30%',
            position: 'absolute',
            width: '100px',
            height: '51px',
            left: '-25%',
            top: '-130%',
            zIndex: 1111
        }
    },
    price: {
        marginTop: '20px'
    },
    btn: {
        width: '100%',
        marginTop: '40px',
        padding: {
            default: '22px 47px',
            [MEDIA_WIDTH_650]: '11px 23px'
        }
    },
    infoPay: {
        color: colors.small_text,
        fontSize: '14px'
    },
    characteristic: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    characteristicInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    btnHide: {
        display: {
            default: 'none',
            [MEDIA_WIDTH_650]: 'block'
        },
        position: 'absolute',
        top: '10px',
        right: '10px',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer'
    },
	article:{},
	left: {}
});

const IMG = [
    'src/Layout/Goods/img/cardGoods.png',
    'src/Layout/Goods/img/cardGoods.png',
    'src/Layout/Goods/img/footwear.jpg'
];

export const CardOrderGoods = ({ setShowCardGoods, dataGoods }: ICardGoods) => {
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const [size, setSize] = useState<number[]>([]);

    const refStart = useRef(0);
    const refPos = useRef(0);

    const touchStart = (event: TouchEvent) => {
        refStart.current = +event.touches[0].clientX.toFixed();
    };

    const touchMove = (event: TouchEvent) => {
        refPos.current = +event.touches[0].clientX.toFixed();
    };

    const touchEnd = (event: TouchEvent) => {
        const width = (event.target as HTMLImageElement).width * 0.15;
        const pos = Math.abs(refStart.current) - width;

        if (pos > refPos.current) {
            setCurrentSlide(current =>
                current <= 1 ? (current = IMG.length) : (current -= 1)
            );
        } else if (Math.abs(refStart.current) + width < refPos.current) {
            setCurrentSlide(current =>
                current >= IMG.length ? (current = 1) : (current += 1)
            );
        }
    };

    const renderSlide = useMemo(() => {
        return IMG.map((item, index) => (
            <img
                onTouchMove={touchMove}
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
                key={index}
                className={stylex(styles.sliderImage)}
                src={item}
                alt=''
                style={{
                    display: currentSlide === index + 1 ? 'block' : 'none'
                }}
            />
        ));
    }, [currentSlide]);

    const renderThumbs = useMemo(() => {
        return IMG.map((item, index) => (
            <img
                key={index}
                onClick={() => setCurrentSlide(index + 1)}
                className={stylex(styles.sliderImage)}
                src={item}
                alt=''
                style={{
                    opacity: currentSlide === index + 1 ? 'inherit' : 0.7
                }}
            />
        ));
    }, [currentSlide]);

    const setSizeHandler = (event: MouseEvent) => {
        const textContent = Number(event.currentTarget.textContent);

        if (textContent !== null) {
            const findSize = dataGoods.data.inStockSize.filter(
                item => item.size === textContent
            );

            if (size.includes(textContent)) {
                const newSizeArray = size.filter(size => size !== textContent);
                setSize(newSizeArray);
            } else if (findSize[0].count && !size.includes(textContent)) {
                setSize([...size, textContent]);
            }
        }
    };

    const renderSize = useMemo(() => {
        return dataGoods.data.inStockSize.map((data, index) => (
            <button
                key={index}
                onClick={setSizeHandler}
                className={stylex(
                    styles.size,
                    size.includes(data.size) && data.count
                        ? styles.activeSize
                        : null,
                    !data.count ? styles.noStock : null
                )}
            >
                {data.size}
            </button>
        ));
    }, [size]);

    return (
        <>
            <ModalBackground onClick={() => setShowCardGoods(false)} />
            <div className={stylex(styles.card)}>
                <CustomButton
                    backgroundColor='red'
                    onClick={() => setShowCardGoods(false)}
                    className={styles.btnHide}
                >
                    Закрити
                </CustomButton>
                <div className={stylex(styles.left)}>
                    <div className={stylex(styles.sliderContainer)}>
                        <div className={stylex(styles.slider)}>
                            {renderSlide}
                            <button
                                onClick={() =>
                                    setCurrentSlide(current =>
                                        current <= 1
                                            ? (current = IMG.length)
                                            : (current -= 1)
                                    )
                                }
                                className={stylex(
                                    styles.prev,
                                    styles.sliderBtn
                                )}
                            >
                                <svg
                                    style={{ transform: 'rotate(180deg)' }}
                                    width={32}
                                    height={32}
                                    viewBox='0 0 512 512'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <title />
                                    <g data-name='1' id='_1'>
                                        <path d='M202.1,450a15,15,0,0,1-10.6-25.61L365.79,250.1,191.5,75.81A15,15,0,0,1,212.71,54.6l184.9,184.9a15,15,0,0,1,0,21.21l-184.9,184.9A15,15,0,0,1,202.1,450Z' />
                                    </g>
                                </svg>
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentSlide(current =>
                                        current >= IMG.length
                                            ? (current = 1)
                                            : (current += 1)
                                    )
                                }
                                className={stylex(
                                    styles.next,
                                    styles.sliderBtn
                                )}
                            >
                                <svg
                                    width={32}
                                    height={32}
                                    viewBox='0 0 512 512'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <title />
                                    <g data-name='1' id='_1'>
                                        <path d='M202.1,450a15,15,0,0,1-10.6-25.61L365.79,250.1,191.5,75.81A15,15,0,0,1,212.71,54.6l184.9,184.9a15,15,0,0,1,0,21.21l-184.9,184.9A15,15,0,0,1,202.1,450Z' />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className={stylex(styles.sliderThumbs)}>
                            {renderThumbs}
                        </div>
                    </div>
                    <div className={stylex(styles.description)}>
                        <h3>Опис</h3>
                        <p>{dataGoods.data.description}</p>
                    </div>
                </div>
                <div className={stylex(styles.right)}>
                    <div className={stylex(styles.infoHeader)}>
                        <p className={stylex(styles.article)}>
                            Артикул: {dataGoods.article}
                        </p>
                        <p className={stylex(styles.countProduct)}>
                            В наявності:
                            <span className={stylex(styles.countProductSpan)}>
                                {dataGoods.data.count}
                            </span>
                        </p>
                    </div>
                    <h3>{dataGoods.title}</h3>
                    <div className={stylex(styles.chooseSize)}>
                        <p>Виберіть розмір:</p>
                        <div className={stylex(styles.sizeWrapper)}>
                            {renderSize}
                        </div>
                    </div>
                    <h2 className={stylex(styles.price)}>
                        {dataGoods.data.price} грн.
                    </h2>
                    <CustomButton className={styles.btn} backgroundColor='red'>
                        Заказати
                    </CustomButton>
                    <div className={stylex(styles.infoPay)}>
                        <p>
                            <svg
                                style={{ marginRight: '5px' }}
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='12'
                                viewBox='0 0 16 12'
                                fill='none'
                            >
                                <path
                                    d='M6.35996 11.3038C6.21972 11.4442 6.02847 11.5227 5.82972 11.5227C5.63097 11.5227 5.43972 11.4442 5.29947 11.3038L1.06498 7.08415C0.625477 6.64627 0.625477 5.9364 1.06498 5.49927L1.59522 4.97098C2.03472 4.5331 2.74647 4.5331 3.18597 4.97098L5.82972 7.60497L12.9735 0.487588C13.4129 0.0497102 14.1254 0.0497102 14.5642 0.487588L15.0944 1.01588C15.5339 1.45376 15.5339 2.16363 15.0944 2.60076L6.35996 11.3038Z'
                                    fill='#B2B5BB'
                                />
                            </svg>
                            Бесплатная доставка до двери
                        </p>
                        <p>
                            <svg
                                style={{ marginRight: '5px' }}
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='12'
                                viewBox='0 0 16 12'
                                fill='none'
                            >
                                <path
                                    d='M6.35996 11.3038C6.21972 11.4442 6.02847 11.5227 5.82972 11.5227C5.63097 11.5227 5.43972 11.4442 5.29947 11.3038L1.06498 7.08415C0.625477 6.64627 0.625477 5.9364 1.06498 5.49927L1.59522 4.97098C2.03472 4.5331 2.74647 4.5331 3.18597 4.97098L5.82972 7.60497L12.9735 0.487588C13.4129 0.0497102 14.1254 0.0497102 14.5642 0.487588L15.0944 1.01588C15.5339 1.45376 15.5339 2.16363 15.0944 2.60076L6.35996 11.3038Z'
                                    fill='#B2B5BB'
                                />
                            </svg>
                            Оплата заказа при получении
                        </p>
                        <p>
                            <svg
                                style={{ marginRight: '5px' }}
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='12'
                                viewBox='0 0 16 12'
                                fill='none'
                            >
                                <path
                                    d='M6.35996 11.3038C6.21972 11.4442 6.02847 11.5227 5.82972 11.5227C5.63097 11.5227 5.43972 11.4442 5.29947 11.3038L1.06498 7.08415C0.625477 6.64627 0.625477 5.9364 1.06498 5.49927L1.59522 4.97098C2.03472 4.5331 2.74647 4.5331 3.18597 4.97098L5.82972 7.60497L12.9735 0.487588C13.4129 0.0497102 14.1254 0.0497102 14.5642 0.487588L15.0944 1.01588C15.5339 1.45376 15.5339 2.16363 15.0944 2.60076L6.35996 11.3038Z'
                                    fill='#B2B5BB'
                                />
                            </svg>
                            Обмен в течении двух недель
                        </p>
                    </div>
                    <div className={stylex(styles.characteristic)}>
                        <h3>Характеристики</h3>
                        <div className={stylex(styles.characteristicInfo)}>
                            <p>
                                Стать:{' '}
                                {dataGoods.data.gender === 'male'
                                    ? 'Чоловічий'
                                    : 'Жіночий'}
                            </p>
                            <p>Колір: {dataGoods.data.color}</p>
                            <p>Вміст: {dataGoods.data.contents}</p>
                            <p>Країна: {dataGoods.data.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
