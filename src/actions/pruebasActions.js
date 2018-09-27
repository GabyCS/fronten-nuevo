export const setName = (name) => {
	return {
		type: "SET_NAME",
		data: name
	}
}
export const setImagen = (url) => {
	return {
		type: "SET_IMAGEN",
        data: url
	}
}