import type { StaticStyles } from '@stylexjs/stylex';
import { stylex } from '@stylexjs/stylex';

const NAME_LIST_ITEM_MENU = [
    { name: 'Каталог', scrollName: 'catalog' },
    { name: 'Про нас', scrollName: 'about' },
    { name: 'Підбір товара', scrollName: 'goods' },
    { name: 'Наша команда', scrollName: 'team' },
    { name: 'Доставка і оплата', scrollName: 'delivery' },
    { name: 'Контакти', scrollName: 'contacts' },
    { name: 'Є запитання?', scrollName: 'question' }
];

interface ICustomMenu {
    handlerBurger?: () => void;
    menuList?: StaticStyles;
    list?: StaticStyles;
    listItem?: StaticStyles;
}

export const CustomMenu = ({
    handlerBurger,
    menuList,
    list,
    listItem
}: ICustomMenu) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId) as HTMLDivElement;
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={stylex(menuList)}>
            <ul className={stylex(list)}>
                {NAME_LIST_ITEM_MENU.map(listItems => (
                    <li
                        key={listItems.scrollName}
                        className={stylex(listItem)}
                        onClick={() => {
                            scrollToSection(listItems.scrollName);
                            if (handlerBurger) handlerBurger();
                        }}
                    >
                        {listItems.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
