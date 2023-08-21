<script lang="ts">
	import { page } from '$app/stores';
	import type { Database } from '$lib';

	export let language: 'en' | 'kh';
	export let sections: Array<Database['public']['Tables']['section']['Row']>;
</script>

<div class="hero-section">
	<h1>
		{#if language === 'en'}
			Business Model Canvas Generator
		{:else}
			កម្មវិធីសម្រាប់បង្កើតផ្ទាំងគំរូអាជីវកម្ម​​
		{/if}
	</h1>
	<span>
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
	</span>
</div>

<div class="cards-container">
	{#if sections}
		{#each sections as item}
			{#if item.questions && item.questions.length > 0}
				<section class="section-card">
					<button>
						<h2>
							{#if language === 'en'}
								{item.title}
							{:else}
								{item.title_kh}
							{/if}
						</h2>
						<ul>
							{#if language === 'en'}
								{#each item.questions as question}
									<li>{question}</li>
								{/each}
							{/if}
							{#if language === 'kh'}
								{#if item.questions_kh && item.questions_kh.length > 0}
									{#each item.questions_kh as question}
										<li>{question}</li>
									{/each}
								{/if}
							{/if}
						</ul>
					</button>
				</section>
			{/if}
		{/each}
	{:else}
		<p>No content was retrieved from the server 🥲. Please try again later.</p>
	{/if}
</div>

<style>
	.hero-section {
		margin-bottom: 2.5rem;
	}
	.hero-section h1 {
		margin-bottom: var(--type_scale_5);
		color: var(--clr_primary);
	}
	.hero-section p {
		color: var(--clr_grey_shade_a);
	}
	.cards-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}
	@media screen and (max-width: 64em) {
		.cards-container {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media screen and (max-width: 40em) {
		.cards-container {
			grid-template-columns: 1fr;
		}
	}

	.section-card > button {
		appearance: none;
		text-transform: none;
		font: inherit;
		box-shadow: none;
		border: none;
		outline: none;
		background: none;
		cursor: pointer;
		text-align: start;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		min-height: 100%;
		width: 100%;
		padding: 1.5rem;
		border-radius: 0.75rem;
		box-shadow: 0 0.325rem 0.75rem rgba(0, 0, 0, 0.175);
		transition: outline 200ms ease-out;
		background-color: #fff;
		background-color: color-mix(in srgb, var(--clr_ivory) 50%, #fff 50%);
	}
	.section-card > button:active {
		transform: translateY(0.25rem);
	}
	.section-card > button:hover h2,
	.section-card > button:focus h2 {
		color: var(--clr_primary_shade_a);
	}
	.section-card h2 {
		font-size: calc(var(--type_scale_5) * 0.75);
		margin: 0;
		color: var(--clr_dark);
		transition: 200ms ease-out color;
	}
	.section-card ul {
		list-style-type: none;
		color: var(--clr_grey_shade_b);
	}
</style>
