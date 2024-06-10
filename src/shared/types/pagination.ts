export interface IPagination {
	links: {
		first: string | null
		last: string | null
		next: string | null
		previous: string | null
	}
	meta: {
		current_page: number
		links: { url: null | string; label: string; active: boolean }[]
		from: number
		last_page: number
		path: string
		per_page: number
		to: number
		total: number
	}
}
