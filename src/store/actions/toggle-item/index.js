export default (index) => ({

	type: 'TOGGLE_TODO_ITEM',
	index

})

/**
 * at this time mode can be either 'read' or 'update'
 */
export const switchItemMode = (index, mode) => ({
	type: 'SWITCH_ITEM_MODE',
	index,
	mode,
})

export const updateItem = (index, name) => ({
	type: 'UPDATE_ITEM',
	index,
	name,
})
