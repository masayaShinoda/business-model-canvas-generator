// import { supabase } from '$lib/supabaseClient';

import { test_data } from '../lib/test_data';

export async function load() {
	// const { data } = await supabase.from('section').select('*').order('id');

	return {
		sections: test_data.sections ?? []
	};
}

export const prerender = true;
