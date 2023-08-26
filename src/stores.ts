import { writable, type Writable } from 'svelte/store';
import type { Database } from '$lib';

export const themeStore = writable('');

type ExtendedRow = Database['public']['Tables']['section']['Row'] & {
	answers?: Array<string>;
	answers_kh?: Array<string>;
};

export type SectionsWithAnswersType = Array<ExtendedRow>;

export const sectionsStore: Writable<SectionsWithAnswersType> = writable([]);
