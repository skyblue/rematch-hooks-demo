import { useDispatch, useSelector } from 'react-redux'
import { useModels } from '../store'

const Count = () => {
  const loading = useSelector((rootState) => rootState.loading)

  
	// const apple = useSelector(state => state.apple)
	// const banana = useSelector(state => state.banana)
	// const dispatch = useDispatch()

	const { dispatch, states: [apple, banana] } = useModels( ['apple','banana'] )

	return (
    <>
    <h2>Using Rematch Models</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 220, marginRight: 20}}>
          <h3>Apple</h3>
          <h1>{apple}</h1>
          <button onClick={() => dispatch.apple.increment()}>+1</button>
          <button onClick={() => dispatch.apple.increment(3)}>+3</button>
          {/* <button onClick={() => dispatch.apple.incrementAsync()}>Async +1</button> */}
          <button onClick={() => dispatch.apple.incrementAsync(3)}>Async +3</button>
        </div>
        <div style={{ width: 200 }}>
          <h3>Banana</h3>
          <h1>{banana}</h1>
          <button onClick={() => dispatch.banana.incrementAsync(1)}>Async +1</button>
          <button onClick={() =>	dispatch({ type: 'banana/incrementAsync', payload: 2 })}>Both +2</button>
        </div>
      </div>
      <pre style={{ width:500, height:500, overflow:'auto', backgroundColor: 'rgb(246, 248, 250)', textAlign:'left' }}>
      <h3>loading plugin</h3>
      <code>{JSON.stringify(loading, null, 4)}</code>
      </pre>
    </>
	)
}

export default Count
