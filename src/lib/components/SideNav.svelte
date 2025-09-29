<script>
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { slide } from 'svelte/transition';

	import NavigationMenuLink from '$lib/components/NavigationMenuLink.svelte';
	import Grit from '$lib/icons/grit.svelte';
	import { navLinks } from '$lib/config/navigation.js';
	import { onMount } from 'svelte';
	import { CircleUserRound, ShieldUser } from '@lucide/svelte';

	let { class: additionalClasses = '', ...restProps } = $props();
</script>

<ModeWatcher />

<div
	class="flex flex-col border-l-1 border-r-1 dark:border-white/5 border-dashed border-slate-200 justify-between py-4 font-semibold {additionalClasses} "
	{...restProps}
>
	<ul class="flex flex-col">
		<p class="  text-2xl ml-4 my-3 dark:text-purple-300 text-purple-800">Våra tjänster</p>

		{#each navLinks as navLink}
			<NavigationMenuLink
				buttonText={navLink.title}
				Icon={navLink.icon}
				link={navLink.href}
				childrenLinks={navLink.children}
			/>
		{/each}
	</ul>

	<footer class="flex flex-col items-center justify-center w-full text-xs pb-0 pt-2 self-center">
		<hr class="w-full pb-2 border-dashed" />
		<p>GRIT Projects AB - 2025</p>
		<p>559540-1950</p>
	</footer>
</div>
