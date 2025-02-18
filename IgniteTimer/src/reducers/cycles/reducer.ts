import { ActionTypes } from "./actions";
import { produce } from 'immer'

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesState{
    cycles: Cycle[];
    activeCycleID: string | null;

}



export function cyclesReducer(state: CyclesState, action: any){

        switch(action.type){
            case ActionTypes.ADD_NEW_CYCLE:
            //     return {
            //     ...state, 
            //     cycles: [...state.cycles, action.payload.newCycle],
            //     activeCycleID: action.payload.newCycle.id,
            // }
            return produce(state, draft =>{ // utilizando immer para fazer a mesma coisa que o código acima
                draft.cycles.push(action.payload.newCycle) // adicionando um novo ciclo ao array de ciclos
                draft.activeCycleID = action.payload.newCycle.id // setando o id do ciclo ativo
            })
            case ActionTypes.INTERRUPT_CURRENT_CYCLE: {

                //     return {
                //     ...state, 
                //     cycles: state.cycles.map((cycle) =>{
                //         if(cycle.id === action.payload.activeCycleID){
                //             return{
                //                 ...cycle,
                //                 interruptedDate: new Date(),
                //             }
                //         }
                //         else return cycle
                //     }),
                //     activeCycleID: null, 
                // }

                const currentCycleIndex = state.cycles.findIndex(cycle => {
                    return cycle.id === state.activeCycleID // pegando o index do ciclo ativo
                    })  

                if(currentCycleIndex < 0) return state // se não encontrar o ciclo ativo, retorna o estado atual

                return produce(state, draft => {
                    draft.cycles[currentCycleIndex].interruptedDate = new Date() // setando a data de interrupção do ciclo
                    draft.activeCycleID = null // setando o id do ciclo ativo como null
                })
            }
            case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:{
                //     return {
                //     ...state, 
                //     cycles: state.cycles.map((cycle) =>{
                //         if(cycle.id === action.payload.activeCycleID){
                //             return{
                //                 ...cycle,
                //                 finishedDate: new Date(),
                //             }
                //         }
                //         else return cycle
                //     }),
                //     activeCycleID: null, 
                
                // }
                const currentCycleIndex = state.cycles.findIndex(cycle => {
                    return cycle.id === state.activeCycleID // pegando o index do ciclo ativo
                    })

                if(currentCycleIndex < 0) return state // se não encontrar o ciclo ativo, retorna o estado atual

                return produce(state, draft => {
                    draft.cycles[currentCycleIndex].finishedDate = new Date() // setando a data de finalização do ciclo
                    draft.activeCycleID = null // setando o id do ciclo ativo como null
                })    
            }
            default:
                return state
        }
    }

