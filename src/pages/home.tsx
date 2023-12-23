import { Page, Navbar, NavTitle, NavTitleLarge, Link, Toolbar, Block } from 'framework7-react';

const HomePage = () => (
	<Page name="home">
		<Navbar large>
			<NavTitle>Blank Typescript</NavTitle>
			<NavTitleLarge>Blank Typescript</NavTitleLarge>
		</Navbar>
		<Toolbar bottom>
			<Link>Left Link</Link>
			<Link>Right Link</Link>
		</Toolbar>
		<Block>
			<p>Here is your blank Framework7 app. Let's see what we have here.</p>
		</Block>
	</Page>
);
export default HomePage;
