import { Models } from '@rematch/core'
import apple  from './apple'
import banana from './banana'

export interface RootModel extends Models<RootModel> {
	apple: typeof apple
	banana: typeof banana
}

export const models: RootModel = { 
	apple, 
	banana 
}