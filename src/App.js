import './App.css';
import { Provider, useSelector } from 'react-redux'
import { store } from './store'
import Count from './pages/Count'

function App() {
  return (
		<Provider store={store}>
      <div className="App">
        <Count />
      </div>
    </Provider>
  );
}

export default App
