
// controlled = o valor do input é controlado pelo estado do componente, melhor para validações
// uncontrolled = o valor do input não é controlado pelo estado do componente, melhor para formulários grandes (performance)
/*
    function register(name: string){
        return{
            onChange: () => void,
            onBlur: () => void,
            onFocus: () => void,
        }
    }
*/  

/*
Hooks: são funções que permitem adicionar estado e outras funcionalidades do React a componentes funcionais.

useState: é um hook que permite adicionar estado a componentes funcionais. Ele retorna um array com duas posições.
A primeira posição é o valor do estado, a segunda é uma função que permite atualizar esse valor.
Ex: const [state, setState] = useState('valor inicial')

useEffect: é um hook que permite adicionar efeitos colaterais a componentes funcionais.
"Efeitos colaterais" são ações que não estão diretamente relacionadas a renderização do componente.
Ele recebe uma função que será executada toda vez que o componente for renderizado. Ou seja, é uma boa prática para reutilizar
código que não é diretamente relacionado a renderização.

Ex 1: useEffect(() => {
    if(objetoDeDependencia.length != 0){ // podemos adicionar condições para que a função seja chamada
        avisarAPI() // function que faz uma requisição para uma API, para que não seja chamada toda vez que o componente for renderizado
    }
}, [objetoDeDependencia]) // array de dependência, que são as variáveis que, quando mudadas, fazem com que a função seja chamada

Ex 2: useEffect(() => {
    // Dessa forma é uma boa forma de renderizar API's, pois a função só será chamada uma vez
}, []) // array vazio, a função só será chamada uma vez no inicio da renderização.

Ex 3: useEffect(() => {

}, [variavelDeDependencia]) // array com uma variável, a função será chamada toda vez que a variável for mudada

*/



/*
Prop Drilling: é o ato de passar props de um componente para outro, mesmo que o componente intermediário não utilize essas props.
Útil quando a gente tem MUITAS propriedades apenas para comunicação entre componentes.

Context API: é uma API do React que permite compartilhar dados entre componentes sem a necessidade de passar props manualmente.


*/


// interface NewCycleFormData{
//     task: string;
//     minutesAmount: number;
// }

import { HandPalm, Play } from "phosphor-react";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { useForm , FormProvider} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";
import { CyclesContext } from "../../contexts/CyclesContext";








const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
    .number()
    .min(5, 'O cicloprecisa ser de no mínimo 5 minutos')
    .max(60, 'O cicloprecisa ser de no máximo 60 minutos'),
})


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home(){

    const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)
 
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })

    const {handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData){
        createNewCycle(data)
        reset()
    }
    


    const task = watch('task') // monitora o valor do input task e atualiza o valor da variável task
    const isSubmitDisabled = !task; // se task for falso, o botão de submit é desabilitado

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action=""> 
                
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm/>
                    </FormProvider>
                    <CountDown/>
    

                { activeCycle ? (
                    <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm size={24}/>
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24}/>
                        Começar
                    </StartCountdownButton>
                )}


            </form>


        </HomeContainer>
    )
}