import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home';
import Content from './pages/content';
import NotFound from './components/NotFound';

function App() {
    return (
        <>
            <HelmetProvider>
                <Router>

                    <header style={{
                        marginBottom: '3rem'
                    }}>
                        <nav>
                            <ul className="list">
                                <li className="list-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/content/privacy.html">/content/privacy.html</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/404">Regular 404</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <main style={{
                        margin: '1rem 2rem'
                    }}>
                        <Switch>
                            <Route path="/content/:contentPath" exact component={Content} />
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    </main>

                </Router>
            </HelmetProvider>
        </>
    );
}

export default App;
