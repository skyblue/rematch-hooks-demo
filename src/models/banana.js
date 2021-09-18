import { delay } from '../utils'

const banana = {
	state: 0,
	reducers: {
		increment: (state, payload) => state + payload,
	},
	effects: (dispatch) => ({
		async incrementAsync(payload = 1) {
			await delay(500)
			dispatch.banana.increment(payload)

			// 跨model调用  
			// dispatch.apple.increment() 
			dispatch({ type: 'apple/incrementAsync', payload })
			// dispatch.apple.incrementAsync(payload) 
		},
	}),
}

export default banana