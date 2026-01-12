import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PhotoGallery from './src/screens/PhotoGallery';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PhotoGallery />
    </QueryClientProvider>
  );
}

export default App;
