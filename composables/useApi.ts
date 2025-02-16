export function useApi(endpoint: string) {
	const config = useRuntimeConfig();
	return useFetch(`${config.public.apiBase}${endpoint}`);
}
