import stylex from '@stylexjs/stylex';
import { ReactNode } from 'react';

interface ISlideCard {
    title: string;
    subtitle: string;
    descr?: string;
    children: ReactNode;
}

const styles = stylex.create({
    slideCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    hr: {
        width: '100%'
    },
    mrgTop: {
		marginTop: '10px'
	}
});

export const SlideCard = ({children, title, subtitle, descr}: ISlideCard) => {
    return (
        <div className={stylex(styles.slideCard)}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <hr className={stylex(styles.hr,  styles.mrgTop)} />
            <h3>{descr}</h3>
            {children}
            <hr className={stylex(styles.hr)} />
        </div>
    );
};
