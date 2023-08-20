<script lang="ts">
	import type { Database } from '$lib';

	export let language: 'en' | 'kh';
	export let sections: Array<Database['public']['Tables']['section']['Row']>;
</script>

<h1>
	{#if language === 'en'}
		Business Model Canvas Generator
		{:else}
		កម្មវិធីសម្រាប់បង្កើតផ្ទាំងគំរូអាជីវកម្ម​​
	{/if}
</h1>

{#if sections}
	{#each sections as item}
		{#if item.questions && item.questions.length > 0}
			<section>
				<h2>
					{#if language === 'en'}
						{item.title}
					{:else}
						{item.title_kh}
					{/if}
				</h2>
				<ul>
					{#if language === 'en'}
						{#each item.questions as question}
							<li>{question}</li>
						{/each}
                    {:else} 
                        {#if item.questions_kh && item.questions_kh.length > 0}
                            {#each item.questions_kh as question}
                                <li>{question}</li>
                            {/each}
                        {/if}
                    {/if}
				</ul>
			</section>
		{/if}
	{/each}
{:else}
	<p>No content was retrieved from the server 🥲. Please try again later.</p>
{/if}
