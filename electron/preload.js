window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector)
		if (element) {
			element.innerText = text
		}
	}

	for (const type of ["chrome", "node", "electron"]) {
		// eslint-disable-next-line no-undef
		replaceText(`${type}-version`, process.versions[type])
	}
})
