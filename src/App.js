import './App.css';
import Container from './components/Container';
import { store } from './store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
