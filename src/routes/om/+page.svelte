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

<div class="w-full p-6 md:p-20">
	<div class="grid w-full items-center justify-center gap-10 md:grid-cols-[3fr_140px]">
		<div class="order-2 md:order-1">
			<h1 class="text-left text-4xl">
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
		<div class="order-1 justify-self-center md:order-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="100%"
				height="100%"
				viewBox="0 0 2579 2866"
				version="1.1"
				xml:space="preserve"
				stroke="currentColor"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
			>
				<g transform="matrix(1,0,0,1,-464.876,-826.792)">
					<g transform="matrix(1,0,0,1,-124.977,-76.909)">
						<g transform="matrix(1,0,0,1,-57.6817,-115.363)">
							<path
								d="M2501.64,1495.22C2900.5,1700.61 3173.55,2116.51 3173.55,2595.68C3173.55,3278.37 2619.29,3832.63 1936.6,3832.63C1253.9,3832.63 699.643,3278.37 699.643,2595.68C699.643,1912.99 1253.9,1358.73 1936.6,1358.73C1949.16,1358.73 1961.67,1358.91 1974.14,1359.29"
								style="fill:none;stroke-width:104.22px;"
							/>
						</g>
						<g transform="matrix(4.16667,0,0,4.16667,-8575.58,-4560.44)">
							<path
								d="M2659.75,1876.26C2706.7,1832.15 2727.72,1806.76 2722.71,1729.63C2717.65,1651.83 2736.16,1634.78 2751.82,1615.38C2683.3,1637.13 2696.43,1767.78 2648.11,1750.18C2585.34,1727.31 2657.74,1648.9 2643.76,1565.74C2631.05,1490.17 2530.35,1412.69 2627.7,1317.23C2568.2,1358.23 2525.33,1443.5 2532.68,1522.63C2539.2,1592.95 2493.1,1592.39 2482.09,1580.71C2447.68,1544.21 2495.36,1529.42 2490.71,1439.38C2485.07,1484.12 2459.05,1505.94 2433.24,1525.96C2405.73,1547.29 2379.46,1591.76 2386.41,1636.63C2402.56,1741.02 2364.03,1711.89 2358.97,1707.1C2330.64,1680.31 2358.1,1631.57 2315.34,1604.28C2343.18,1643.17 2335.43,1679.99 2313.53,1721.27C2270.43,1802.49 2350.34,1857.6 2358.97,1870.39"
								style="fill:none;stroke-width:11.67px;"
							/>
						</g>
						<g transform="matrix(4.16667,0,0,4.16667,-8575.58,-4560.44)">
							<path
								d="M2406.81,1847.17C2376.5,1811.56 2370.08,1806.19 2360.28,1770.16C2362.47,1771.89 2418.91,1830.76 2444.6,1784.35C2470.99,1736.66 2416.08,1679.87 2446.94,1614.97C2447.43,1616.92 2453.78,1682.31 2499.58,1683.5C2565.93,1685.21 2574,1595.69 2574.89,1585.87C2584.29,1662.29 2576.18,1661.99 2562.92,1737.61C2550.71,1807.19 2598.06,1835.97 2644.69,1805.86C2629.82,1820.78 2613.88,1844.15 2569.85,1851.6C2527.55,1858.75 2526.26,1857.15 2492.07,1882.81"
								style="fill:none;stroke-width:7.78px;"
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
	</div>
</div>
