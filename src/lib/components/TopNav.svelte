<script>
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import MenuIcon from '$lib/icons/menu-icon.svelte';
	import { Moon, Sun, Menu, KeyRound, CircleUserRound } from '@lucide/svelte';
	import Logo from '$lib/icons/logo.svelte';

	import { getShowNavbar, toggleNavbar } from '$lib/utils/navBarState.svelte.js';

	import { getContext } from 'svelte';

	let {
		mainClass: mainClasses = '',
		navClass: navClasses = '',
		admin: admin = false,
		...restProps
	} = $props();

	let navigating = getContext('navigating');
	let projectsShow = $state(false);
</script>

<ModeWatcher />

<div
	{...restProps}
	class="flex flex-col items-center justify-center bg-gradient-to-tr from-violet-500 to-fuchsia-600 text-white {mainClasses}"
>
	<nav class="flex items-center pl-4 pr-4 py-4 justify-between {navClasses}">
		<div class="flex flex-row items-center gap-x-5 font-semibold">
			<a href="/" class="popclick">
				<Logo height={32} href="/" class="self-center" {projectsShow} />
			</a>
		</div>

		<ul class="flex flex-row gap-x-5 items-center font-semibold">
			<a
				href="/om"
				class="popclick underline underline-offset-4 decoration-2 decoration-white/0 hover:decoration-white transition-all duration-10"
				>Om oss</a
			>
			<a
				href="/kontakt"
				class="popclick underline underline-offset-4 decoration-2 decoration-white/0 hover:decoration-white transition-all duration-10"
				>Kontakt</a
			>

			<button
				class="items-center justify-center w-7 h-7 relative group cursor-pointer popclick"
				onclick={toggleMode}
			>
				<Moon
					class="transition-all group-hover:text-green-500 absolute opacity-100 visible dark:invisible dark:opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
				<Sun
					class="transition-all group-hover:text-yellow-400 absolute opacity-0 invisible dark:visible dark:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
			</button>
			<button
				class="items-center justify-center w-7 h-7 relative lg:hidden group cursor-pointer hover:text-slate-200 transition-none"
				onclick={toggleNavbar}
			>
				<MenuIcon menuOpen={getShowNavbar()} />
			</button>
		</ul>
	</nav>
</div>
