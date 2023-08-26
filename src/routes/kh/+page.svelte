<script lang="ts">
	import { questionsAnswersStore } from '../../stores.js';
	import MainSection from '$lib/components/MainSection.svelte';
	import type { Database } from '$lib';

	// data from +layout.server.js
	export let data;

	let sections: Array<Database['public']['Tables']['section']['Row']> = [];

	questionsAnswersStore.set(data.sections);

	questionsAnswersStore.subscribe((value) => {
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
