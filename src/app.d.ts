// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			meta:
				| {
						title: string;
						description: string;
						noindex?: never;
				  }
				| {
						title?: string;
						noindex: true;
				  };
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
