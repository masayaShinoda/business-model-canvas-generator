<script lang="ts">
	import MainSection from '$lib/components/MainSection.svelte';
	import type { Database } from '$lib';

	export let data;

	const sections: Array<Database['public']['Tables']['section']['Row']> = data.sections;
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
