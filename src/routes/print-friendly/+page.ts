import { dev } from '$app/environment';
import type { PageLoad } from './$types';

export const csr = !!dev;

export const load = (() => ({
	meta: {
		title: 'Print Friendly',
		description: 'Responsive CSS for screen and paper. Optimized for printing and PDF conversion.'
	}
})) satisfies PageLoad;
