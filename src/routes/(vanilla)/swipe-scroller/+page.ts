import type { PageLoad } from './$types';
import cover0 from './0.avif';
import cover1 from './1.avif';
import cover2 from './2.avif';
import cover3 from './3.avif';
import cover4 from './4.avif';
import cover5 from './5.avif';

const releases = [
	{
		name: 'Lay It On Me',
		cover: cover5,
		color: '#BC8091',
		spotify: '7GbY6kNMYLAkJzxUcUq7n3'
	},
	{
		name: 'Affectionate',
		cover: cover4,
		color: '#282331',
		spotify: '1YTj33nCCjZxaPc2RZIjE0'
	},
	{
		name: 'Yours, Truly',
		cover: cover3,
		color: '#7C6874',
		spotify: '4eB2YfdivTrZjzSeQ4NB23'
	},
	{
		name: 'Candid',
		cover: cover2,
		color: '#9E8059',
		spotify: '27JqYhGZhbw4R64Ce7v1tg'
	},
	{
		name: 'Your Eyes',
		cover: cover1,
		color: '#717888',
		spotify: '1mTBvp0QIKjOD9KnxcFEDD'
	},
	{
		name: 'Synthetic Heart',
		cover: cover0,
		color: '#859FB0',
		spotify: '1uD8IR3fuDcIPWgvA1KS7c'
	}
];

export const load = (() => ({
	meta: {
		title: 'Swipe Scroller for Svelte',
		description: 'Horizontal card slider for the modern web. Requires minimum JavaScript.'
	},
	releases
})) satisfies PageLoad;
