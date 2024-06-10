export enum FileTypes {
	XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	HTML = "text/html"
}

export function exportDocument(data: Blob, blobType: FileTypes, fileName: string) {
	const blob = new Blob([data], { type: blobType }),
		url = window.URL.createObjectURL(blob)
	const link = document.createElement("a")
	link.href = url
	link.download = fileName
	document.body.appendChild(link)
	link.click()
	window.URL.revokeObjectURL(url)
	document.body.removeChild(link)
}
