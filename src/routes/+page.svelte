<script>
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
				Vi ser målet<br />
			</h1>
			<h2 class="font-semibold">Vi projekterar systemen som levererar resultaten</h2>

			<p class="mt-5 mb-5">
				Sluta köpa ritningar och börja investera lösningar som <mark>fungerar</mark> i praktiken.
				<br />
			</p>
		</div>
		<div class="md:order-2 order-1 justify-self-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xml:space="preserve"
				stroke="currentColor"
				fill="currentColor"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
				viewBox="0 0 167 209"
				width="167"
				><path
					d="M51.424 105.913c.891-5.128 1.547-8.926 1.547-8.926-5.335-1.555-8.766-11.556 2.891-15.937l-1.049 8.896 7.953 1.076 1.624-8.368s5.411 2.058 5.599 6.075c.188 4.018-1.395 10.161-1.395 10.161l-8.239-1.122s-.817 5.547-1.783 12.261M56.585 124.104c-.496 3.623-.888 6.625-1.046 8.153-.618 5.972-9.961 6.084-8.61-1.004.188-.986.44-2.36.736-3.996"
					style="fill:none;stroke-width:2.83px"
				></path><path
					d="M71.86 74.205s-.902.464-.856.736c.045.272 3.715 1.514 7.14.058 0 0-1.226.928-.825 1.065.4.137 5.34-.388 6.563-2.665 0 0-.888 1.76-.22 1.482.668-.279 3.085-1.203 4.52-4.472 0 0 3.461 3.701 5.398 2.741 0 0-.369-.313-.79-1.176 0 0 4.432 2.196 6.766.686 0 0-.859-.652-1.103-.702 0 0 5.826-.089 6.648-1.842 0 0-.58-.314-.955-.349 0 0 2.977-1.772 3.077-4.921.099-3.149-1.79-4.669-4.005-4.483 0 0 3.031 3.252-.105 4.208-4.145 1.263-9.383-7.849-16.042-.955 0 0-5.239-4.011-10.447 2.142-5.06 5.978-8.687 2.333-6.454-.6-2.774.103-5.542 8.015 1.69 9.047"
				></path><path
					d="M58.844 30.953s-4.327-7.584 1.357-16.617M61.349 12.475s3.121-4.449 6.064-6.026"
					style="fill:none;stroke-width:1.28px"
				></path><path
					d="M71.662 4.761s-.641-2.707 1.646-3.596c3.106-1.205 4.398.12 4.932 2.298"
					style="fill:none;stroke-width:1.42px"
				></path><path
					d="M49.191 35.049s6.127-3.458 10.313-4.237c0 0 10.706-6.619 20.732-8.079 10.025-1.46 18.688-.584 25.209 1.46 6.522 2.044 9.052 3.018 9.539 4.77.487 1.752-.097 3.504-3.893 3.309-3.796-.195-6.825 1.18-6.825 1.18"
					style="fill:none;stroke-width:2.7px"
				></path><path
					d="M59.504 30.812s5.955 3.425 10.724 2.841c4.769-.584 12.361-5.159 18.201-6.23 5.84-1.07 13.833-1.913 18.575-.767 3.439.832 6.493 2.212 7.971 4.156"
					style="fill:none;stroke-width:2.7px"
				></path><path
					d="M49.191 35.049s-2.725-8.825-.292-13.708C51.332 16.458 59.508 9.548 69.728 5.46c10.22-4.088 18.202-.974 21.706 1.168 3.504 2.141 6.618 3.698 7.689 6.813 1.071 3.115 2.239 9.539 2.239 9.539"
					style="fill:none;stroke-width:2.7px"
				></path><path
					d="M92.859 48.207c-1.616 0-2.505 1.705-2.505 3.936 0 2.23 1.523 4.2 3.139 4.2 1.616 0 2.717-1.97 2.717-4.2 0-2.231-1.734-3.936-3.351-3.936ZM72.483 50.107c-1.617 0-2.506 1.705-2.506 3.936s.889 4.2 2.506 4.2c1.616 0 3.35-1.969 3.35-4.2s-1.734-3.936-3.35-3.936Z"
				></path><path
					d="M38.178 106.855s7.035-2.14 13.246-.942M51.424 105.913c2.201.424 4.298 1.267 5.943 2.774.435.399.839.845 1.205 1.342M58.572 110.029c.117.159.23.322.338.491.645 1.005 1.145 2.199 1.456 3.612 1.097 4.996-.624 7.949-3.643 9.885l-.138.087M56.585 124.104a15.89 15.89 0 0 1-2.113 1.091c-2.048.884-4.415 1.505-6.807 2.062M47.665 127.257c-3.397.792-6.842 1.456-9.487 2.566M1.415 169.673s9.596.123 15.82 7.65 20.463 6.862 20.463 6.862m5.969-25.112-8.97 37.737s18.868 11.651 34.953 10.413c16.084-1.237 18.559-13.506 39.386-10.413s41.139-11.96 56.399-31.963c0 0-13.846-25.99-20.186-39.274-1.795-3.763-3.882-8.528-6.172-13.937M130.865 91.87c-10.653-25.812-23.087-55.633-31.617-65.719M49.191 35.049c-9.699 11.384-15.23 32.689-19.596 51.791-3.618 15.833-8.175 31.579-12.36 42.698-9.565 25.413-15.82 40.135-15.82 40.135"
					style="fill:none;stroke-width:2.83px"
				></path><path
					d="M72.884 16.165a.192.192 0 0 0-.047-.184c-.074-.073-.169-.048-.184-.045a73.77 73.77 0 0 0-2.712.766c-.318.096-.607-.087-.639-.409a38.636 38.636 0 0 1-.132-1.687c-.018-.315.224-.651.536-.744a66.888 66.888 0 0 1 5.483-1.39c.298-.061.577.104.646.376.019.073.121.471.186.933.524 3.691-1.742 6.52-5.167 7.576-3.941 1.216-7.271-.584-7.408-4.188-.132-3.461 2.749-6.976 6.33-7.988h.002c1.441-.402 3.045-.28 4.209.379.199.113.251.357.119.58-.234.393-.537.919-.882 1.547a.722.722 0 0 1-.397.332c-.035.012-.265.091-.466-.038-.816-.522-1.845-.695-2.757-.428-1.79.523-3.447 2.534-3.343 4.573.101 1.996 1.859 3.087 4.05 2.42 1.295-.394 2.313-1.277 2.573-2.381ZM85.232 18.553c-.583.026-1.2.064-1.829.115a.547.547 0 0 1-.415-.138 376.242 376.242 0 0 1-2.869-2.74c-.079-.078-.176-.064-.192-.062l-.114.016c-.12.017-.201.122-.181.232l.469 2.661c.039.22-.136.429-.394.469-.471.073-.969.156-1.465.245-.255.047-.497-.093-.539-.311-.522-2.696-.995-5.936-1.361-8.48a.362.362 0 0 1 .087-.289c.017-.02.109-.131.287-.16a46.084 46.084 0 0 1 2.675-.362c1.885-.199 3.753 1.034 4.17 2.652.274 1.065-.158 2.064-1.018 2.654a369 369 0 0 1 2.968 2.839c.125.122.166.287.107.423-.058.136-.207.229-.386.236Zm-6.031-4.978c.02.109.132.185.248.169.258-.035.538-.072.786-.102l.003-.001c.61-.071 1.048-.571.933-1.106-.117-.54-.722-.881-1.316-.812-.24.028-.512.062-.763.095-.113.015-.191.114-.172.218.111.597.215 1.169.281 1.539ZM86.212 18.116c-.437-2.738-1.178-5.865-2.066-8.235-.072-.19.051-.345.285-.338.45.013.904.036 1.315.066.228.016.487.184.573.372 1.055 2.314 1.892 5.409 2.323 8.152.035.223-.148.398-.409.391a42.718 42.718 0 0 0-1.487-.011c-.26.003-.498-.175-.534-.397ZM93.173 11.436c.23.294.488.653.74 1.046.126.197.036.295-.186.226a26.39 26.39 0 0 0-1.622-.449c-.107-.026-.152.034-.105.126.98 1.931 1.7 4.211 2.043 6.33.036.223-.143.369-.398.325-.466-.08-.964-.155-1.465-.219-.256-.033-.49-.239-.525-.463-.335-2.119-.987-4.42-1.852-6.389a.403.403 0 0 0-.276-.205 31.704 31.704 0 0 0-1.694-.198c-.24-.022-.501-.209-.584-.417a21.2 21.2 0 0 0-.493-1.13c-.087-.184.016-.32.246-.294 1.683.193 3.588.563 5.54 1.262.207.074.499.28.631.449Z"
				></path><path
					d="M139.077 111.636c-1.558 3.72-4.606 6.05-7.373 6.05-4.234 0-10.228-5.287-9.733-12.992.346-5.383 3.272-12.826 8.743-12.826.05 0 .1 0 .151.002 4.184.119 8.365 5.171 9.17 12.824.275 2.611-.133 4.972-.958 6.942"
					style="fill:none;stroke-width:2.83px"
				></path></svg
			>
		</div>
	</div>
	<div class="grid col-span-full grid-cols-1 lg:grid-cols-[2fr_2fr] gap-6 mt-6 md:w-fit min-w-full">
		<Card.Root
			class="group outline-2 outline-border/0 hover:outline-border transition-all duration-75"
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
						class="group-hover:bg-amber-300 dark:group-hover:bg-yellow-500 bg-slate-200 dark:bg-neutral-700 w-full h-full rounded-full p-1"
					/></Card.Action
				>
				<Card.Description>Projektering av el-, tele-, och brandlarm</Card.Description>
			</Card.Header>
			<Card.Footer>
				<Button href="/el/projektering">Läs mer</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root
			class="group outline-2 outline-border/0 hover:outline-border transition-all duration-75"
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
						class="group-hover:bg-blue-300 dark:group-hover:bg-sky-600 bg-slate-200 dark:bg-neutral-700 w-full h-full rounded-full p-1"
					/></Card.Action
				>
			</Card.Header>
			<Card.Footer>
				<Button>Läs mer</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root
			class="group outline-2 outline-border/0 hover:outline-border transition-all duration-75 lg:col-span-2"
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
						class="group-hover:bg-green-400 dark:group-hover:bg-green-600 bg-slate-200 dark:bg-neutral-700 w-full h-full rounded-full p-1"
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
