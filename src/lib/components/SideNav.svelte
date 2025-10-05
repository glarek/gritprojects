<script>
	import { slide } from 'svelte/transition';

	import NavigationMenuLink from '$lib/components/NavigationMenuLink.svelte';
	import Grit from '$lib/icons/grit.svelte';
	import { navLinks } from '$lib/config/navigation.js';
	import { onMount } from 'svelte';
	import { CircleUserRound, ShieldUser } from '@lucide/svelte';

	let { class: additionalClasses = '', ...restProps } = $props();
</script>

<div
	class="flex flex-col justify-between border-r-1 border-l-1 border-dashed border-slate-200 py-4 font-semibold dark:border-white/5 {additionalClasses} "
	{...restProps}
>
	<ul class="flex flex-col">
		<p class="  text-primary my-3 ml-4 text-2xl">Våra tjänster</p>

		{#each navLinks as navLink}
			<NavigationMenuLink
				buttonText={navLink.title}
				Icon={navLink.icon}
				link={navLink.href}
				childrenLinks={navLink.children}
			/>
		{/each}
	</ul>

	<footer class="flex w-full flex-col items-center justify-center self-center pt-2 pb-0 text-xs">
		<hr class="w-full border-dashed border-slate-200 pb-2 dark:border-white/5" />
		<p>GRIT Projects AB - 2025</p>
		<p>Stockholm, Sverige</p>
		<p>559540-1950</p>
	</footer>
</div>
