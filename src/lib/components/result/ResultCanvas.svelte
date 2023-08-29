<script lang="ts">
	import { onMount } from 'svelte';
	import type { SectionsWithAnswersType } from '../../../stores';
	import { page } from '$app/stores';

	// icons import
	import LinksLine from '$lib/icons/links-line.svelte';
	import PulseLine from '$lib/icons/pulse-line.svelte';
	import FactoryLine from '$lib/icons/factory-line.svelte';
	import GiftLine from '$lib/icons/gift-line.svelte';
	import ChatHeartLine from '$lib/icons/chat-heart-line.svelte';
	import TruckLine from '$lib/icons/truck-line.svelte';
	import TeamLine from '$lib/icons/team-line.svelte';
	import PriceTagLine from '$lib/icons/price-tag-line.svelte';
	import MoneyDollarCircle from '$lib/icons/money-dollar-circle.svelte';

	export let sections: SectionsWithAnswersType;
	let language: string | null;

	onMount(() => {
		language = $page.url.searchParams.get('lang');
	});

	const icons = [
		LinksLine,
		PulseLine,
		FactoryLine,
		GiftLine,
		ChatHeartLine,
		TruckLine,
		TeamLine,
		PriceTagLine,
		MoneyDollarCircle
	];
</script>

<div lang={language === 'kh' ? 'km' : 'en'} id="results-container" class="results-container">
	<div id="results" class="results">
		{#each sections as section, i}
			<div id={`section-${section.id.toString()}`} class="section">
				<span class="section-title">
					<h2>
						{#if language === 'kh'}
							{section.title_kh}
						{:else}
							{section.title}
						{/if}
					</h2>
					<svelte:component this={icons[i]} />
				</span>
				<ul>
					{#if language === 'kh'}
						{#if section.questions_kh && section.answers_kh}
							{#each section.questions_kh as question, index}
								<li>
									<span class="question">
										{question}
									</span>
									{#if section.answers_kh[index] && section.answers_kh[index].length > 0}
										<span class="answer">
											{section.answers_kh[index]}
										</span>
									{/if}
								</li>
							{/each}
						{/if}
					{:else if section.questions && section.answers}
						{#each section.questions as question, index}
							<li>
								<span class="question">
									{question}
								</span>
								{#if section.answers[index] && section.answers[index].length > 0}
									<span class="answer">
										{section.answers[index]}
									</span>
								{/if}
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		{:else}
			<span style="padding: 1rem">Loading...</span>
		{/each}
	</div>
</div>

<style>
	.results-container {
		/* --a4_landscape_w: 297mm; 
        --a4_landscape_h: 210mm; */
		margin: 0 auto;
		min-height: 100%;
		/* width: 297mm; */
		width: 1160px;
		/* aspect-ratio: 100 / 59; */
		overflow: visible;
	}
	.results {
		margin: auto;
		width: 100%;
		/* max-width: 100%; */
		min-height: 100%;
		background-color: #fff;

		outline: 1px solid #000;

		display: grid;
		grid-template-columns: repeat(10, 1fr);
		/* grid-template-rows: repeat(3, 1fr); */
		grid-template-rows: 1fr 1fr 0.75fr;

		grid-template-areas:
			'a a b b d d e e g g'
			'a a c c d d f f g g'
			'h h h h h i i i i i';
		gap: 0;
	}
	.section {
		border: 1px solid #444;
		margin: 0;
		padding: 0.5rem;
		/* min-width: 240px; */
	}
	.section#section-1 {
		grid-area: a;
		border-right: transparent;
	}
	.section#section-2 {
		grid-area: b;
		border-bottom: transparent;
		border-right: transparent;
	}
	.section#section-3 {
		grid-area: c;
		border-right: transparent;
	}
	.section#section-4 {
		grid-area: d;
		border-right: transparent;
	}
	.section#section-5 {
		grid-area: e;
		border-bottom: transparent;
		border-right: transparent;
	}
	.section#section-6 {
		grid-area: f;
		border-right: transparent;
	}
	.section#section-7 {
		grid-area: g;
	}
	.section#section-8 {
		grid-area: h;
		border-top: transparent;
		border-right: transparent;
	}
	.section#section-9 {
		grid-area: i;
		border-top: transparent;
	}
	.section-title {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 0;
		margin: 0 0 8px 0;
	}
	.section h2 {
		font-size: 16px;
	}
	[lang='km'] .section h2 {
		font-size: 14px;
	}
	.section ul {
		list-style-type: none;
	}
	@supports (-moz-appearance: none) {
		/* firefox specific khmer word wrap fix */
		.results-container[lang='km'] .section ul {
			word-break: break-all;
		}
	}
	.section ul li {
		line-height: 1.24;
		margin-bottom: 8px;
	}
	[lang='km'] .section ul li {
		line-height: 1.4;
	}
	.section ul li .question,
	.section ul li .answer {
		display: block;
	}
	.section ul li .question {
		color: #666;
		font-size: 10px;
		margin-bottom: 2px;
	}
	.section ul li .answer {
		color: #000;
		font-size: 10px;
	}
</style>
