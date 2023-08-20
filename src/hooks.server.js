export const handle = async ({ event, resolve }) => {
	let lang = event.url.pathname.startsWith('/kh') ? 'km' : 'en';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
