<script>
	import { page } from '$app/stores';
	import { themeStore } from '../../stores';
	import SunLine from '$lib/icons/sun-line.svelte';
	import MoonLine from '$lib/icons/moon-line.svelte';

	let theme;

	themeStore.subscribe((value) => {
		theme = value;
	});

	function toggleTheme() {
		themeStore.update((theme) => (theme === "light" ? "dark" : "light"))
	}
</script>

<header>
	<nav>
		{#if $page.url.pathname === '/'}
			<a href="/kh" lang="km">ភាសាខ្មែរ</a>
		{:else}
			<a href="/">English</a>
		{/if}
	</nav>
	<button on:click={toggleTheme} class="btn-toggle-theme" aria-label="Toggle theme">
		{#if theme === 'dark'}
			<SunLine />
		{:else}
			<MoonLine />
		{/if}
	</button>
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
	header .btn-toggle-theme {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: .5rem;
		cursor: pointer;
		
		background: none;
		border: none;
		border-radius: 100vmax;
	}
	[data-theme="dark"] header .btn-toggle-theme {
		filter: invert(1);
	}

</style>
