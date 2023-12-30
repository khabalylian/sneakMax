import stylex from '@stylexjs/stylex';
import { colors } from '../variables/tokens.stylex';
import { useState } from 'react';

interface ICheckbox {
    name: string;
	text: string;
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

export const Checkbox = ({ name, text }: ICheckbox) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={stylex(styles.wrapper)}>
            <input
                className={stylex(styles.checkbox)}
                type='checkbox'
                checked={isChecked}
                name={name}
                id={name}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    );
};
