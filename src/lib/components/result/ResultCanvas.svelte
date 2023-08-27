<script lang="ts">
	import { sectionsStore, type SectionsWithAnswersType } from '../../../stores';

	let sections: SectionsWithAnswersType;
	$: sections = $sectionsStore;
</script>

<div class="results-container">
	<div class="results">
		{#each sections as section}
			<div id={`section-${section.id.toString()}`} class="section">
				<h2>{section.title}</h2>
				<ul>
					{#if section.questions && section.answers}
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
		{/each}
	</div>
</div>

<!-- <span>{JSON.stringify(sections)}</span> -->

<style>
	.results-container {
		/* --a4_landscape_w: 297mm; 
        --a4_landscape_h: 210mm; */
		display: block;
		margin: auto;
		/* min-height: 100%; */
        padding: 2rem;
		width: 100%;
		max-width: min(100%, calc(297mm - 20mm));
		/* aspect-ratio: 297 / 210; */
	}
    @media screen and (max-width: 48em) {
        .results-container {
            width: auto;
            max-width: none;
        }
    }
	.results {
		margin: auto;
		width: 100%;
		max-width: 100%;
		min-height: 100%;

		border: 2px solid #000;

		display: grid;
		grid-template-areas:
			'a a b b d d e e g g'
			'a a c c d d f f g g'
			'h h h h h i i i i i';
		gap: 0;
	}
    @media screen and (max-width: 48em) {
        .results {
            max-width: none;
            width: auto;
        }
    }
	.section {
		border: 1px solid #444;
		margin: 0;
		padding: 0.5rem;
	}
    @media screen and (max-width: 48em) {
        .section {
            min-width: 240px;
        }
    }
	.section#section-1 {
		grid-area: a;
	}
	.section#section-2 {
		grid-area: b;
	}
	.section#section-3 {
		grid-area: c;
	}
	.section#section-4 {
		grid-area: d;
	}
	.section#section-5 {
		grid-area: e;
	}
	.section#section-6 {
		grid-area: f;
	}
	.section#section-7 {
		grid-area: g;
	}
	.section#section-8 {
		grid-area: h;
	}
	.section#section-9 {
		grid-area: i;
	}
	.section h2 {
		font-size: 16px;
		margin: 0 0 12px 0;
	}
	.section ul {
		list-style-type: none;
	}
	.section ul li {
		line-height: 1.24;
		margin-bottom: 8px;
	}
	.section ul li .question,
	.section ul li .answer {
		display: block;
	}
	.section ul li .question {
		color: #666;
		font-size: 12px;
		margin-bottom: 4px;
	}
	.section ul li .answer {
		color: #000;
		font-size: 12px;
	}
</style>
