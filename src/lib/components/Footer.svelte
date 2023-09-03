<script lang="ts">
	import { page } from '$app/stores';
	let language: 'kh' | 'en';
	$: language = $page.url.pathname.startsWith('/kh') ? 'kh' : 'en';
</script>

<footer>
	<p class="version">v1.2</p>
	<a href="https://pay.ababank.com/D74W8L1gacwSiE2JA">KHQR</a>
	<span style="font-weight: 600; opacity: 0.5;">&nbsp;·&nbsp;</span>
	<a href="https://www.buymeacoffee.com/masayashida">
		{#if language === 'kh'}
			ប៉ាវកាហ្វេមួយកែវ ☕
		{:else}
			Buy me a coffee ☕
		{/if}
	</a>
	<br />
	<a href="https://masayashida.com">masayashida.com</a>
</footer>

<style>
	footer {
		max-width: var(--content_max_width);
		padding: var(--content_padding_horizontal);
		margin: 2.5rem auto 10dvh auto;
		flex: 1;
	}
	footer .version {
		margin: 0;
		color: var(--clr_grey_shade_b);
		font-size: 0.875rem;
	}
	[data-theme='dark'] footer .version {
		color: var(--clr_grey_shade_c);
	}
	footer a {
		text-decoration: none;
	}
</style>
