import stylex from '@stylexjs/stylex';
import { containers } from '../../variables/tokens.stylex';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = stylex.create({
    question: {},
    container: {
        maxWidth: containers.width,
        margin: containers.margin,
        padding: containers.padding
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '60px 0 60px 0'
    },
    accordion: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export const Question = () => {
    return (
        <section id='delivery' className={stylex(styles.question)}>
            <div className={stylex(styles.container)}>
                <div className={stylex(styles.content)}>
                    <h3>Поширені запитання</h3>
                    <div className={stylex(styles.accordion)}>
                        <Accordion>
                            <AccordionSummary
                                style={{ fontSize: '20px', fontWeight: 400 }}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls='panel1-content'
                                id='panel1-header'
                            >
                                Запитання 1
                            </AccordionSummary>
                            <AccordionDetails>
                                А це відповідь 1: у комплексі функціонують 6
                                дитячих садків з майданчиками, вихователями та
                                всякими іншими людьми
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                style={{ fontSize: '20px', fontWeight: 400 }}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls='panel2-content'
                                id='panel2-header'
                            >
                                Запитання 2
                            </AccordionSummary>
                            <AccordionDetails>
                                А це відповідь 2: у комплексі функціонують 6
                                дитячих садків з майданчиками, вихователями та
                                всякими іншими людьм
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};
