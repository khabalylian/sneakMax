import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';
import { SlideCard } from './components/SlideCard';
import { Checkbox } from '../../helpers/Checkbox';
import { CustomButton } from '../../helpers/CustomButton';
import { useEffect, useState } from 'react';

const MEDIA_WIDTH_480 = '@media (max-width: 480px)';
const MEDIA_WIDTH_576 = '@media (max-width: 576px)';
const MEDIA_WIDTH_768 = '@media (max-width: 768px)';

const styles = stylex.create({
    findPair: {
        color: colors.text
    },
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: {
            default: '100px',
            [MEDIA_WIDTH_768]: {
                default: '50px',
                [MEDIA_WIDTH_576]: '10px'
            }
        },
        transition: 'all 2s'
    },
    typeSneakers: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '70px',
        transition: 'all 2s'
    },
    typeBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    perfectPair: {
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',

        transition: 'all 2s'
    },
    groupCheckbox: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '70px'
    },
    textArea: {
        width: {
            default: '500px',
            [MEDIA_WIDTH_576]: '100%'
        },
        height: '250px',
        fontSize: '16px',
        fontWeight: 400,
        color: colors.line,
        border: 'none',
        outline: 'none',
        '::placeholder': {
            color: colors.line
        }
    },
    selectionReady: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: {
            default: '665px',
            [MEDIA_WIDTH_768]: '500px'
        },
        backgroundColor: colors.line,
        borderRadius: '30px',
        color: colors.text_main,
        padding: {
            default: '40px',
            [MEDIA_WIDTH_576]: '20px'
        }
    },
    imageActive: {
        '::after': {
            content: '',
            display: {
                default: 'block',
                [MEDIA_WIDTH_576]: 'none'
            },
            position: 'absolute',
            background: 'url("src/Layout/findPair/img/send.png") no-repeat',
            backgroundSize: 'contain',
            top: '5px',
            right: '-10%',
            width: '180px',
            height: '95%',
            zIndex: 11111
        }
    },
    input: {
        width: {
            default: '350px',
            [MEDIA_WIDTH_480]: '100%'
        },
        height: {
            default: '60px',
            [MEDIA_WIDTH_480]: '40px'
        },
        border: 'none',
        outline: 'none',
        '::placeholder': {
            color: colors.small_text
        }
    },
    btn: {
        width: '220px'
    },
    iphoneImg: {
        display: {
            default: 'block',
            [MEDIA_WIDTH_576]: 'none'
        },
        position: 'absolute',
        top: 0,
        right: '-10%',
        width: '200px',
        height: '100%'
    },
    footerCard: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export const FindPair = () => {
    const [activeImg, setActiveImg] = useState<boolean>(false);
    const [countSlide, setCountSide] = useState<number>(1);

    useEffect(() => {
        const timerImg = setTimeout(() => setActiveImg(false), 1000000);

        return () => clearTimeout(timerImg);
    }, [activeImg]);

    return (
        <section className={stylex(styles.findPair)}>
            <div className={stylex(styles.container)}>
                {countSlide === 1 && (
                    <SlideCard
                        title='Мы подберем идеальную пару для вас'
                        subtitle='Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями '
                        descr='Какой тип кроссовок рассматриваете?'
                    >
                        <div className={stylex(styles.typeSneakers)}>
                            <div className={stylex(styles.typeBox)}>
                                <img
                                    src='src/Layout/FindPair/img/sneakers.png'
                                    alt='sneakers'
                                />
                                <Checkbox text='кеди' name='кеди' />
                            </div>
                            <div className={stylex(styles.typeBox)}>
                                <img
                                    src='src/Layout/FindPair/img/sneakers.png'
                                    alt='sneakers'
                                />
                                <Checkbox text='кеди' name='кеди' />
                            </div>
                            <div className={stylex(styles.typeBox)}>
                                <img
                                    src='src/Layout/FindPair/img/sneakers.png'
                                    alt='sneakers'
                                />
                                <Checkbox text='кеди' name='кеди' />
                            </div>
                            <div className={stylex(styles.typeBox)}>
                                <img
                                    src='src/Layout/FindPair/img/sneakers.png'
                                    alt='sneakers'
                                />
                                <Checkbox text='кеди' name='кеди' />
                            </div>
                            <div className={stylex(styles.typeBox)}>
                                <img
                                    src='src/Layout/FindPair/img/sneakers.png'
                                    alt='sneakers'
                                />
                                <Checkbox text='кеди' name='кеди' />
                            </div>
                            <div className={stylex(styles.typeBox)}>
                                <img
                                    src='src/Layout/FindPair/img/sneakers.png'
                                    alt='sneakers'
                                />
                                <Checkbox text='кеди' name='кеди' />
                            </div>
                        </div>
                    </SlideCard>
                )}
                {countSlide === 2 && (
                    <SlideCard
                        title='Мы подберем идеальную пару для вас'
                        subtitle='Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями '
                        descr='Какой размер вам подойдет?'
                    >
                        <div className={stylex(styles.perfectPair)}>
                            <div className={stylex(styles.groupCheckbox)}>
                                <Checkbox text='менше 36' name='менше 36' />
                                <Checkbox text='36-38' name='36-38' />
                                <Checkbox text='39-41' name='39-41' />
                                <Checkbox text='42-44' name='42-44' />
                                <Checkbox
                                    text='45 і більше'
                                    name='45 і більше'
                                />
                            </div>
                            <img
                                src='src/Layout/FindPair/img/slide2.png'
                                alt='sneakers'
                            />
                        </div>
                    </SlideCard>
                )}
                {countSlide === 3 && (
                    <SlideCard
                        title='Мы подберем идеальную пару для вас'
                        subtitle='Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями '
                        descr='Уточните какие-либо моменты?'
                    >
                        <textarea
                            className={stylex(styles.textArea)}
                            placeholder='Введіть текст'
                        />
                    </SlideCard>
                )}
                {countSlide === 4 && (
                    <SlideCard
                        title='Ваша подборка готова!'
                        subtitle='Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог'
                    >
                        <div
                            className={stylex(
                                styles.selectionReady,
                                activeImg ? styles.imageActive : null
                            )}
                        >
                            <h3>Получить предложение</h3>
                            <p>
                                Получите подборку подходящих для вас моделей на
                                почту
                            </p>
                            <input
                                className={stylex(styles.input)}
                                type='text'
                                placeholder='Ваше імя'
                            />
                            <input
                                className={stylex(styles.input)}
                                type='text'
                                placeholder='E-mail'
                            />
                            <CustomButton
                                backgroundColor='red'
                                className={styles.btn}
                                onClick={() => setActiveImg(true)}
                            >
                                Получити
                            </CustomButton>
                            <img
                                className={stylex(styles.iphoneImg)}
                                src='src/Layout/FindPair/img/iPhone11.png'
                                alt='iPhone11'
                            />
                        </div>
                    </SlideCard>
                )}
                {countSlide === 4 || (
                    <div className={stylex(styles.footerCard)}>
                        <p>{countSlide} з 4</p>
                        <CustomButton
                            onClick={() => setCountSide(count => (count += 1))}
                            backgroundColor='white'
                        >
                            Наступний крок
                        </CustomButton>
                    </div>
                )}
            </div>
        </section>
    );
};
