import { ReactNode, useEffect, useState, useCallback} from "react";
import { api } from "../lib/axios";
import { createContext } from 'use-context-selector'

interface Transaction{
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface CreateTransactionInput{
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}


interface TransactionContextTypes{
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps{
    children: ReactNode
}



export const TransactionsContext = createContext({} as TransactionContextTypes)

export function TransactionsProvider({children}: TransactionsProviderProps){

     const [transactions, setTransactions] = useState<Transaction[]>([]) // Criando um estado para armazenar as transações
    
    const fetchTransactions = useCallback(async (query?: string) => { // Função para carregar as transações (async = assíncrona)
        const response =  await api.get('/transactions', { // Fazendo uma requisição GET para a rota /transactions)
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        })  

        setTransactions(response.data) // Atualizando o estado transactions com os dados da API
    }, [])



    const createTransaction = useCallback(async (data: CreateTransactionInput) => {
        const { description, price, category, type } = data

        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })

        setTransactions(state => [response.data ,...state ])
    }, [])

    useEffect(() => { // para que a função seja executada assim que a página for carregada e apenas uma vez
        fetchTransactions() // Chamando a função loadTransactions
    },[fetchTransactions])

    return(
        <TransactionsContext.Provider value={{ 
            transactions,
            fetchTransactions,
            createTransaction
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}