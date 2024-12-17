<script>
	import { page } from '$app/state';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import './normalize.css';

	const { children } = $props();
</script>

<svelte:head>
	<!-- PageData values can be undefined despite being typed. -->
	<!-- Blocked by https://github.com/sveltejs/kit/issues/11018 -->
	{#if page.data.meta}
		{@const { title, description } = page.data.meta}
		<title>{title} - {PUBLIC_SITE_NAME}</title>
		<meta property="og:title" content={title} />
		{#if description}
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
		{/if}
		<meta property="og:site_name" content={PUBLIC_SITE_NAME} />
		<meta property="og:type" content="website" />
	{/if}
</svelte:head>

{@render children()}
