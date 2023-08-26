// place files you want to import through the `$lib` alias in this folder.
import type { Database, Json } from '../supabase';

export type { Database, Json };

export type Section = {
	created_at: string;
	id: number;
	questions: string[] | null;
	questions_kh: string[] | null;
	title: string;
	title_kh: string | null;
	answers?: Array<string>;
	answers_kh?: Array<string>;
};
