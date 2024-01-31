import { useEffect, useState, ChangeEvent} from 'react';
import stylex from '@stylexjs/stylex';

import { colors, containers } from '../../variables/tokens.stylex';
import { SlideCard } from './components/SlideCard';
import { CustomButton } from '../../helpers/CustomButton';
import { Checkbox } from '../../helpers/Checkbox';
import { debounce } from '../../helpers/Debounce';
import { LayoutGroup } from 'framer-motion';

import sneakers from './img/sneakers.png';
import sliderImg from './img/slide2.png';
import iphoneImg from './img/iPhone11.png';

const MEDIA_WIDTH_480 = '@media (max-width: 480px)';
const MEDIA_WIDTH_576 = '@media (max-width: 576px)';
const MEDIA_WIDTH_768 = '@media (max-width: 768px)';

interface IFormValue {
	type: string[];
	size: string[];
	text: string;
}

type ValueObjectType = keyof Omit<IFormValue, 'text'>

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
            background: 'url("/image/send.png") no-repeat',
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

const FindPair = () => {
    const [activeImg, setActiveImg] = useState<boolean>(false);
    const [countSlide, setCountSide] = useState<number>(1);

	const [valueCheckbox, setValueCheckbox] = useState<IFormValue>({type: [], size:[], text: ''});

	const setCheckboxValue = (e: ChangeEvent<HTMLInputElement>, types: string) => {
		const name: string = (e.target as HTMLInputElement).name;
		
		if (!valueCheckbox[types as ValueObjectType].includes(name)) {
			setValueCheckbox({
				...valueCheckbox,
                [types]: [...valueCheckbox[types as ValueObjectType], name]
            });
        } else {
			const filtered = valueCheckbox[types as ValueObjectType].filter(
				type => type !== name
				);
				setValueCheckbox({
					...valueCheckbox,
					[types]: filtered
				});
			}
	}
	
	const setTextAreaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setValueCheckbox({...valueCheckbox, text: value})
	}
	
    useEffect(() => {
		const timerImg = setTimeout(() => setActiveImg(false), 5);
		
        return () => clearTimeout(timerImg);
    }, [activeImg]);
	
	const debouncedResize = debounce(setTextAreaValue, 300);

    return (
        <section id='goods' className={stylex(styles.findPair)}>
            <div className={stylex(styles.container)}>
                <LayoutGroup>
                    {countSlide === 1 && (
                        <SlideCard
                            title='Ми підберемо ідеальну пару для вас'
                            subtitle='Дайте відповідь на три запитання і ми надішлемо каталог з найкращими для вас моделями '
                            descr='Який тип кросівок розглядаєте?'
                        >
                            <div className={stylex(styles.typeSneakers)}>
                                <div className={stylex(styles.typeBox)}>
                                    <img src={sneakers} alt='sneakers' />
                                    <Checkbox
                                        handler={setCheckboxValue}
                                        text='кеди'
                                        name='boot'
                                        types='type'
                                    />
                                </div>
                                <div className={stylex(styles.typeBox)}>
                                    <img src={sneakers} alt='sneakers' />
                                    <Checkbox
                                        text='кеди'
                                        name='athleticShoe'
                                        handler={setCheckboxValue}
                                        types='type'
                                    />
                                </div>
                                <div className={stylex(styles.typeBox)}>
                                    <img src={sneakers} alt='sneakers' />
                                    <Checkbox
                                        text='кеди'
                                        name='sneaker'
                                        handler={setCheckboxValue}
                                        types='type'
                                    />
                                </div>
                                <div className={stylex(styles.typeBox)}>
                                    <img src={sneakers} alt='sneakers' />
                                    <Checkbox
                                        text='кеди'
                                        name='sandal'
                                        handler={setCheckboxValue}
                                        types='type'
                                    />
                                </div>
                                <div className={stylex(styles.typeBox)}>
                                    <img src={sneakers} alt='sneakers' />
                                    <Checkbox
                                        text='кеди'
                                        name='clog'
                                        handler={setCheckboxValue}
                                        types='type'
                                    />
                                </div>
                                <div className={stylex(styles.typeBox)}>
                                    <img src={sneakers} alt='sneakers' />
                                    <Checkbox
                                        text='кеди'
                                        name='pump'
                                        handler={setCheckboxValue}
                                        types='type'
                                    />
                                </div>
                            </div>
                        </SlideCard>
                    )}
                    {countSlide === 2 && (
                        <SlideCard
                            title='Ми підберемо ідеальну пару для вас'
                            subtitle='Дайте відповідь на три запитання і ми надішлемо каталог з найкращими для вас моделями '
                            descr='Який розмір вам підійде?'
                        >
                            <div className={stylex(styles.perfectPair)}>
                                <div className={stylex(styles.groupCheckbox)}>
                                    <Checkbox
                                        text='менше 36'
                                        name='менше 36'
                                        handler={setCheckboxValue}
                                        types='size'
                                    />
                                    <Checkbox
                                        text='36-38'
                                        name='36-38'
                                        handler={setCheckboxValue}
                                        types='size'
                                    />
                                    <Checkbox
                                        text='39-41'
                                        name='39-41'
                                        handler={setCheckboxValue}
                                        types='size'
                                    />
                                    <Checkbox
                                        text='42-44'
                                        name='42-44'
                                        handler={setCheckboxValue}
                                        types='size'
                                    />
                                    <Checkbox
                                        text='45 і більше'
                                        name='45 і більше'
                                        handler={setCheckboxValue}
                                        types='size'
                                    />
                                </div>
                                <img src={sliderImg} alt='sneakers' />
                            </div>
                        </SlideCard>
                    )}
                    {countSlide === 3 && (
                        <SlideCard
                            title='Ми підберемо ідеальну пару для вас'
                            subtitle='Дайте відповідь на три запитання і ми надішлемо каталог з найкращими для вас моделями '
                            descr='Уточніть будь-які моменти?'
                        >
                            <textarea
                                onChange={debouncedResize}
                                className={stylex(styles.textArea)}
                                placeholder='Введіть текст'
                            />
                        </SlideCard>
                    )}
                    {countSlide === 4 && (
                        <SlideCard
                            title='Ваша вибірка готова!'
                            subtitle='Залиште свої контактні дані, щоб ми могли відправити підготовлений для вас каталог'
                        >
                            <div
                                className={stylex(
                                    styles.selectionReady,
                                    activeImg ? styles.imageActive : null
                                )}
                            >
                                <h3>Отримати пропозицію</h3>
                                <p>
                                    Отримайте добірку підходящих для вас моделей
                                    на пошту
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
                                    src={iphoneImg}
                                    alt='iPhone11'
                                />
                            </div>
                        </SlideCard>
                    )}
                </LayoutGroup>
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

export default FindPair;
