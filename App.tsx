import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationScreens } from './src';
import { Provider } from 'react-redux';
import store from './src/store';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationScreens />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
