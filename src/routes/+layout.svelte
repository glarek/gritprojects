<script>
	import { beforeNavigate, onNavigate, afterNavigate, invalidate } from '$app/navigation';
	import { page } from '$app/state';

	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import TopNav from '$lib/components/TopNav.svelte';
	import SideNav from '$lib/components/SideNav.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import { setContext } from 'svelte';

	import { getShowNavbar, toggleNavbar, setShowNavbar } from '$lib/utils/navBarState.svelte.js';

	let { data, children } = $props();

	let navBarHeight = 50;
	let navigating = $state({ isNavigating: false });

	setContext('navigating', navigating);

	beforeNavigate(async () => {
		navigating.isNavigating = true;
		return;
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
	});

	afterNavigate(() => {
		const mainContainer = document.getElementById('main-container');
		if (mainContainer) {
			mainContainer.scrollTop = 0;
		}
		navigating.isNavigating = false;
	});
</script>

<svelte:head>
	<title>GRIT Projects AB - VVS och el</title>
</svelte:head>

<Toaster richColors position="top-left" />

<ModeWatcher disableTransitions={true} />

<header class="z-50 sticky top-0">
	<TopNav mainClass="h-[4rem]" navClass="lg:w-5xl w-full" />
</header>

<span
	class="{navigating.isNavigating
		? 'h-[2px]'
		: 'h-[0px]'} top-[calc(4rem-1px)] z-99 absolute loader transition-all duration-500"
></span>

<div id="main-container" class="flex flex-row justify-center items-start">
	<SideNav
		class="bg-background h-[calc(100dvh-4rem)] fixed lg:sticky lg:top-[4rem] lg:flex flex-col left-0 w-60 transition-transform duration-300 ease-in-out overflow-y-auto  {getShowNavbar()
			? 'translate-x-0'
			: '-translate-x-full'} lg:translate-x-0 z-40"
	/>

	<button
		type="button"
		id="overlay"
		aria-label="Close sidebar overlay"
		class="fixed top-[4rem] left-0 w-full h-full lg:hidden dark:bg-black/30 bg-black/10 z-30 duration-200 transition-all ease-in-out {getShowNavbar()
			? 'no-doc-scroll visible opacity-100 backdrop-blur-xs'
			: 'invisible opacity-0'}"
		onclick={() => setShowNavbar(false)}
		tabindex="0"
	></button>
	<div
		id="main-content"
		class="flex pb-4 lg:w-195 lg:flex-none flex-1 flex-col lg:border-r-1 border-dashed w-full min-h-[calc(100svh-4rem)]"
	>
		<div style="view-transition-name: slide">{@render children()}</div>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translatey(-30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateY(30px);
		}
	}

	:root::view-transition-old(root),
	:root::view-transition-new(root) {
		animation: none !important;
	}

	:root::view-transition-old(slide) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(slide) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
