import stylex from '@stylexjs/stylex';
import { colors } from '../variables/tokens.stylex';
import { ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps} from 'react';

interface ICheckbox
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    name: string;
    text: string;
    handler: (e: ChangeEvent<HTMLInputElement>,  type: string) => void;
    gender?: string[];
	types?: string;
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
                'url("src/helpers/Checked.svg")' /* вказати шлях до SVG файлу */,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }
    }
});

export const Checkbox = ({
    name,
    text,
	handler,
	types
}: ICheckbox) => {

    return (
        <div className={stylex(styles.wrapper)}>
            <input
                className={stylex(styles.checkbox)}
                type='checkbox'
                name={name}
                id={name}
                onChange={e => {
					if(types) handler(e, types)
				}}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    );
};
