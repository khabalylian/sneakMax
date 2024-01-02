import stylex from '@stylexjs/stylex';
import Slider from '@mui/material/Slider';
import { MouseEvent, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../../variables/tokens.stylex';
import { Checkbox } from '../../../helpers/Checkbox';
import { CustomButton } from '../../../helpers/CustomButton';

interface ISize {
    numberSize: number;
    inStock: boolean;
}

const SIZE: ISize[] = [
    { numberSize: 35, inStock: true },
    { numberSize: 36, inStock: false },
    { numberSize: 37, inStock: true },
    { numberSize: 38, inStock: true },
    { numberSize: 39, inStock: true },
    { numberSize: 40, inStock: true },
    { numberSize: 41, inStock: true },
    { numberSize: 42, inStock: true },
    { numberSize: 43, inStock: true }
];

const styles = stylex.create({
    selection: {
        display: 'flex',
        flexDirection: 'column',
		alignItems: 'center',
        maxWidth: '280px',
        color: colors.text
    },
    title: {
        color: colors.text,
        marginTop: '60px'
    },
    price: {
        marginTop: '20px'
    },
    priceTitle: {},
    priceView: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        color: colors.text,
        border: `1px solid ${colors.small_text}`,
        borderRadius: '4px',
        padding: '17px 40px'
    },
    partition: {
        display: 'inline-block',
        width: '2px',
        height: '34px',
        backgroundColor: colors.small_text
    },
    priceNumber: {
        width: '50px'
    },
    gender: {
		width: '240px',
        marginTop: '20px'
    },
    genderWrapper: {
        display: 'flex',
        gap: '40px',
        marginTop: '10px'
    },
    size: {
        marginTop: '20px'
    },
    table: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '240px',
        marginTop: '10px'
    },
    tableBox: {
        width: '80px',
        cursor: 'pointer',
        textAlign: 'center',
        padding: '20px 0'
    },
    tableHidden: {
        color: colors.small_text,
        border: `2px solid ${colors.small_text}`
    },
    tableVisited: {
        border: `2px solid ${colors.line}`
    },
    tableActive: {
        border: `2px solid ${colors.btn_main}`
    },
    groupBtn: {
        width: '240px',
        marginTop: '20px'
    },
    btn: {
        width: '100%',
        border: 'none'
    }
});

export const SelectionPrice = () => {
    const [value, setValue] = useState<number[]>([20, 10000]);
    const [sizeActive, setSizeActive] = useState<number[]>([]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const getTabSizeDataAtributte = (
        e: MouseEvent<HTMLDivElement>,
        item: ISize
    ) => {
        const targetElement = e.currentTarget;

        if (targetElement && targetElement.hasAttribute('data-size')) {
            const dataValue = Number(targetElement.getAttribute('data-size'));

            if (!item.inStock) return;

            if (sizeActive.includes(dataValue)) {
                const newSizeArray = sizeActive.filter(
                    item => item !== dataValue
                );
                setSizeActive(newSizeArray);
                return;
            }

            if (dataValue) {
                setSizeActive([...sizeActive, dataValue]);
            }
        }
    };

    const renderSizeTabs = (data: ISize[]) => {
        return data.map(item => {
            return (
                <div
                    key={item.numberSize}
                    className={stylex(
                        styles.tableBox,
                        item.inStock ? styles.tableVisited : styles.tableHidden,
                        sizeActive.includes(item.numberSize)
                            ? styles.tableActive
                            : null
                    )}
                    data-size={item.numberSize}
                    onClick={e => getTabSizeDataAtributte(e, item)}
                >
                    {item.numberSize}
                </div>
            );
        });
    };

    return (
        <div className={stylex(styles.selection)}>
            <h3 className={stylex(styles.title)}>Подбор по параметрам</h3>
            <div className={stylex(styles.price)}>
                <p className={stylex(styles.priceTitle)}>Цена, руб</p>
                <Box width={240} marginTop={1}>
                    <div className={stylex(styles.priceView)}>
                        <p className={stylex(styles.priceNumber)}>{value[0]}</p>
                        <span className={stylex(styles.partition)}></span>
                        <p className={stylex(styles.priceNumber)}>{value[1]}</p>
                        <Slider
                            style={{
                                color: colors.text,
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                padding: 0
                            }}
                            min={0}
                            max={50000}
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                </Box>
            </div>
            <div className={stylex(styles.gender)}>
                <p>Пол</p>
                <div className={stylex(styles.genderWrapper)}>
                    <Checkbox name='man' text='Мужской' />
                    <Checkbox name='woman' text='Женский' />
                </div>
            </div>
            <div className={stylex(styles.size)}>
                <p>Размер</p>
                <div className={stylex(styles.table)}>
                    {useMemo(() => renderSizeTabs(SIZE), [sizeActive])}
                </div>
            </div>
            <div className={stylex(styles.groupBtn)}>
                <CustomButton
                    backgroundColor='gray'
                    className={styles.btn}
                >
                    Применить
                </CustomButton>
                <CustomButton
                    backgroundColor='white'
                    className={styles.btn}
                >
                    сбросить
                </CustomButton>
            </div>
        </div>
    );
};
