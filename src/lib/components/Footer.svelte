<script lang="ts">
	import { page } from "$app/stores"
	let language: 'kh' | 'en'
	$: language = $page.url.pathname.startsWith('/kh') ? 'kh' : 'en';
</script>
<footer>
	<p class="version">Version: beta 1.2</p>
	<a href="https://www.buymeacoffee.com/masayashida">Buy me a coffee ☕</a>
	<br>
	<a href="https://masayashida.com">masayashida.com</a>
</footer>

<style>
	footer {
		max-width: var(--content_max_width);
		padding: var(--content_padding_horizontal);
		margin: 2.5rem auto 5rem auto;
		flex: 1;
	}
	footer .version {
		margin: 0;
		color: var(--clr_grey_shade_b);
	}
	[data-theme="dark"] footer .version {
		color: var(--clr_grey_shade_d);
	}
	footer a {
		text-decoration: none;
	}
</style>
