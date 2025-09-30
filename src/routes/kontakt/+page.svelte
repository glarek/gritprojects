<script>
	let { data } = $props();
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Unplug, Droplets, Mail, Phone } from '@lucide/svelte';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import HoverCardContent from '$lib/components/ui/hover-card/hover-card-content.svelte';
	import { Avatar } from 'bits-ui';
	import { CopyButton } from '$lib/components/ui/copy-button';
</script>

<div class="md:p-20 p-6 w-full">
	<div class="md:order-1 order-2">
		<h1 class="text-4xl text-left">
			Kontakta oss<br />
		</h1>
		<h2 class="font-semibold">Låt oss hjälpa er redan idag</h2>

		<div class="grid col-span-full grid-cols-1 gap-6 mt-6 md:w-fit min-w-full">
			<Card.Root
				class="group outline-2 outline-border/0 hover:outline-border transition-all duration-75"
			>
				<Card.Header>
					<Card.Title
						><span class="flex flex-row items-center gap-2 text-lg">
							Fredrik Hellqvist
						</span></Card.Title
					>

					<Card.Description>El-projektör<br /></Card.Description>
				</Card.Header>
				<Card.Footer>
					<div class="flex flex-col gap-2">
						<Button class="self-start" variant="outline" href="tel:+46734036747"
							><Phone />+46 73 403 6747</Button
						>
						<Button variant="outline" href="mailto:fredrik.hellqvist@gritprojects.se"
							><Mail />fredrik.hellqvist@gritprojects.se</Button
						>
					</div>
				</Card.Footer>
			</Card.Root>
			<Card.Root
				class="group outline-2 outline-border/0 hover:outline-border transition-all duration-75"
			>
				<Card.Header>
					<Card.Title
						><span class="flex flex-row items-center gap-2 text-lg">
							Adrian Larek
						</span></Card.Title
					>

					<Card.Description>VVS-projektör & energiexpert<br /></Card.Description>
				</Card.Header>
				<Card.Footer>
					<div class="flex flex-col gap-2">
						<Button class="self-start" variant="outline" href="tel:+46738003725"
							><Phone />+46 73 800 3725</Button
						>
						<Button variant="outline" href="mailto:adrian.larek@gritprojects.se"
							><Mail />adrian.larek@gritprojects.se</Button
						>
					</div>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
</div>
