import { useEffect, useState} from 'react';
import { AnimatePresence} from 'framer-motion';
import stylex from '@stylexjs/stylex';

import { colors, containers } from '../../variables/tokens.stylex';
import { SelectionPrice } from './Components/SelectionPrice';
import { HoverGoods } from './Components/HoverGoods';
import { GoodsState } from '../../store';
import { CustomButton } from '../../helpers/CustomButton';


const MEDIA_WIDTH_576 = '@media (max-width: 576px)';
const MEDIA_WIDTH_768 = '@media (max-width: 768px)';
export interface IGoods {
    article: string;
    image: string;
    title: string;
    data: {
        size: number;
        price: number;
        gender: 'male' | 'female';
        color: string;
        contents: string;
        country: string;
        description: string;
        inStockSize: {
            size: number;
            count: number;
        }[];
        count: number;
    };
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
        position: 'relative',
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
        justifyContent: {
            default: 'flex-start',
            [MEDIA_WIDTH_768]: 'center'
        },
        flexWrap: 'wrap',
        gap: '20px'
    },
    btn: {
        margin: '0 auto'
    },
    hideBtn: {
        display: 'none'
    },
    filterBtn: {
        display: {
            default: 'none',
            [MEDIA_WIDTH_576]: 'block'
        },
        padding: '10px',
        border: 'none',
        cursor: 'pointer'
    },
    btnGroup: {
        display: 'flex',
        gap: '10px'
    }
});

const Goods = () => {
    const [showSelection, setShowSelection] = useState<boolean>(false);

    const getGoods = GoodsState(state => state.getGoods);
    const goods = GoodsState(state => state.goods);
    const countLimit = GoodsState(state => state.countLimit);
    const filteredGoods = GoodsState(state => state.filteredGoods);
    const updateCount = GoodsState(state => state.updateCount);
    const countGoods = GoodsState(state => state.countGoods);

    useEffect(() => {
        getGoods(countLimit);
        updateCount();
    }, []);

    const scrollToLastProduct = () => {
        const content = document.querySelector('#scroll') as HTMLDivElement;
        const targetPosition =
            content.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <section id='catalog' className={stylex(styles.goods)}>
            <div className={stylex(styles.container)}>
                <h2 className={stylex(styles.title)}>Каталог</h2>
                <CustomButton
                    backgroundColor='white'
                    onClick={() => setShowSelection(!showSelection)}
                    className={styles.filterBtn}
                >
                    <svg
                        width={30}
                        height={30}
                        data-name='Layer 1'
                        id='Layer_1'
                        viewBox='0 0 48 48'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title />
                        <path d='M47,12a2,2,0,0,0-2-2H24a2,2,0,0,0,0,4H45A2,2,0,0,0,47,12Z' />
                        <path d='M3,14H8.35a6,6,0,1,0,0-4H3a2,2,0,0,0,0,4Zm11-4a2,2,0,1,1-2,2A2,2,0,0,1,14,10Z' />
                        <path d='M45,22H37.65a6,6,0,1,0,0,4H45a2,2,0,0,0,0-4ZM32,26a2,2,0,1,1,2-2A2,2,0,0,1,32,26Z' />
                        <path d='M22,22H3a2,2,0,0,0,0,4H22a2,2,0,0,0,0-4Z' />
                        <path d='M45,34H28a2,2,0,0,0,0,4H45a2,2,0,0,0,0-4Z' />
                        <path d='M18,30a6,6,0,0,0-5.65,4H3a2,2,0,0,0,0,4h9.35A6,6,0,1,0,18,30Zm0,8a2,2,0,1,1,2-2A2,2,0,0,1,18,38Z' />
                    </svg>
                </CustomButton>
                <div className={stylex(styles.wrapper)}>
                    <SelectionPrice
                        showSelection={showSelection}
                        setShowSelection={setShowSelection}
                    />
                    <div className={stylex(styles.content)}>
                        <div
                            className={stylex(styles.goodsContent)}
                            id='scroll'
                        >
                            <AnimatePresence mode='sync'>
                                {filteredGoods.map((goods, id: number) => (
                                    <HoverGoods key={id} {...goods} />
                                ))}
                            </AnimatePresence>
                        </div>
                        <div className={stylex(styles.btnGroup)}>
                            <CustomButton
                                onClick={() => {
                                    getGoods(countLimit - 9);
                                    scrollToLastProduct();
                                }}
                                className={
                                    goods.length <= 9
                                        ? styles.hideBtn
                                        : styles.btn
                                }
                                backgroundColor='red'
                            >
                                Приховати
                            </CustomButton>
                            <CustomButton
                                onClick={() => {
                                    getGoods(countLimit + 9);
                                }}
                                className={
                                    filteredGoods.length === 0 ||
                                    goods.length === countGoods
                                        ? styles.hideBtn
                                        : styles.btn
                                }
                                backgroundColor='red'
                            >
                                Показати більше
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goods;
