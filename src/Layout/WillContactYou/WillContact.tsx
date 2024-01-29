import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';
import { CustomButton } from '../../helpers/CustomButton';

const MEDIA_WIDTH_480 = '@media (max-width: 480px)';
const MEDIA_WIDTH_768 = '@media (max-width: 768px)';
const MEDIA_WIDTH_1200 = '@media (max-width: 1200px)';

const styles = stylex.create({
    willContactYou: {
        padding: '71px 0'
    },
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    content: {
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '10px'
    },
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: colors.bg_purple,
        borderRadius: '5px',
        color: colors.text_main,
        width: {
            default: '380px',
            [MEDIA_WIDTH_480]: '300px'
        },
        padding: '40px 20px',
        textAlign: 'center'
    },
    input: {
        width: {
            default: '340px',
            [MEDIA_WIDTH_480]: '260px'
        },
        height: '60px',
        borderRadius: '4px',
        border: 'none',
        outline: 'none'
    },
    btn: {
        width: '100%'
    },
    marginTop: {
        marginTop: '40px'
    },
    rightSide: {
        display: {
            default: 'flex',
            [MEDIA_WIDTH_768]: 'none'
        },
        flexDirection: 'column',
        alignItems: 'center'
    },
    gallery: {
        display: 'grid',

        gridTemplateRows: 'auto auto',
        gap: '20px',
        gridTemplateAreas: "'rose dog work' 'firework dog city'"
    },
    rose: {
        gridArea: 'rose'
    },
    firework: {
        gridArea: 'firework'
    },
    dog: {
        display: {
            default: 'block',
            [MEDIA_WIDTH_1200]: 'none'
        },
        gridArea: 'dog'
    },
    work: {
        gridArea: 'work'
    },
    city: {
        gridArea: 'city'
    }
});

const WillContactYou = () => {
    return (
        <section id='question' className={stylex(styles.willContactYou)}>
            <div className={stylex(styles.container)}>
                <div className={stylex(styles.content)}>
                    <div className={stylex(styles.leftSide)}>
                        <h2>Є питання?</h2>
                        <p>Заповніть форму і менеджер звяжеться з вами</p>
                        <input
                            className={stylex(styles.input, styles.marginTop)}
                            type='text'
                            placeholder="Ваше ім'я"
                        />
                        <input
                            className={stylex(styles.input)}
                            type='text'
                            placeholder='Номер телефона'
                        />
                        <CustomButton
                            className={styles.btn}
                            backgroundColor='red'
                        >
                            Відправити
                        </CustomButton>
                    </div>
                    <div className={stylex(styles.rightSide)}>
                        <img
                            src='src/Layout/WillContactYou/img/instagram.png'
                            alt='instagram'
                        />
                        <div className={stylex(styles.gallery)}>
                            <a
                                className={stylex(styles.rose)}
                                href='https://www.linkedin.com/in/ylian-khabal-9a64b3186/'
                            >
                                <img
                                    src='src/Layout/WillContactYou/img/rose.jpg'
                                    alt='instagram'
                                />
                            </a>
                            <a
                                className={stylex(styles.firework)}
                                href='https://www.linkedin.com/in/ylian-khabal-9a64b3186/'
                            >
                                <img
                                    src='src/Layout/WillContactYou/img/fireworks.jpg'
                                    alt='instagram'
                                />
                            </a>
                            <a
                                className={stylex(styles.dog)}
                                href='https://www.linkedin.com/in/ylian-khabal-9a64b3186/'
                            >
                                <img
                                    src='src/Layout/WillContactYou/img/dog.jpg'
                                    alt='instagram'
                                />
                            </a>
                            <a
                                className={stylex(styles.work)}
                                href='https://www.linkedin.com/in/ylian-khabal-9a64b3186/'
                            >
                                <img
                                    src='src/Layout/WillContactYou/img/work.jpg'
                                    alt='instagram'
                                />
                            </a>
                            <a
                                className={stylex(styles.city)}
                                href='https://www.linkedin.com/in/ylian-khabal-9a64b3186/'
                            >
                                <img
                                    src='src/Layout/WillContactYou/img/city.jpg'
                                    alt='instagram'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WillContactYou;