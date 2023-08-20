<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		{#if $page.url.pathname === '/'}
			<a href="/kh" lang="km">ភាសាខ្មែរ</a>
		{:else}
			<a href="/">English</a>
		{/if}
	</nav>
</header>

<style>
    header {
        max-width: var(--content_max_width);
        padding: 1rem var(--content_padding_horizontal);
        margin: 0 auto;
    }
</style>