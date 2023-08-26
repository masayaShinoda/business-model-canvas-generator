<script lang="ts">
	import { questionsAnswersStore } from "../stores.js";
	import MainSection from '$lib/components/MainSection.svelte';
	import type { Database } from '$lib';

	// data from +layout.server.js
	export let data;

	let sections: Array<Database['public']['Tables']['section']['Row']> = [] 

	questionsAnswersStore.set(data.sections)

	questionsAnswersStore.subscribe((value) => {
		sections = value
	})
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
