import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load = () => {
	redirect(302, 'https://hyunbin.cc/browser-image-support');
};
