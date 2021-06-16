import { useAsync } from './hooks/useAsync';
import { fetchData } from './utils/fetchData';

function App() {
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  function handleClick() {
    reFetchData();
  }

  if (status === 'idle') {
    return <pre>idle: Nada executando</pre>;
  }

  if (status === 'pending') {
    return <pre>pending: Loading...</pre>;
  }

  if (status === 'error') {
    return <pre>error: {error.message}</pre>;
  }

  if (status === 'settled') {
    return <pre onClick={handleClick}>settled: {JSON.stringify(result, null, 2)}</pre>;
  }

  return 'IXIII';
}

export default App;
