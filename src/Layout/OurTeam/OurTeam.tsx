import stylex from '@stylexjs/stylex';

import { colors, containers } from '../../variables/tokens.stylex';

const MEDIA_WIDTH_480 = '@media (max-width: 480px)';

import people1 from './img/people1.jpg';
import people2 from './img/people2.jpg'; 
import people3 from './img/people3.jpg'; 
import people4 from './img/people4.jpg'; 
import people5 from './img/people5.jpg'; 
import people6 from './img/people6.jpg';  

interface IOurTeam {
    img: string;
    name: string;
    profession: string;
}

const OURTEAM: IOurTeam[] = [
    {
        img: people1,
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: people2,
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: people3,
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: people4,
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: people5,
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    },
    {
        img: people6,
        name: 'Максим Золотарев',
        profession: 'Адміністратор'
    }
];

const styles = stylex.create({
    ourTeam: {
        position: 'relative',
        backgroundColor: colors.bg_purple,
        color: colors.text_main,
        padding: '100px 0 60px 0',
        zIndex: 2,
        '::after': {
            content: '',
            position: 'absolute',
            background: 'url("/image/bg.svg") no-repeat',
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

const OurTeam = () => {
    return (
        <section id='team' className={stylex(styles.ourTeam)}>
            <div className={stylex(styles.container)}>
                <h2>Наша команда</h2>
                <div className={stylex(styles.content)}>
                    {OURTEAM.map((person, index) => (
                        <div key={index} className={stylex(styles.box)}>
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

export default OurTeam;