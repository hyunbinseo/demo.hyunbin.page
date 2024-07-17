<script>
	import { page } from '$app/stores';

	const siteName = 'OSS @hyunbinseo';
</script>

<svelte:head>
	{#if $page.data.meta}
		{@const { title, description } = $page.data.meta}
		<title>{title} / {siteName}</title>
		<meta name="description" content={description} />
		<meta property="og:title" content="[Demo] {title}" />
		<meta property="og:site_name" content={siteName} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />
	{/if}
</svelte:head>

<slot></slot>
