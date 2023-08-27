import { writable, type Writable } from 'svelte/store';
import type { Section } from '$lib';

export const themeStore = writable('');

export type SectionsWithAnswersType = Array<Section>;

export const sectionsStore: Writable<SectionsWithAnswersType> = writable([]);