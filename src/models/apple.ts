import { createModel } from '@rematch/core'
import { delay } from '../utils'
import { RootModel } from '.'

const apple = createModel<RootModel>()({
	state: 0,
	reducers: {
		increment: (state, payload: number = 1) => state + payload,
	},
	effects: (dispatch) => ({
		async incrementAsync(payload) {
			await delay(500)
			dispatch.apple.increment(payload)
		},
	}),
})

export default apple