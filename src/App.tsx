import './App.css';
import { SalePage } from './pages/SalePage';
import { Providers } from './providers';

function App() {
  return (
    <Providers>
      <SalePage></SalePage>
    </Providers>
  );
}

export default App;
