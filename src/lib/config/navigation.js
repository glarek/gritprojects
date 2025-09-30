import { Unplug, Droplets, Leaf, BookText } from '@lucide/svelte';

export const navLinks = [
	{
		title: 'El- och tele',
		href: '/el',
		icon: Unplug,
		children: [
			{
				title: 'Projektering',
				href: '/el/projektering'
			},
			{
				title: 'Solcellsinstallationer',
				href: '/el/solcellsinstallationer'
			},
			{
				title: 'Utredningar',
				href: '/el/utredningar'
			}
		]
	},
	{
		title: 'VVS',
		href: '/vvs',
		icon: Droplets,
		children: [
			{
				title: 'Projektering',
				href: '/vvs/projektering'
			},
			{
				title: 'Utredningar',
				href: '/vvs/utredningar'
			}
		]
	},
	{
		title: 'Energi',
		href: '/energi',
		icon: Leaf,
		children: [
			{
				title: 'Energideklarationer',
				href: '/energi/deklarationer'
			},
			{
				title: 'Energiberäkningar',
				href: '/energi/berakningar'
			},
			{
				title: 'Klimatberäkningar',
				href: '/energi/klimat'
			},
			{
				title: 'Åtgärdsplaner',
				href: '/energi/planer'
			}
		]
	},
	{
		title: 'Övrigt',
		href: '/ovrigt',
		icon: BookText,
		children: []
	}
];
