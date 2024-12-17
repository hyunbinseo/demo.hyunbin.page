<script lang="ts">
	import { page } from '$app/state';
	import { controlDialogWithUrlHash } from 'hash-dialog-modal';
	import type { Action } from 'svelte/action';

	const controlWithHash: Action<HTMLDialogElement> = (dialog) => {
		const { removeEventListeners } = controlDialogWithUrlHash(dialog, 'auto');
		return { destroy: removeEventListeners };
	};
</script>

<main>
	<div>
		<span>
			<a href="https://github.com/hyunbinseo/hash-dialog-modal#readme" target="_blank">GitHub</a>
			<a href="https://www.npmjs.com/package/hash-dialog-modal" target="_blank">npm</a>
		</span>
		<h1>hash-dialog-modal</h1>
		<p>
			<span>Open the modal with anchors:</span>
			<a href="#1" data-sveltekit-reload>#1</a>
			<a href="#2" data-sveltekit-reload>#2</a>
		</p>
	</div>
</main>

<dialog use:controlWithHash>
	<form method="dialog">
		<h1>This is a Modal</h1>
		<ul>
			<li>Current hash value is {page.url.hash}</li>
			<li><button>Close</button> or press the Esc key.</li>
		</ul>
	</form>
</dialog>

<style>
	main {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	dialog {
		padding: 1rem;
		padding-right: 2.5rem;
	}

	dialog ul {
		list-style-position: inside;
	}
</style>
