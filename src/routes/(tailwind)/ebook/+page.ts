import type { PageLoad } from './$types';

export const load = (() => ({
	meta: { title: '전자책처럼 가로로 넘기는 웹페이지', noindex: true }
})) satisfies PageLoad;
