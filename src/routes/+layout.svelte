<script>
	import { page } from '$app/stores';

	const siteName = 'OSS @hyunbinseo';
</script>

<svelte:head>
	{#if $page.data.meta}
		{@const meta = $page.data.meta}
		{#if !meta.noindex}
			<title>{meta.title} / {siteName}</title>
			<meta property="og:title" content="[Demo] {meta.title}" />
			<meta name="description" content={meta.description} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:type" content="website" />
		{:else}
			<title>{meta.title || siteName}</title>
			<meta name="robots" content="noindex" />
		{/if}
	{/if}
</svelte:head>

<slot></slot>
