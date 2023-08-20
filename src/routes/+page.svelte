<script lang="ts">
	import SectionsGrid from '$lib/components/SectionsGrid.svelte';
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
<SectionsGrid {sections} language="en" />
