import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';

const MEDIA_WIDTH_480 = '@media (max-width: 480px)';
const MEDIA_WIDTH_1080 = '@media (max-width: 1080px)';
const MEDIA_WIDTH_1200 = '@media (max-width: 1200px)';

const styles = stylex.create({
    about: {
        position: 'relative',
        backgroundColor: colors.bg_purple,
        color: colors.text_main,
        padding: {
            default: '222px 0 158px 0',
            [MEDIA_WIDTH_480]: '150px 0 100px 0'
        },
        '::after': {
            content: '',
            position: 'absolute',
            background: 'url("src/Layout/About/img/bgCircle.svg") no-repeat',
            backgroundSize: 'contain',
            top: 0,
            left: 0,
            width: '100%',
            height: '424px'
        }
    },
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        gap: '20px',
        margin: {
            default: 0,
            [MEDIA_WIDTH_1080]: '0 auto'
        }
    },
    postScript: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '20px',
        fontSize: '20px',
        fontWeight: 700
    },
    dephis: {
        display: 'block',
        width: '30px',
        height: '3px',
        backgroundColor: colors.text_main
    },
    bgImg: {
        position: 'absolute',
        display: {
            default: 'block',
            [MEDIA_WIDTH_1080]: 'none'
        },
        top: 0,
        right: {
            default: '10%',
            [MEDIA_WIDTH_1200]: 0
        },
        height: '100%'
    }
});

export const About = () => {
    return (
        <section id='about' className={stylex(styles.about)}>
            <div className={stylex(styles.container)}>
                <div className={stylex(styles.content)}>
                    <h2>Пара слов о нас</h2>
                    <p>
                        Спорт держит нас в форме. Учит дисциплине. Объединяет
                        нас. Через спорт мы можем менять жизни. В том числе с
                        помощью воодушевляющих историй спортсменов. Чтобы помочь
                        тебе подняться и двигаться вперед.
                    </p>
                    <p className={stylex(styles.postScript)}>
                        <span className={stylex(styles.dephis)}></span> SneakMax
                    </p>
                </div>
                <img
                    className={stylex(styles.bgImg)}
                    src='src/Layout/About/img/mainImg.png'
                    alt='bgMain'
                />
            </div>
        </section>
    );
};
