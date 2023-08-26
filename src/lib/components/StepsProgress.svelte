<script lang="ts">
	import { sectionsStore, type SectionsWithAnswersType } from '../../stores';

	let sections: SectionsWithAnswersType;
	$: sections = $sectionsStore;

	$: max_questions = 0;
	$: progress_value = 0;

	// count answers with length > 0
	function count_progress(sections: SectionsWithAnswersType) {
		// re-run again to prevent doubling numbers
		max_questions = 0;
		progress_value = 0;

		sections.forEach((section) => {
			section.answers?.forEach((answer) => {
				if (answer.length > 0) {
					progress_value++;
				}
				// answers array is initialized as an array of empty strings with same length as questions, so we can calculate all questions length this way
				max_questions++;
			});
		});
	}

	$: count_progress(sections);
</script>

<progress
	id="steps-progress"
	class="steps-progress"
	max={max_questions}
	value={progress_value}
	title="Steps until completion"
/>

<style>
	.steps-progress {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		border: none;
		outline: none;

		border-radius: 100vmax;
		background-color: var(--clr_grey_shade_e);
		height: 0.5rem;
		width: 100%;
		margin-bottom: 2.5rem;
	}
	.steps-progress::-webkit-progress-bar {
		background-color: var(--clr_grey_shade_e);
	}
	.steps-progress::-moz-progress-bar {
		background-color: var(--clr_secondary);
	}
	.steps-progress::-webkit-progress-value {
		background-color: var(--clr_secondary);
	}
	.steps-progress {
		color: var(--clr_secondary);
	}
</style>
