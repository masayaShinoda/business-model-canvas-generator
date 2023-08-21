<script lang="ts">
	import type { Database } from '$lib';
    
	export let sections: Array<Database['public']['Tables']['section']['Row']>;

	let progress_value: number = 1;
	let progress_max = sections.length;

</script>

{#if progress_value > 0}
     <progress id="steps-progress" class="steps-progress" max={progress_max} value={progress_value} />
{/if}

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
