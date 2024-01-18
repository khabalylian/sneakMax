import * as stylex from '@stylexjs/stylex';
import { Header } from './Layout/Header/Header';
import { Goods } from './Layout/Goods/Goods';
import { About } from './Layout/About/About';
import { FindPair } from './Layout/FindPair/FindPair';
import { OurTeam } from './Layout/OurTeam/OurTeam';

const styles = stylex.create({
    wrapper: {
        fontFamily: 'Oswald, sans-serif'
    }
});

function App() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <Header />
            <Goods />
            <About />
			<FindPair />
			<OurTeam />
        </div>
    );
}

export default App;
