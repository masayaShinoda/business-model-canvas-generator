<script lang="ts">
	import { sectionsStore, type SectionsWithAnswersType } from '../../stores';
	import MainSection from '$lib/components/MainSection.svelte';

	// data from +layout.server.js
	export let data;

	let sections: SectionsWithAnswersType;

	sectionsStore.set(
		Array.from(
			data.sections.map((section) => {
				return {
					...section,
					answers_kh: Array(section.questions_kh.length).fill('')
				};
			})
		)
	);

	sectionsStore.subscribe((value) => {
		sections = value;
	});
</script>

<svelte:head>
	<title>កម្មវិធីសម្រាប់បង្កើតផ្ទាំងគំរូអាជីវកម្ម​​ (BMC) | masayashida.com</title>
	<meta
		name="description"
		content="កម្មវិធីសម្រាប់បង្កើតផ្ទាំងគំរូអាជីវកម្ម​​ (Business Model Canvas ឬ​សរសេរកាត់ថា BMC)."
	/>
</svelte:head>
<main lang="km">
	<MainSection {sections} language="kh" />
</main>
