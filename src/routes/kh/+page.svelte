<script lang="ts">
	import SectionsGrid from '$lib/components/SectionsGrid.svelte';
	import type { Database } from '$lib';

	export let data;

	const sections: Array<Database['public']['Tables']['section']['Row']> = data.sections;
</script>

<svelte:head>
	<title>កម្មវិធីសម្រាប់បង្កើតផ្ទាំងគំរូអាជីវកម្ម​​ (BMC) | masayashida.com</title>
	<meta
		name="description"
		content="កម្មវិធីសម្រាប់បង្កើតផ្ទាំងគំរូអាជីវកម្ម​​ (Business Model Canvas ឬ​សរសេរកាត់ថា BMC)."
	/>
</svelte:head>
<main lang="km">
	<SectionsGrid {sections} language="kh" />
</main>
