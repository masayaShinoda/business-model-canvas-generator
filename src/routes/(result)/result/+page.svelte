<script lang="ts">
	import { page } from '$app/stores';
	import { sectionsStore } from '../../../stores';
	import { onMount } from 'svelte';
	import ResultCanvas from '$lib/components/result/ResultCanvas.svelte';
	// import * as htmlToImage from 'html-to-image';
	import { toPng } from 'html-to-image';
	import download from 'downloadjs';

	$: sections = $sectionsStore;
	let language: string | null;
	let download_results: VoidFunction;
	let is_downloading: boolean;
	let go_back: VoidFunction;

	onMount(() => {
		language = $page.url.searchParams.get('lang');

		const results_container = document.getElementById('results-container');
		const results_grid: HTMLElement | null | undefined =
			results_container?.querySelector('#results');

		function get_download_date() {
			const now = new Date();
			const download_date = now
				.toLocaleDateString('en-US', {
					day: 'numeric',
					month: 'numeric',
					year: 'numeric',
					hour: 'numeric'
				})
				.replaceAll(/\s/g, '')
				.replaceAll(',', '');

			return download_date;
		}

		download_results = () => {
			if (results_grid) {
				is_downloading = true;
				setTimeout(() => {
					toPng(results_grid, {
						backgroundColor: '#fff',
						pixelRatio: 8
						Math.min(2, window.devicePixelRatio)
					})
						.then((dataUrl) => {
							download(dataUrl, `business-model-canvas-${get_download_date()}`);
							is_downloading = false;
						})
						.catch((error) => {
							console.error('An error occured converting DOM node to image', error);
						});
				}, 250);
			}
		};

		go_back = () => {
			history.back();
		};
	});
</script>

<ResultCanvas {sections} />

<svelte:head>
	<title>{language === 'kh' ? 'លទ្ធផល' : 'Results'}</title>
	<meta name="robots" content="noindex" />
</svelte:head>
<div class="btn-section">
	<div class="btn-wrapper">
		<button id="btn_download" on:click={download_results} disabled={is_downloading}
			>{language === 'kh' ? 'ទាញយករូបភាព' : 'Download image'}</button
		>
		<button id="btn_back" on:click={go_back} aria-label="Go back">
			<svg
				aria-label="Arrow back"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				><path
					d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
				/></svg
			>
		</button>
	</div>
</div>

<style>
	.btn-section .btn-wrapper #btn_download {
		background-color: #0077cc;
		color: #fff;
		border-radius: 100vmax;
		outline: none;
		border: none;
		font-size: 1.125rem;
		position: fixed;
		width: 12.5rem;
		height: 3.5rem;
		bottom: 2.5rem;
		left: 50%;
		margin-left: -6.25rem;
		cursor: pointer;
		border: 1px solid rgba(255, 255, 255, 0.25);
		box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);
		transition: filter 200ms ease-out, background-color 200ms ease-out;
	}
	.btn-section .btn-wrapper #btn_download:hover,
	.btn-section .btn-wrapper #btn_download:focus-visible {
		filter: brightness(0.9);
	}

	.btn-section .btn-wrapper #btn_download:active {
		transform: translateY(0.25rem);
	}

	[data-theme='dark'] .btn-section .btn-wrapper #btn_download:hover,
	[data-theme='dark'] .btn-section .btn-wrapper #btn_download:focus-visible {
		filter: brightness(1.1);
	}

	.btn-section .btn-wrapper #btn_download:disabled {
		background-color: #999;
		cursor: not-allowed;
	}

	.btn-section .btn-wrapper #btn_download:disabled:hover,
	.btn-section .btn-wrapper #btn_download:disabled:focus-visible {
		filter: none;
	}

	.btn-section .btn-wrapper #btn_download:disabled:active {
		transform: none;
	}
	.btn-section .btn-wrapper #btn_back {
		background: none;
		outline: none;
		border: none;
		color: #0077cc;

		border-radius: 100vmax;
		width: 3.5rem;
		height: 3.5rem;
		display: inline-flex;
		justify-content: center;
		align-items: center;

		position: fixed;
		bottom: 2.5rem;
		left: 50%;
		margin-left: -11rem;
		cursor: pointer;

		display: inline-flex;
		align-items: center;

		background-color: #fff;
		border: 1px solid rgba(255, 255, 255, 0.25);
		box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.25);

		transition: border-color 200ms ease-out;
	}
	.btn-section .btn-wrapper #btn_back:hover,
	.btn-section .btn-wrapper #btn_back:focus-visible {
		border-color: #0077cc;
	}
	@media screen and (max-width: 48em) {
		.btn-section .btn-wrapper #btn_back {
			left: 1rem;
			margin-left: 0;
		}
	}
</style>
