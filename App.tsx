import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";
import StackNavigator from "./navigation";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StackNavigator />
    </QueryClientProvider>
  );
}
