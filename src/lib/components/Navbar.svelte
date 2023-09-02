<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { themeStore } from '../../stores';
	import SunLine from '$lib/icons/sun-line.svelte';
	import MoonLine from '$lib/icons/moon-line.svelte';
	import LoopRightLine from '$lib/icons/loop-right-line.svelte';

	let language: string;
	let theme: string;
	let resetAnswers: VoidFunction;

	themeStore.subscribe((value) => {
		theme = value;
	});

	function toggleTheme() {
		themeStore.update((theme) => (theme === 'light' ? 'dark' : 'light'));
	}

	$: language = $page.url.pathname.startsWith('/kh') ? 'kh' : 'en';

	onMount(() => {
		resetAnswers = () => {
			// console.log('before reset', $sectionsStore);

			if (window.confirm(`${language === 'kh' ? "លុបចម្លើយទាំងអស់?" : "Reset all of your answers?"}`)) {
				localStorage.setItem('user_answers', '');

				window.location.reload();
			}
		};
	});
</script>

<header>
	<nav>
		{#if language === 'kh'}
			<a href="/">English</a>
		{:else}
			<a href="/kh" lang="km">ភាសាខ្មែរ</a>
		{/if}
	</nav>
	<div class="controls">
		<button
			on:click={toggleTheme}
			class="btn-toggle-theme"
			aria-label="Toggle theme"
			title={language === 'kh' ? 'បិទ/បើកភ្លើង' : 'Toggle theme'}
		>
			{#if theme === 'dark'}
				<SunLine />
			{:else}
				<MoonLine />
			{/if}
		</button>
		<button
			on:click={resetAnswers}
			aria-label="Reset answers"
			title={language === 'kh' ? 'ឆ្លើយម្តងទៀត' : 'Reset answers'}
		>
			<LoopRightLine />
		</button>
	</div>
</header>

<style>
	header {
		max-width: var(--content_max_width);
		padding: 1rem var(--content_padding_horizontal);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header nav a {
		font-size: var(--type_scale_2);
	}
	header .controls {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	header .controls button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		cursor: pointer;

		background: none;
		border: 1px solid var(--clr_grey_shade_a);
		border-radius: 100vmax;
		transition: transform 50ms ease-out;
	}
	[data-theme='dark'] header .controls button {
		filter: invert(1);
	}
	header .controls button:active {
		transform: translateY(0.125rem);
	}
	header .controls button:not(:last-of-type) {
		margin-right: 0.5rem;
	}
</style>
