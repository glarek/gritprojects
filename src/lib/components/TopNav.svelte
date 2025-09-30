<script>
	import { toggleMode } from 'mode-watcher';
	import { Moon, Sun, Menu, X, CircleUserRound } from '@lucide/svelte';
	import Logo from '$lib/icons/logo.svelte';

	import { getShowNavbar, toggleNavbar } from '$lib/utils/navBarState.svelte.js';

	import { getContext } from 'svelte';

	let {
		mainClass: mainClasses = '',
		navClass: navClasses = '',
		admin: admin = false,
		...restProps
	} = $props();

	let hover = $state(false);

	let navigating = getContext('navigating');
	let projectsShow = $state(false);
</script>

<div
	{...restProps}
	class="flex flex-col items-center justify-center bg-gradient-to-tr from-violet-500 to-fuchsia-600 text-white {mainClasses}"
>
	<nav class="flex items-center pl-4 pr-4 py-4 justify-between {navClasses}">
		<div class="flex flex-row items-center gap-x-5 font-semibold">
			<a
				href="/"
				class="popclick hover:scale-120 ease-in-out"
				onmouseenter={() => (hover = true)}
				onmouseleave={() => (hover = false)}
			>
				<Logo {hover} height={32} href="/" class="self-center" {projectsShow} />
			</a>
		</div>

		<ul class="flex flex-row gap-x-1 items-center font-semibold">
			<a
				href="/om"
				class="popclick underline underline-offset-4 decoration-2 decoration-white/0 hover:bg-white/25 rounded-full p-2 transition-all duration-10"
				>Om oss</a
			>
			<a
				href="/kontakt"
				class="popclick underline underline-offset-4 decoration-2 decoration-white/0 hover:bg-white/25 p-2 rounded-full transition-all duration-10"
				>Kontakt</a
			>

			<button
				class="items-center justify-center w-7 h-7 p-5 relative group cursor-pointer popclick hover:bg-white/25 rounded-full"
				onclick={toggleMode}
			>
				<Moon
					class=" transition-all  absolute opacity-100  dark:opacity-0 rotate-0 dark:rotate-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
				<Sun
					class=" transition-all  absolute opacity-0  dark:opacity-100 rotate-90 dark:rotate-0  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
			</button>
			<button
				class="lg:hidden items-center justify-center w-7 h-7 p-5 relative group cursor-pointer popclick hover:bg-white/25 rounded-full"
				onclick={toggleNavbar}
			>
				<X
					class=" transition-all {getShowNavbar()
						? 'rotate-0 opacity-100'
						: 'rotate-90 opacity-0'}  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
				<Menu
					class=" transition-all {getShowNavbar()
						? 'rotate-90 opacity-0'
						: 'rotate-0 opacity-100'}  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
			</button>
		</ul>
	</nav>
</div>
