<script>
	export let data;

	const href = 'https://github.com/hyunbinseo/';
	const text = 'GitHub@hyunbinseo';
</script>

{#if !data.isKakaoTalk}
	<p>카카오톡 인앱 브라우저가 아닙니다.</p>
	<a {href}>{text}</a>
{:else}
	<p>카카오톡 인앱 브라우저가 맞습니다.</p>
	<a href="kakaotalk://web/openExternal?url={encodeURI(href)}">{text}</a>
{/if}
