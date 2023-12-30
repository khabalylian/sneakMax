import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../variables/tokens.stylex';


interface IButton
    extends Omit<DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >, 'className'> {
    backgroundColor: 'red' | 'gray' | 'white';
    children: ReactNode;
	className?: stylex.StyleXStyles;
}

const styles = stylex.create({
    btn: {
        color: colors.text_main,
        border: 'none',
        borderRadius: '5px',
        padding: '22px 47px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    },
    red: {
        backgroundColor: colors.btn_main,
        ':hover': {
            backgroundColor: colors.btn_main_hover
        }
    },
    gray: {
        backgroundColor: colors.small_text,
        ':hover': {
            backgroundColor: colors.btn_gray_hover
        }
    },
    white: {
        color: colors.text,
        backgroundColor: colors.text_main,
        border: `1px solid ${colors.text}`,
        ':hover': {
            backgroundColor: colors.text
        }
    }
});

export const CustomButton = ({
    children,
    backgroundColor,
    className,
    ...props
}: IButton) => {
    return (
        <button
            {...stylex.props(
                styles.btn,
                backgroundColor === 'red'
                    ? styles.red
                    : backgroundColor === 'gray'
                    ? styles.gray
                    : styles.white,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
