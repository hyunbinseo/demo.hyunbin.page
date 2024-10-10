import type { PageLoad } from './$types';

export const prerender = true;
export const csr = false;

export const load = (() => ({
	meta: { title: 'AVIF 이미지 지원 여부 확인', noindex: true }
})) satisfies PageLoad;
