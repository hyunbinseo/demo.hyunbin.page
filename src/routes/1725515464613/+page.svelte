<script>
	import { page } from '$app/stores';
	import { PUBLIC_REPO_URL } from '$env/static/public';

	export let data;

	const href = 'https://github.com/hyunbinseo';
</script>

{#if !data.isKakaoTalk}
	<p>카카오톡 인앱 브라우저가 아닙니다.</p>
	<a {href}>현재 브라우저에서 열기</a>
{:else}
	<p>카카오톡 인앱 브라우저가 맞습니다.</p>
	<a href="kakaotalk://web/openExternal?url={encodeURIComponent(href)}">기본 브라우저에서 열기</a>
{/if}

<a target="_blank" href="{PUBLIC_REPO_URL}/blob/main/src/routes{$page.route.id}/+page.svelte">
	소스코드
</a>
