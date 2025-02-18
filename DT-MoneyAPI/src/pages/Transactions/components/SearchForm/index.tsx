import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { memo } from "react";

/*
 * Por que que um componente renderiza novamente?
    - Hooks changed (mudou o estado, contexto, reducer)
    - Props changed (mudou as propriedade)
    - Parent rerendered (componente pai renderizou novamente)

 * Qual o fluxo de renderização de um componente?
    - 1. O React recria o HTML da interface daquele componente
    - 2. O React compara o HTML antigo com o HTML novo
    - 3. Se houver diferença, atualiza (reescreve) o HTML da tela

 * Memo:
    - 0. Hooks changed, Props changed (deep comparison)
    - 0.1 Comparar a versão anterior dos hooks e props
    - 0.2 SE mudou, ele vai permitir a nova renderização
    - 0.3 SE não mudou, ele vai bloquear a nova renderização
 */

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent(){

    const fetchTransactions = useContextSelector(TransactionsContext, (context) =>{
        return context.fetchTransactions
    })


    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })  


    async function handleSearchTransactions(data: SearchFormInputs){
        await fetchTransactions(data.query)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                {...register("query")}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}

export const SearchForm = memo(SearchFormComponent)