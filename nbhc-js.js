const nbbHandlePDFClick = (event) => {
	event.preventDefault()
	event.stopPropagation()
	const href = event.target.href
	const tempElement = document.createElement("a")
	tempElement.href = href
	tempElement.dispatchEvent(new MouseEvent("click", { ctrlKey: true }))
	tempElement.remove()
	return
}
