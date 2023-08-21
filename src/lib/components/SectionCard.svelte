<script lang="ts">
	import type { Database } from '$lib';

	export let language: 'en' | 'kh';
	export let item: Database['public']['Tables']['section']['Row'];
</script>

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

<style>
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
	}
	.section-card ul li {
		color: var(--clr_grey_shade_c);
	}
</style>
