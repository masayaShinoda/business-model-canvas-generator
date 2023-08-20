<script>
	import { page } from '$app/stores';
</script>

<footer>
	{#if $page.url.pathname === '/kh'}
		<p>
			ផ្ទាំងគំរូអាជីវកម្មគឺជាគំរូគ្រប់គ្រងយុទ្ធសាស្ត្រដែលប្រើដើម្បីពិពណ៌នា បង្កើត
			និងជំរុញគំរូអាជីវកម្ម។ <a href="https://en.wikipedia.org/wiki/Business_Model_Canvas"
				>ស្វែងយល់បន្ថែម</a
			> (អត្ថបទជាភាសាអង់គ្លេស)។
		</p>
	{:else}
		<p>
			The Business Model Canvas is a strategic management template used to describe, design,
			challenge, invent, and pivot a business model. <a
				href="https://en.wikipedia.org/wiki/Business_Model_Canvas">Learn more about the BMC.</a
			>
		</p>
	{/if}
</footer>

<style>
	footer {
		color: var(--clr_grey_shade_b);
		max-width: var(--content_max_width);
		padding: var(--content_padding_horizontal);
		margin: 2.5rem auto 0 auto;
	}
</style>
