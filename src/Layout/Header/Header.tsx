import stylex from '@stylexjs/stylex';
import { Menu } from './Components/Menu';
import { colors, containers } from '../../variables/tokens.stylex';
import { CustomButton } from '../../helpers/CustomButton';

const styles = stylex.create({
    header: {
        backgroundColor: colors.bg_purple,
        color: colors.text_main
    },
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    content: {
        position: 'relative',
        padding: '100px 0'
    },
    title: {
        maxWidth: '580px',
        lineHeight: '50px'
    },
    paragraph: {
        maxWidth: '480px',
        lineHeight: '22px',
        marginTop: '20px'
    },
    button: {
        marginTop: '40px'
    }
});

export const Header = () => {
    return (
        <header className={stylex(styles.header)}>
            <div className={stylex(styles.container)}>
                <Menu />
                <div className={stylex(styles.content)}>
                    <h1 className={stylex(styles.title)}>
                        Кроссовки известных брендов с доставкой по России и СНГ
                    </h1>
                    <p className={stylex(styles.paragraph)}>
                        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok,
                        Converse и многие другие по низким ценам
                    </p>
                    <CustomButton
                        backgroundColor='red'
                        className={styles.button}
                    >
                        Перейти к покупкам
                    </CustomButton>
                </div>
            </div>
        </header>
    );
};
