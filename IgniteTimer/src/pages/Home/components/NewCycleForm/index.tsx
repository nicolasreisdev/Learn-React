import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'


export function NewCycleForm(){

    const { activeCycle } = useContext(CyclesContext)
    const {register} = useFormContext()
    


    return(
        <FormContainer>
            <label htmlFor="">Vou trabalhar em</label>

            <TaskInput 
                id="task" 
                list="task-suggestion" 
                placeholder="Dê um nome para seu projeto " 
                disabled={!!activeCycle}
                {...register('task')} // passando o valor do input para o hook form
            />

            <datalist id="task-suggestion"> 
                <option value="Projeto 1"/>
                <option value="Projeto 2"/>
                <option value="Projeto 3"/>
            </datalist>

            <label htmlFor="">durante</label>   

            <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00"
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })} // passando o valor do input para o hook form
            />

            <span>minutos.</span>
        </FormContainer>
                
    )

}