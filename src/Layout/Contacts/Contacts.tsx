import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';

const MEDIA_WIDTH_576 = '@media (max-width: 576px)';
const MEDIA_WIDTH_768 = '@media (max-width: 768px)';
const MEDIA_WIDTH_991 = '@media (max-width: 991px)';

const styles = stylex.create({
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    content: {
        display: 'flex',
        flexDirection: {
            default: 'row',
            [MEDIA_WIDTH_576]: 'column'
        },
        justifyContent: 'space-between',
		alignItems: {
			default: 'normal',
			[MEDIA_WIDTH_576]: 'center'
		},
        gap: '40px',
        padding: '60px 0 60px 0'
    },
    mainOffice: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: '14px',
        lineHeight: '140%',
        letterSpacing: '1.12px',
        textTransform: 'uppercase',
        color: colors.small_text
    },
    questions: {
        position: 'relative',
        borderRadius: '100%',
        backgroundColor: colors.text_main,
        padding: '2px 8px',
        textAlign: 'center',
        cursor: 'pointer',
        borderShadow: '2px',
        boxShadow: '2px 4px 10px',
        ':hover::after': {
            content: '',
            position: 'absolute',
            background: 'url("src/Layout/Contacts/img/question.svg") no-repeat',
            backgroundPosition: 'center',
            top: '-80px',
            left: '-5px',
            width: '426px',
            height: '80px',
            zIndex: 11111
        }
    },
    mainOfficePhone: {
        marginTop: '40px'
    },
    link: {
        fontSize: '30px',
        lineHeight: '140%',
        color: colors.text
    },
    addres: {
        fontSize: '18px',
        color: colors.text,
        marginTop: '10px'
    },
    salesDep: {
        marginTop: '40px'
    },
    social: {
        marginTop: '40px'
    },
    map: {
        width: {
            default: '600px',
            [MEDIA_WIDTH_991]: {
                default: '400px',
                [MEDIA_WIDTH_768]: {
                    default: '250px',
                    [MEDIA_WIDTH_576]: '280px'
                }
            }
        },

        height: {
            default: '450px',
            [MEDIA_WIDTH_576]: '350px'
        }
    }
});

export const Contacts = () => {
    return (
        <section className={stylex(styles.contacts)}>
            <div className={stylex(styles.container)}>
                <h2>Контакти</h2>
                <div className={stylex(styles.content)}>
                    <div className={stylex(styles.leftSide)}>
                        <div className={stylex(styles.mainOffice)}>
                            <p className={stylex(styles.title)}>
                                головний офіс{' '}
                                <span className={stylex(styles.questions)}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='6'
                                        height='11'
                                        viewBox='0 0 6 11'
                                        fill='none'
                                    >
                                        <path
                                            d='M3.78 7.85175H2.184C2.16533 7.35964 2.212 6.92324 2.324 6.54255C2.44533 6.16187 2.604 5.85082 2.8 5.60941C3.00533 5.35871 3.21067 5.13123 3.416 4.92696C3.62133 4.72268 3.81733 4.49984 4.004 4.25843C4.2 4.00773 4.33067 3.74775 4.396 3.47849C4.47067 2.93067 4.35867 2.50356 4.06 2.19715C3.76133 1.88146 3.36933 1.72361 2.884 1.72361C2.52 1.72361 2.18867 1.84432 1.89 2.08573C1.59133 2.32714 1.414 2.64747 1.358 3.04673H0C0.0373333 2.14608 0.312667 1.46363 0.826 0.999375C1.34867 0.535122 2.03 0.302996 2.87 0.302996C3.64467 0.284426 4.32133 0.47477 4.9 0.874027C5.488 1.27329 5.838 1.79789 5.95 2.44784C6.006 2.80068 6.01533 3.10708 5.978 3.36706C5.94067 3.70133 5.83333 4.01702 5.656 4.31414C5.488 4.60198 5.29667 4.85732 5.082 5.08016C4.87667 5.303 4.67133 5.53977 4.466 5.79047C4.26067 6.03188 4.09267 6.329 3.962 6.68183C3.83133 7.02538 3.77067 7.41535 3.78 7.85175ZM3.626 10.0523C3.458 10.2102 3.24333 10.2891 2.982 10.2891C2.72067 10.2891 2.49667 10.2102 2.31 10.0523C2.13267 9.89446 2.044 9.69019 2.044 9.43949C2.044 9.1888 2.13267 8.98453 2.31 8.82668C2.49667 8.66883 2.72067 8.58991 2.982 8.58991C3.24333 8.58991 3.458 8.66883 3.626 8.82668C3.80333 8.98453 3.892 9.1888 3.892 9.43949C3.892 9.69019 3.80333 9.89446 3.626 10.0523Z'
                                            fill='#444B58'
                                        />
                                    </svg>
                                </span>
                            </p>
                            <h2 className={stylex(styles.mainOfficePhone)}>
                                <a
                                    className={stylex(styles.link)}
                                    href='tel:+380983472418'
                                >
                                    +38 098 347 24 18
                                </a>
                            </h2>
                            <p className={stylex(styles.addres)}>
                                м. Львів, Шевченка 43
                            </p>
                        </div>
                        <div className={stylex(styles.salesDep)}>
                            <p className={stylex(styles.title)}>
                                відділ продажу
                            </p>
                            <h2 className={stylex(styles.mainOfficePhone)}>
                                <a
                                    className={stylex(styles.link)}
                                    href='tel:+380663458861'
                                >
                                    +38 066 345 88 61
                                </a>
                            </h2>
                            <p className={stylex(styles.addres)}>
                                м. Львів, Чорновола 21
                            </p>
                        </div>
                        <div className={stylex(styles.social)}>
                            <a href='https://www.instagram.com/ylian4ikk/?next=%2F'>
                                <svg
                                    width='44'
                                    height='45'
                                    viewBox='0 0 44 45'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <mask
                                        id='mask0_47_762'
                                        maskUnits='userSpaceOnUse'
                                        x='0'
                                        y='0'
                                        width='44'
                                        height='45'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M0 22.4861C0 10.3986 9.84974 0.599854 22 0.599854C34.1503 0.599854 44 10.3986 44 22.4861C44 34.5735 34.1503 44.3723 22 44.3723C9.84974 44.3723 0 34.5735 0 22.4861Z'
                                            fill='white'
                                        />
                                    </mask>
                                    <g mask='url(#mask0_47_762)'>
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M0 22.4861C0 10.3986 9.84974 0.599854 22 0.599854C34.1503 0.599854 44 10.3986 44 22.4861C44 34.5735 34.1503 44.3723 22 44.3723C9.84974 44.3723 0 34.5735 0 22.4861Z'
                                            fill='#0E5A4C'
                                        />
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M22.001 10.8134C18.8144 10.8134 18.4145 10.8272 17.1629 10.8839C15.9138 10.9408 15.0612 11.1375 14.3151 11.4262C13.5434 11.7243 12.8888 12.1231 12.2366 12.7722C11.5839 13.421 11.183 14.0722 10.8824 14.8397C10.5915 15.5822 10.3935 16.4306 10.3372 17.6728C10.2813 18.9179 10.2666 19.316 10.2666 22.4861C10.2666 25.6562 10.2808 26.0529 10.3375 27.298C10.3949 28.5406 10.5927 29.3889 10.8826 30.1311C11.1825 30.8988 11.5834 31.55 12.2359 32.1988C12.8878 32.8481 13.5424 33.2479 14.3137 33.5461C15.0602 33.8347 15.9131 34.0315 17.162 34.0884C18.4135 34.145 18.8132 34.1589 21.9996 34.1589C25.1864 34.1589 25.5851 34.145 26.8367 34.0884C28.0858 34.0315 28.9394 33.8347 29.686 33.5461C30.4574 33.2479 31.1111 32.8481 31.763 32.1988C32.4157 31.55 32.8166 30.8988 33.1173 30.1313C33.4057 29.3889 33.6037 28.5404 33.6624 27.2982C33.7186 26.0531 33.7333 25.6562 33.7333 22.4861C33.7333 19.316 33.7186 18.9181 33.6624 17.673C33.6037 16.4304 33.4057 15.5822 33.1173 14.84C32.8166 14.0722 32.4157 13.421 31.763 12.7722C31.1104 12.1229 30.4577 11.7241 29.6852 11.4262C28.9372 11.1375 28.0841 10.9408 26.835 10.8839C25.5834 10.8272 25.185 10.8134 21.9974 10.8134H22.001ZM20.9486 12.9172C21.261 12.9167 21.6096 12.9172 22.0012 12.9172C25.134 12.9172 25.5053 12.9284 26.7425 12.9843C27.8865 13.0363 28.5074 13.2265 28.921 13.3863C29.4686 13.5978 29.8589 13.8508 30.2694 14.2593C30.68 14.6678 30.9343 15.0569 31.1474 15.6017C31.308 16.0126 31.4994 16.6303 31.5515 17.7684C31.6077 18.9989 31.6199 19.3686 31.6199 22.4837C31.6199 25.5989 31.6077 25.9685 31.5515 27.199C31.4992 28.3371 31.308 28.9548 31.1474 29.3658C30.9347 29.9105 30.68 30.2984 30.2694 30.7067C29.8587 31.1153 29.4688 31.3682 28.921 31.5797C28.5079 31.7402 27.8865 31.9299 26.7425 31.982C25.5056 32.0379 25.134 32.05 22.0012 32.05C18.8681 32.05 18.4968 32.0379 17.2599 31.982C16.1159 31.9294 15.495 31.7393 15.0811 31.5795C14.5336 31.3679 14.1425 31.115 13.7318 30.7065C13.3211 30.2979 13.0669 29.9098 12.8537 29.3648C12.6931 28.9538 12.5017 28.3362 12.4497 27.1981C12.3934 25.9676 12.3822 25.5979 12.3822 22.4808C12.3822 19.3637 12.3934 18.996 12.4497 17.7655C12.502 16.6274 12.6931 16.0097 12.8537 15.5983C13.0664 15.0535 13.3211 14.6644 13.7318 14.2559C14.1425 13.8473 14.5336 13.5944 15.0811 13.3824C15.4947 13.2219 16.1159 13.0322 17.2599 12.9799C18.3423 12.9313 18.7618 12.9167 20.9486 12.9143V12.9172ZM28.2643 14.8551C27.487 14.8551 26.8563 15.4818 26.8563 16.2553C26.8563 17.0287 27.487 17.6561 28.2643 17.6561C29.0417 17.6561 29.6724 17.0287 29.6724 16.2553C29.6724 15.482 29.0417 14.8546 28.2643 14.8546V14.8551ZM22.0011 16.4919C18.6734 16.4919 15.9755 19.1759 15.9755 22.4864C15.9755 25.7968 18.6734 28.4796 22.0011 28.4796C25.3287 28.4796 28.0257 25.7968 28.0257 22.4864C28.0257 19.1759 25.3285 16.4919 22.0008 16.4919H22.0011ZM22.0012 18.5954C24.1612 18.5954 25.9124 20.3374 25.9124 22.4864C25.9124 24.6351 24.1612 26.3773 22.0012 26.3773C19.8411 26.3773 18.0901 24.6351 18.0901 22.4864C18.0901 20.3374 19.8411 18.5954 22.0012 18.5954Z'
                                            fill='white'
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <iframe
                            className={stylex(styles.map)}
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.2594992571912!2d24.021710799999997!3d49.8563699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adda7d32c6515%3A0x3820be02a0d151fd!2z0L_RgNC-0YHQvy4g0JLRj9GH0LXRgdC70LDQstCwINCn0LXRgNC90L7QstC-0LvQsCwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1705767995515!5m2!1sru!2sua'
                            width='600'
                            height='450'
                            style={{ border: 0 }}
                            allowFullScreen={undefined}
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
