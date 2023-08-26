import { sections } from '../lib/test_data'

export async function load() {
	return {
		sections: sections ?? []
	};
}
