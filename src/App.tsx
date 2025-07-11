import { Provider } from 'react-redux'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import MainComponent from './components/MainComponent/MainComponent'
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div className='app'>
        <HeaderComponent/>
        <MainComponent />
      </div>
    </Provider>
  )
}

export default App
