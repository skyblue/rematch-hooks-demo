import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading"
import { useDispatch, useSelector } from 'react-redux'
import { models, RootModel } from './models'

type FullModel = ExtraModelsFromLoading<RootModel>

export const store = init<RootModel, FullModel>({
	models,
	plugins:[loadingPlugin()]
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export const useModels = (names:[]) => {
	const rootState = useSelector(state => state)
	const states = names.map(name => rootState[name])
	const dispatch = useDispatch()
	return { states, dispatch }
}
