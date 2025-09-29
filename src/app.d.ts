declare global {
	namespace App {}
	interface PageData {
		session: Session | null;
	}
	// interface PageState {}
	// interface Platform {}
	interface Post {
		title: string;
		slug: string;
		category: string;
		date: string;
		author: string;
		filepath: string;
		content: import('svelte').SvelteComponent;
	}
}

export {};
