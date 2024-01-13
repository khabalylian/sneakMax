import stylex from '@stylexjs/stylex';
import { colors } from '../../../variables/tokens.stylex';

interface IBurgerMenu {
    openBurgerMenu: boolean;
    handleBurger: () => void;
}

const styles = stylex.create({
    burgerMenu: {
        position: 'sticky',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        zIndex: 1000
    },
    menu: {
        width: '30px',
        height: '3px',
        backgroundColor: colors.btn_gray_hover,
        transition: 'all 0.3s ease'
    },
    spanFirst: {
        transform: 'rotate(220deg) translate(-5px, -5px)'
    },
    spanSecond: {
        transform: 'rotate(45deg)',
        opacity: '0'
    },
    spanThird: {
        transform: 'rotate(-220deg) translate(-5px, 5px)'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: 'max-content',
        color: 'white',
        padding: '10px 30px 30px 15px',
        margin: '0px'
    },
    visible: {
        display: 'block'
    },
    hidden: {
        display: 'none'
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: colors.text,
        zIndex: 200,
        width: '100%',
        height: '100vh'
    },
    listItem: {
        margin: 0,
        ':hover': {
            color: colors.small_text
        }
    }
});

export const BurgerMenu = ({ openBurgerMenu, handleBurger }: IBurgerMenu) => {
    return (
        <>
            <div className={stylex(styles.burgerMenu)} onClick={handleBurger}>
                <span
                    className={stylex(
                        styles.menu,
                        openBurgerMenu ? styles.spanFirst : null
                    )}
                ></span>
                <span
                    className={stylex(
                        styles.menu,
                        openBurgerMenu ? styles.spanSecond : null
                    )}
                ></span>
                <span
                    className={stylex(
                        styles.menu,
                        openBurgerMenu ? styles.spanThird : null
                    )}
                ></span>
            </div>
            <div
                className={stylex(
                    styles.content,
                    openBurgerMenu ? styles.visible : styles.hidden
                )}
            >
                <nav>
                    <ul className={stylex(styles.list)}>
                        <li className={stylex(styles.listItem)}>Каталог</li>
                        <li className={stylex(styles.listItem)}>Про нас</li>
                        <li className={stylex(styles.listItem)}>
                            Підбір товара
                        </li>
                        <li className={stylex(styles.listItem)}>
                            Наша команда
                        </li>
                        <li className={stylex(styles.listItem)}>
                            Доставка і оплата
                        </li>
                        <li className={stylex(styles.listItem)}>Контакти</li>
                        <li className={stylex(styles.listItem)}>Корзина</li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
