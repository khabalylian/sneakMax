import stylex from '@stylexjs/stylex';
import { colors } from '../variables/tokens.stylex';
import { ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

interface ICheckbox
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    name: string;
    text: string;
	gender: string[];
}

const styles = stylex.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		gap: '10px'
	},
    checkbox: {
        width: '24px',
        height: '24px',
        border: `1px solid ${colors.line}`,
        borderRadius: '4px',
		margin: 0,
        cursor: 'pointer',
        ':checked': {
            backgroundImage:
                'url("src/helpers/Group.svg")' /* вказати шлях до SVG файлу */,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }
    }
});

export const Checkbox = ({
    name,
    text,
	gender,
    ...props
}: ICheckbox) => {
    return (
        <div className={stylex(styles.wrapper)} {...props}>
            <input
                className={stylex(styles.checkbox)}
                type='checkbox'
                checked={gender.includes(name)}
                name={name}
                id={name}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    );
};
