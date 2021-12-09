// Begin start projects
import { Router } from 'preact-router';
// Header
import Header from './header';
// Footer
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => (
		<div itemprop="mainContentOfPage" itemscope="itemscope" itemtype="https://schema.org/WebPageElement">
			<div id="page" className="site">
				<Header />
				<main id="content" class="site-content">
					<Router>
						<Home path="/" />
					</Router>
				</main>
				<Footer />
			</div>
		</div>
)

export default App;
