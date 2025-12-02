import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Demo from "../Demo";

// QueryClient: gerencia o cache e configurações globais das queries
const queryClient = new QueryClient()

// React Query precisa do QueryClientProvider para funcionar
// Ele fornece o contexto do QueryClient para todos os componentes filhos
function Learn2() {
    return (
        <QueryClientProvider client={queryClient}>
            <Demo />
        </QueryClientProvider>
    )
}

export default Learn2;