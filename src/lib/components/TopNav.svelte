<script>
	import { toggleMode } from 'mode-watcher';
	import { Moon, Sun, Menu, X, CircleUserRound, Dot } from '@lucide/svelte';
	import Logo from '$lib/icons/logo.svelte';
	import { page } from '$app/state';

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

	let activeLink = $derived(page.url.pathname.replaceAll('/', ''));

	function isActivelink(link) {
		link = link.replaceAll('/', '');
		return link == activeLink;
	}
</script>

<div
	{...restProps}
	class="flex flex-col items-center justify-center bg-gradient-to-tr from-violet-500 to-fuchsia-600 text-white {mainClasses}"
>
	<nav class="flex items-center justify-between py-4 pr-4 pl-4 {navClasses}">
		<div class="flex flex-row items-center gap-x-5 font-semibold">
			<a
				href="/"
				class="popclick ease-in-out hover:scale-120"
				onmouseenter={() => (hover = true)}
				onmouseleave={() => (hover = false)}
			>
				<Logo {hover} height={32} href="/" class="self-center" {projectsShow} />
			</a>
		</div>

		<ul class="flex flex-row items-center gap-x-1 font-semibold">
			<a
				href="/om"
				class="{isActivelink('/om')
					? ' cursor-default decoration-white/50'
					: 'decoration-white/0 hover:decoration-white/100'} popclick relative p-2 underline decoration-wavy decoration-1 underline-offset-2 transition-all duration-150"
				>Om oss</a
			>

			<a
				href="/kontakt"
				class="{isActivelink('/kontakt')
					? ' cursor-default decoration-white/50'
					: 'decoration-white/0 hover:decoration-white/100'} popclick relative p-2 underline decoration-wavy decoration-1 underline-offset-2 transition-all duration-150"
				>Kontakt</a
			>

			<button
				class="group popclick relative h-7 w-7 cursor-pointer items-center justify-center rounded-full p-5 hover:bg-white/25"
				onclick={toggleMode}
			>
				<Moon
					class=" absolute  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rotate-0 transform opacity-100 transition-all dark:rotate-90 dark:opacity-0"
				/>
				<Sun
					class=" absolute  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rotate-90  transform opacity-0 transition-all dark:rotate-0 dark:opacity-100"
				/>
			</button>
			<button
				class="group popclick relative h-7 w-7 cursor-pointer items-center justify-center rounded-full p-5 hover:bg-white/25 lg:hidden"
				onclick={toggleNavbar}
			>
				<X
					class=" transition-all {getShowNavbar()
						? 'rotate-0 opacity-100'
						: 'rotate-90 opacity-0'}  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
				/>
				<Menu
					class=" transition-all {getShowNavbar()
						? 'rotate-90 opacity-0'
						: 'rotate-0 opacity-100'}  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
				/>
			</button>
		</ul>
	</nav>
</div>
