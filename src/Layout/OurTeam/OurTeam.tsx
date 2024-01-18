import stylex from '@stylexjs/stylex';
import { colors, containers } from '../../variables/tokens.stylex';

const MEDIA_WIDTH_480 = '@media (max-width: 480px)';
// const MEDIA_WIDTH_576 = '@media (max-width: 576px)';
// const MEDIA_WIDTH_768 = '@media (max-width: 768px)';

interface IOurTeam {
    img: string;
    name: string;
    profession: string;
}

const OURTEAM: IOurTeam[] = [
    {
        img: 'src/Layout/OurTeam/img/people1.jpg',
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: 'src/Layout/OurTeam/img/people2.jpg',
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: 'src/Layout/OurTeam/img/people3.jpg',
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: 'src/Layout/OurTeam/img/people4.jpg',
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: 'src/Layout/OurTeam/img/people5.jpg',
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: 'src/Layout/OurTeam/img/people6.jpg',
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    }
];

const styles = stylex.create({
    ourTeam: {
        position: 'relative',
        backgroundColor: colors.bg_purple,
        color: colors.text_main,
        padding: '120px 0 60px 0',
        zIndex: 2,
        '::after': {
            content: '',
            position: 'absolute',
            background: 'url("src/Layout/OurTeam/img/bg.svg") no-repeat',
            backgroundSize: 'contain',
            width: '541px',
            height: '550px',
            top: 0,
            right: 0,
            zIndex: -1
        }
    },
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '40px'
    },
    box: {
        dosplay: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    img: {
        width: {
            default: 'auto',
            [MEDIA_WIDTH_480]: '280px'
        },
        height: {
            default: 'auto',
            [MEDIA_WIDTH_480]: '300px'
        },
        borderRadius: '5px'
    }
});

export const OurTeam = () => {
    return (
        <section className={stylex(styles.ourTeam)}>
            <div className={stylex(styles.container)}>
                <h2>Наша команда</h2>
                <div className={stylex(styles.content)}>
                    {OURTEAM.map(person => (
                        <div className={stylex(styles.box)}>
                            <img
                                className={stylex(styles.img)}
                                src={person.img}
                                alt={person.img}
                            />
                            <h3>{person.name}</h3>
                            <p>{person.profession}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
