import type { PageLoad } from './$types';

export const load = (() => ({ meta: { noindex: true } })) satisfies PageLoad;
