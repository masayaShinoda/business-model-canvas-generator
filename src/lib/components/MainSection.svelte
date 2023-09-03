<script lang="ts">
	import { sectionsStore, type SectionsWithAnswersType } from '../../stores';
	import StepsProgress from '$lib/components/StepsProgress.svelte';
	import SectionCard from '$lib/components/SectionCard.svelte';
	import ResultButton from '$lib/components/ResultButton.svelte';

	export let language: 'en' | 'kh';
	let sections: SectionsWithAnswersType;
	$: sections = $sectionsStore
</script>

<div class="hero-section">
	<span class="hero-section__top">
		<h1>
			{#if language === 'kh'}
				កម្មវិធីបង្កើតផ្ទាំងគំរូអាជីវកម្ម​​
			{:else}
				Business Model Canvas Generator
			{/if}
		</h1>
	</span>
	<span>
		{#if language === 'kh'}
			<p>
				ផ្ទាំងគំរូអាជីវកម្មគឺជាគំរូគ្រប់គ្រងយុទ្ធសាស្ត្រដែលប្រើដើម្បីពិពណ៌នា បង្កើត
				និងជំរុញគំរូអាជីវកម្ម។ <a href="https://kiripost.com/stories/cambodia-using-the-business-model-canvas-for-business-plan"
					>ស្វែងយល់បន្ថែម</a
				> (អត្ថបទជាភាសាអង់គ្លេស)។
			</p>
			<p>
				អ្នកមិនចាំបាច់ឆ្លើយសំណួរទាំងអស់នោះទេដើម្បីបង្កើតផ្ទាំងគំរូអាជីវកម្ម។
			</p>
		{:else}
			<p>
				The Business Model Canvas is a strategic management template used to describe, design,
				challenge, invent, and pivot a business model. <a
					href="https://kiripost.com/stories/cambodia-using-the-business-model-canvas-for-business-plan">Learn more about the BMC.</a
				>
			</p>
			<p>
				Tip: You don't have to answer ALL the questions to be able to create a canvas!
			</p>
		{/if}
	</span>
</div>

<div class="progress-container">
	<StepsProgress {language} />
</div>

<div class="cards-container">
	{#if sections}
		{#each sections as item}
			{#if item.questions && item.questions.length > 0}
				<SectionCard {language} item_id={item.id} />
			{/if}
		{/each}
	{:else}
		<p>No content was retrieved from the server 🥲. Please try again later.</p>
	{/if}
</div>

<ResultButton {language} />
<!-- <p>{JSON.stringify($sectionsStore)}</p> -->

<style>
	.hero-section {
		margin-bottom: 2.5rem;
	}
	.hero-section__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: var(--type_scale_5);
	}
	.hero-section h1 {
		color: var(--clr_primary);
	}
	[data-theme="dark"] .hero-section h1 {
		color: var(--clr_secondary_shade_a);
	}
	.hero-section p {
		color: var(--clr_grey_shade_a);
	}
	[data-theme="dark"] .hero-section p {
		color: var(--clr_grey_shade_e);
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
</style>
