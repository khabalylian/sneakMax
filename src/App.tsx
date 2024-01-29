import * as stylex from '@stylexjs/stylex';
import { Footer } from './Layout/Footer/Footer';
import { Suspense, lazy } from 'react';

const styles = stylex.create({
    wrapper: {
        fontFamily: 'Oswald, sans-serif'
    }
});

const Header = lazy(() => import('./Layout/Header/Header'));
const Goods = lazy(() => import('./Layout/Goods/Goods'));
const FindPair = lazy(() => import('./Layout/FindPair/FindPair'));
const OurTeam = lazy(() => import('./Layout/OurTeam/OurTeam'));
const Contacts = lazy(() => import('./Layout/Contacts/Contacts'));
const WillContactYou = lazy(
    () => import('./Layout/WillContactYou/WillContact')
);
const About = lazy(() => import('./Layout/About/About'));
const Question = lazy(() => import('./Layout/Question/Question'));

function App() {
    return (
        <div {...stylex.props(styles.wrapper)}>
            <Suspense>
                <Header />
                <Goods />
                <About />
                <FindPair />
                <OurTeam />
                <Question />
                <Contacts />
                <WillContactYou />
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
