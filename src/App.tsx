import * as stylex from '@stylexjs/stylex';
import { Header } from './Layout/Header/Header';
import { Goods } from './Layout/Goods/Goods';
import { About } from './Layout/About/About';
import { FindPair } from './Layout/FindPair/FindPair';
import { OurTeam } from './Layout/OurTeam/OurTeam';
import { Question } from './Layout/Question/Question';
import { Contacts } from './Layout/Contacts/Contacts';
import { WillContactYou } from './Layout/WillContactYou/WillContact';

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
			<Question />
			<Contacts />
			<WillContactYou />
        </div>
    );
}

export default App;
