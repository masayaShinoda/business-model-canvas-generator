<script lang="ts">
	import { sectionsStore, type SectionsWithAnswersType } from '../stores';
	import MainSection from '$lib/components/MainSection.svelte';

	// data from +layout.server.js
	export let data;

	let sections: SectionsWithAnswersType;

	sectionsStore.set(
		Array.from(
			data.sections.map((section) => {
				return {
					...section,
					answers: new Array(section.questions.length).fill('')
				};
			})
		)
	);

	sectionsStore.subscribe((value) => {
		sections = value;
	});
</script>

<svelte:head>
	<title>Business Model Canvas Generator | masayashida.com</title>
	<meta
		name="description"
		content="Khmer language tool to generate a Business Model Canvas (BMC)."
	/>
</svelte:head>
<main>
	<MainSection {sections} language="en" />
</main>
