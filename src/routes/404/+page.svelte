<script>
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<svelte:head>
	<title>404 - Sidan hittades inte</title>
</svelte:head>

<div class="flex flex-col items-center h-screen mt-20 gap-4">
	<h1 class="text-7xl text-primary underline underline-offset-8 decoration-wavy decoration-4">
		404
	</h1>
	<h3>Sidan hittades inte!</h3>
	<p>Hoppsan! Sidan du letade efter verkar inte finnas.</p>
	<Button href="/">Tillbaka till startsidan</Button>
</div>
