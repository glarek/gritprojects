<script>
	let { data } = $props();
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Unplug, Droplets, Leaf } from '@lucide/svelte';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import HoverCardContent from '$lib/components/ui/hover-card/hover-card-content.svelte';
	import { Avatar } from 'bits-ui';
</script>

<div class="md:p-20 p-6 w-full">
	<div class="grid md:grid-cols-[3fr_140px] gap-10 w-full justify-center items-center">
		<div class="md:order-1 order-2">
			<h1 class="text-4xl text-left">
				GRIT Projects AB<br />
			</h1>
			<h2 class="font-semibold">Vi brinner för det vi gör</h2>

			<p class="mt-5 mb-5">
				På GRIT Projects är vi specialiserade på fastighetens mest vitala system: el, tele, VVS och
				energi. Vi liknar gärna dessa system vid människans blodomlopp – när allt fungerar i samspel
				mår byggnaden bra och de som vistas där trivs.
			</p>
			<p>
				Själva trivs vi bäst när vi får vara hjärtat i byggprocessen. Då kan vi tillföra projektet
				både kreativitet och erfarenhet, och se till att förnuft och känsla får plats i varje
				beslut.
			</p>
		</div>
		<div class="md:order-2 order-1 justify-self-center">
			<svg
				stroke="currentColor"
				fill="none"
				width="162"
				xmlns="http://www.w3.org/2000/svg"
				xml:space="preserve"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
				viewBox="0 0 162 227"
				><path
					d="M138.934 138.678c2.585 11.404 9.189 39.065 20.98 61.965 0 0-23.504-.786-35.229 18.799-2.364-9.996-4.831-26.018-11.527-41.429M81.552 31.215s-2.595-1.457-1.733-3.724c.678-1.784 2.898-5.01 2.564-7.697-.515-4.148-4.037-4.245-3.811-7.231.275-3.622 2.905-3.789 2.98-6.984.058-2.485-1.733-4.227-1.733-4.227M39.949 27.491s4.503.867 4.503 4.071c0 3.675 2.829 4.377 5.63 4.937 3.464.693 2.165 5.11 2.165 5.11M120.819 22.193s-.574 2.988-3.693 3.722c-3.577.842-2.85 5.35-2.754 8.205.12 3.531-4.478 3.278-4.478 3.278M58.465 12.563c4.816 3.024 1.599 5.345 1.975 8.24.365 2.802 4 1.942 5.643 4.818.983 1.72-1.191 6.201-1.191 6.201M101.503 9.79c2.63 5.042-2.081 5.698-3.218 8.387-1.1 2.602.671 3.557.637 6.869-.021 1.981-3.051 4.751-3.051 4.751M71.892 86.755s8.985 12.017 23.979 1.299M69.634 71.908c.036 3.897 6.171 7.578 8.552.325M90.528 71.908c.036 3.897 6.171 7.578 8.553.325"
					style="fill:none;stroke-width:2.7px"
				/><path
					d="M133.241 144.685c2-1.935 3.903-3.943 5.693-6.007 19.505-22.489 25.758-51.689 1.75-65.547-9.94-5.737-17.383-5.017-20.505-1.617-2.985 3.252-2.016 8.957 4.506 13.808a28.732 28.732 0 0 0 3.143 2.018c5.636 3.142 3.701 8.505.785 12.725-2.422 3.504-5.522 6.221-5.522 6.221M30.329 141.291s-1.554-1.589-3.897-4.255c-7.721-8.786-24.009-29.269-21.476-43.109C9.124 71.152 33.758 62.879 46.5 65.405c1.737.344 3.253.889 4.467 1.626 9.472 5.751 5.92 12.856-3.891 15.901-2.562.795-5.285 1.844-7.646 3.261-5.71 3.427-9.299 9.007-3.354 18.36 1.011 1.59 2.297 3.289 3.895 5.106"
					style="fill:none;stroke-width:2.7px"
				/><path
					d="M39.43 86.193a126.771 126.771 0 0 0-1.474 8.093 153.99 153.99 0 0 1-1.88 10.267M26.432 137.036c-4.888 16.644-20.28 61.732-25.08 72.158 0 0 17.444-5.174 31.518 6.085M30.315 223.848c11.868 7.653 18.902-14.957 43.694-1.965 10.267 5.38 40.522 3.264 48.967-10.269M128.613 100.065c-1.32-5.195-2.604-10.12-3.928-14.743M120.179 71.514c-5.625-14.733-13.002-24.717-26.231-28.186-22.168-5.814-38.03 3.353-47.448 22.077"
					style="fill:none;stroke-width:2.7px"
				/><path
					d="M30.315 223.848s5.314-16.152 6.636-21.102c1.399-5.235 3.77-12.63 4.543-16.367 1.264-6.111 2.807-19.442 2.807-19.442"
					style="fill:none;stroke-width:2.7px"
				/></svg
			>
		</div>
	</div>
</div>
