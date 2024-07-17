import type { PageLoad } from './$types';

export const load = (() => ({
	meta: {
		title: 'Hash Dialog Modal',
		description:
			'Open and close <dialog> modals based on the URL hash value. A vanilla JavaScript library for all browsers and frameworks.'
	}
})) satisfies PageLoad;
