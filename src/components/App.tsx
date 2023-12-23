import { f7ready, App, View } from 'framework7-react';

import routes from '../routes';
import store from '../store';

const MyApp = () => {
	const f7params = {
		name: 'Blank Typescript',
		theme: 'auto',
		store: store,
		routes: routes,
	};

	f7ready(() => {});

	return (
		<App {...f7params}>
			<View main className="safe-areas" url="/" />
		</App>
	);
};
export default MyApp;
