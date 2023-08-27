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
