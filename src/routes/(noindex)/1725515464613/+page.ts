import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load = () => {
	redirect(302, 'https://hyunbin.cc/kakao-talk-in-app-browser');
};
