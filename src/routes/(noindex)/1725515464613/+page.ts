import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (() => ({
	meta: { title: '카카오톡 인앱 브라우저에서 기본 브라우저 열기' },
	isKakaoTalk: !browser ? undefined : window.navigator.userAgent.includes('KAKAOTALK')
})) satisfies PageLoad;
