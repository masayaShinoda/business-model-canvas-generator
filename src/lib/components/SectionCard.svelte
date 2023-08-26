<script>
	import { sectionsStore } from '../../stores';
	import SectionCardDialog from '$lib/components/SectionCardDialog.svelte';
	import CheckboxCircleFill from '$lib/icons/checkbox-circle-fill.svelte';

	let completed_questions = [];

	export let language;
	export let item_id

	$: item = $sectionsStore.find(section => section.id === item_id)

	function openDialog() {
		if (language === 'kh') {
			document.getElementById(`dialog-${item.id}-kh`).showModal();
		} else {
			document.getElementById(`dialog-${item.id}`).showModal();
		}
	}
</script>

<section class="section-card">
	<button on:click={openDialog} class="card-btn">
		<span class="section-card__top">
			<h2>
				{#if language === 'en'}
					{item.title}
				{:else}
					{item.title_kh}
				{/if}
			</h2>
			{#if completed_questions.length === item.questions}
				<span class="icon">
					<CheckboxCircleFill />
				</span>
			{/if}
		</span>
		<ul>
			{#if language === 'en'}
				{#each item.questions as $question, $question_index}
					<li class={`${item.answers[$question_index].length > 0 ? 'completed' : ''}`}>
						{$question}
					</li>
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
<SectionCardDialog {language} {item_id} />

<style>
	.section-card .card-btn {
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
		/* border-radius: 0.75rem; */
		box-shadow: 0 0.25rem 0.425rem rgba(0, 0, 0, 0.125);
		background-color: #fff;
		background-color: color-mix(in srgb, #FFF49D 60%, #fff 40%);
		outline: 1px solid transparent;
		transition: outline 200ms ease-out;
	}
	.section-card .card-btn:active {
		transform: translateY(0.25rem);
	}
	[data-theme='dark'] .section-card .card-btn {
		background-color: var(--clr_dark_shade_a);
	}

	.section-card .card-btn:focus-visible {
		outline-color: var(--clr_grey_shade_c);
	}
	[data-theme='dark'] .section-card .card-btn:focus-visible {
		outline-color: var(--clr_grey_shade_b);
	}

	.section-card h2 {
		font-size: calc(var(--type_scale_5) * 0.75);
		margin: 0;
		color: var(--clr_dark);
		transition: 200ms ease-out color;
	}
	[data-theme='dark'] .section-card h2 {
		color: #fff;
	}

	.section-card__top {
		display: inline-flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		margin-top: 0;
		margin-bottom: 0;
	}
	.section-card__top .icon {
		transform: scale(1.5);
	}
	.section-card ul {
		padding-left: 1rem;
	}
	.section-card ul li {
		list-style-image: url("$lib/icons/checkbox-blank-circle.svg");
		color: var(--clr_grey_shade_a);
	}
	[data-theme='dark'] .section-card ul li {
		color: var(--clr_grey_shade_d);
		list-style-image: url("$lib/icons/checkbox-blank-circle-white.svg");
	}
	
	.section-card ul li.completed {
		list-style-image: url("$lib/icons/checkbox-circle-fill.svg");
	}
	.section-card ul li:last-of-type {
		margin-bottom: 0;
	}
</style>
