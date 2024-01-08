import stylex from '@stylexjs/stylex';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';


interface IModalBackground
    extends 
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLDivElement>,
            HTMLDivElement
        >{
}

const styles = stylex.create({
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '100vw',
        height: '100vh',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        opacity: 0.35,
        zIndex: 500
    },
})

export const ModalBackground = ({ ...props }: IModalBackground) => {
    return <div {...props} className={stylex(styles.modal)}></div>;
};