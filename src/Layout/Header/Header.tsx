import stylex from '@stylexjs/stylex';

import { Menu } from './Components/Menu';
import { colors, containers } from '../../variables/tokens.stylex';
import { CustomButton } from '../../helpers/CustomButton';

const styles = stylex.create({
    header: {
        position: 'relative',
        backgroundColor: colors.bg_purple,
        color: colors.text_main
    },
    container: {
        position: 'relative',
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

const Header = () => {
	const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId) as HTMLDivElement;
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={stylex(styles.header)}>
            <div className={stylex(styles.container)}>
                <Menu />
                <div className={stylex(styles.content)}>
                    <h1 className={stylex(styles.title)}>
                        Кросівки відомих брендів з доставкою по Україні
                    </h1>
                    <p className={stylex(styles.paragraph)}>
                        Ми продаємо кросівки брендів Nike, Adidas, Puma, Reebok,
                        Converse та багато інших за низькими цінами
                    </p>
                    <CustomButton
                        onClick={() => scrollToSection('catalog')}
                        backgroundColor='red'
                        className={styles.button}
                    >
                        Перейти до покупок
                    </CustomButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
