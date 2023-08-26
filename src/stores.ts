import { writable, type Writable } from 'svelte/store';
import type { Database } from '$lib';

export const themeStore = writable('');
export const questionsAnswersStore: Writable<
	Array<Database['public']['Tables']['section']['Row']>
> = writable([]);
