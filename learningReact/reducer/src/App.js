import Actions from './components/Actions';
import { BankProvider } from './BankContext';

function App() {
  return (

    <BankProvider>
      <Actions/>
    </BankProvider>
  );
}

export default App;
