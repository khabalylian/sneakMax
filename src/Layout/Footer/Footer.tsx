import stylex from '@stylexjs/stylex';

import { colors, containers } from '../../variables/tokens.stylex';
import { CustomMenu } from '../../helpers/CustomMenu';

const MEDIA_WIDTH_576 = '@media (max-width: 576px)';

const styles = stylex.create({
    footer: {
        backgroundColor: colors.text,
        padding: '28px 0',
        color: colors.text_main
    },
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: {
            default: 'center',
            [MEDIA_WIDTH_576]: 'flex-start'
        },
        gap: '20px'
    },
    menuList: {},
    logo: {},
    list: {
        display: 'flex',
        flexDirection: {
            default: 'row',
            [MEDIA_WIDTH_576]: 'column'
        },
        gap: {
            default: '40px',
            [MEDIA_WIDTH_576]: '20px'
        },
        flexWrap: 'wrap'
    },
    listItem: {
        margin: 0
    }
});

export const Footer = () => {
    return (
        <section className={stylex(styles.footer)}>
            <div className={stylex(styles.container)}>
                <div className={stylex(styles.content)}>
                    <h2 className={stylex(styles.logo)}>SneakMax</h2>
                    <CustomMenu list={styles.list} listItem={styles.listItem} />
                </div>
            </div>
        </section>
    );
};
