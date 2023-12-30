import * as stylex from '@stylexjs/stylex';
import { Header } from './Layout/Header/Header';
import { Goods } from './Layout/Goods/Goods';

const styles = stylex.create({
    wrapper: {
        fontFamily: 'Oswald, sans-serif',
    },
});

function App() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <Header />
            <Goods />
        </div>
    );
}

export default App;
