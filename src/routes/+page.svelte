<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Unplug, Droplets, Leaf } from '@lucide/svelte';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import HoverCardContent from '$lib/components/ui/hover-card/hover-card-content.svelte';
	import { Avatar } from 'bits-ui';
	import Sverige from './img/Sverige.svelte';
</script>

<div class="w-full p-6 md:p-20">
	<div class="grid w-full items-center justify-center gap-10 md:grid-cols-[3fr_140px]">
		<div class="order-2 md:order-1">
			<h1 class="text-left text-4xl">
				Vi ser målet<br />
			</h1>
			<h2 class="font-semibold">
				Låt oss få koll på era installationer och slåss för funktionella och energieffektiva
				fastigheter.
			</h2>

			<p class="mt-5 mb-5">
				Vi vill bidra till att skapa en gedigen förståelse för energi och installationer i era
				fastigheter. Vi erbjuder ett heltäckande angreppssätt, från systemskiss till färdigställd
				bygghandling. <br /><br />Vårt engagemang sträcker sig från start till självaste slutet där
				vi säkerställer att installationerna fungerar som de ska och energinanvändningen hålls som
				förväntat.
				<br />
			</p>
		</div>
		<div class="order-1 justify-self-center md:order-2">
			<div class="hidden lg:flex">
				<Sverige />
			</div>
		</div>
	</div>
	<div class="col-span-full mt-6 grid min-w-full grid-cols-1 gap-6 md:w-fit lg:grid-cols-[2fr_2fr]">
		<Card.Root
			class="group outline-border/0 hover:outline-border outline-2 transition-all duration-75"
		>
			<Card.Header>
				<Card.Title
					><span class="flex flex-row items-center gap-2 text-lg">
						El-projektering
					</span></Card.Title
				>
				<Card.Action
					><Unplug
						size="24"
						class="h-full w-full rounded-full bg-slate-200 p-1 group-hover:bg-amber-300 dark:bg-neutral-700 dark:group-hover:bg-yellow-500"
					/></Card.Action
				>
				<Card.Description>Projektering av el-, tele-, och brandlarm</Card.Description>
			</Card.Header>
			<Card.Footer>
				<Button href="/el/projektering">Läs mer</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root
			class="group outline-border/0 hover:outline-border outline-2 transition-all duration-75"
		>
			<Card.Header>
				<Card.Title
					><span class="flex flex-row items-center gap-2 text-lg">
						VVS-projektering
					</span></Card.Title
				>
				<Card.Description>Projektering av värme, kyla, sanitet, och ventilation</Card.Description>
				<Card.Action
					><Droplets
						size="24"
						class="h-full w-full rounded-full bg-slate-200 p-1 group-hover:bg-blue-300 dark:bg-neutral-700 dark:group-hover:bg-sky-600"
					/></Card.Action
				>
			</Card.Header>
			<Card.Footer>
				<Button href="/vvs/projektering">Läs mer</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root
			class="group outline-border/0 hover:outline-border outline-2 transition-all duration-75 lg:col-span-2"
		>
			<Card.Header>
				<Card.Title
					><span class="flex flex-row items-center gap-2 text-lg">
						Energilösningar
					</span></Card.Title
				>
				<Card.Description
					>Åtgärdsplaner för energioptimeringar, energideklarationer och energiberäkningar</Card.Description
				>
				<Card.Action
					><Leaf
						size="24"
						class="h-full w-full rounded-full bg-slate-200 p-1 group-hover:bg-green-400 dark:bg-neutral-700 dark:group-hover:bg-green-600"
					/></Card.Action
				>
			</Card.Header>
			<Card.Footer>
				<div class="flex flex-row gap-2">
					<Button>Läs mer</Button>
				</div>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
