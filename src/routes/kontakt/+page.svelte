<script>
	let { data } = $props();
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Unplug, Droplets, Mail, Phone } from '@lucide/svelte';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import HoverCardContent from '$lib/components/ui/hover-card/hover-card-content.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { CopyButton } from '$lib/components/ui/copy-button';
	import Adrian from './img/Adrian.png';
	import Fredrik from './img/Fredrik.png';
</script>

<div class="w-full p-6 md:p-20">
	<div class="order-2 md:order-1">
		<h1 class="text-left text-4xl">
			Kontakta oss<br />
		</h1>
		<h2 class="font-semibold">Låt oss hjälpa er redan idag</h2>

		<div class="col-span-full mt-6 grid min-w-full grid-cols-1 gap-6 md:w-fit lg:grid-cols-1">
			<Card.Root
				class="group outline-border/0 hover:outline-border grid-cols-2 outline-2 transition-all duration-75"
			>
				<Card.Header class="grid grid-cols-[auto_1fr] items-center gap-3">
					<Avatar.Root class="h-14 w-14">
						<Avatar.Image src="" alt="Fredrik Hellqvist" />
						<Avatar.Fallback>FH</Avatar.Fallback>
					</Avatar.Root>
					<div>
						<Card.Title
							><span class="flex flex-row items-center gap-2 text-lg">
								Fredrik Hellqvist
							</span></Card.Title
						>
						<Card.Description>El-projektör<br /></Card.Description>
					</div>
				</Card.Header>
				<Card.Footer>
					<div class="flex flex-col gap-2">
						<Button size="sm" class="self-start" variant="outline" href="tel:+46734036747"
							><Phone />+46 73 403 6747</Button
						>
						<div class="grid grid-cols-[1fr_auto] items-center gap-2">
							<Button size="sm" variant="outline" href="mailto:fredrik.hellqvist@gritprojects.se">
								<Mail />
								<span class="block truncate"> fredrik.hellqvist@gritprojects.se </span>
							</Button>
							<CopyButton size="sm" variant="outline" text="fredrik.hellqvist@gritprojects.se" />
						</div>
					</div>
				</Card.Footer>
			</Card.Root>
			<Card.Root
				class="group outline-border/0 hover:outline-border outline-2 transition-all duration-75"
			>
				<Card.Header class="grid grid-cols-[auto_1fr] items-center gap-3">
					<Avatar.Root class="h-14 w-14">
						<Avatar.Image src="" alt="Adrian Larek" />
						<Avatar.Fallback>AL</Avatar.Fallback>
					</Avatar.Root>
					<div>
						<Card.Title
							><span class="flex flex-row items-center gap-2 text-lg">
								Adrian Larek
							</span></Card.Title
						>
						<Card.Description>VVS-projektör & energiexpert<br /></Card.Description>
					</div>
				</Card.Header>
				<Card.Footer>
					<div class="flex flex-col gap-2">
						<Button class="self-start" variant="outline" href="tel:+46738003725"
							><Phone />+46 73 800 3725</Button
						>
						<div class="grid grid-cols-[1fr_auto] items-center gap-2">
							<Button variant="outline" href="mailto:adrian.larek@gritprojects.se"
								><Mail /><span class="truncate">adrian.larek@gritprojects.se</span></Button
							><CopyButton variant="outline" text="adrian.larek@gritprojects.se" />
						</div>
					</div>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
</div>
