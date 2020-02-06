const state = {
	products: [
		{
			id: 1,
			name: 'Pepsodent',
			price: 12000
		},
		{
			id: 2,
			name: 'Clear',
			price: 15000
		}
	]
}

const getters = {
	saleProducts: (state) => {
		return state.products.map(product => {
			return {
				name: '**' + product.name + '**',
				price: product.price / 2
			}
		})
	}
}

const mutations = {
	onSales: (state, payload) => {
		state.products.forEach(product => {
			product.price -= payload
		})
	}
}

const actions = {
	onSales: (context, payload) => {
		setTimeout(() => {
			context.commit('onSales', payload)
		}, 2000)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}