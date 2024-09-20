<script>
	import { page } from '$app/stores';

	const siteName = 'OSS @hyunbinseo';
</script>

<svelte:head>
	{#if $page.data.meta.noindex !== true}
		<title>{$page.data.meta.title} / {siteName}</title>
		<meta property="og:title" content="[Demo] {$page.data.meta.title}" />
		<meta name="description" content={$page.data.meta.description} />
		<meta property="og:description" content={$page.data.meta.description} />
		<meta property="og:site_name" content={siteName} />
		<meta property="og:type" content="website" />
	{:else}
		<title>{$page.data.meta.title || siteName}</title>
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<slot></slot>
