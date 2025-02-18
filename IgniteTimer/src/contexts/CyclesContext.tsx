import { createContext, ReactNode, useState, useReducer, useEffect } from 'react';
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from '../reducers/cycles/actions';
import { differenceInSeconds } from 'date-fns';

interface CreateCycleData{
    task: string;
    minutesAmount: number;
}


interface CyclesContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleID: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void; 
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}


export const CyclesContext = createContext({} as CyclesContextType)


interface CyclesContextProviderProps{
    children: ReactNode;
}



export function CyclesContextProvider({ children }: CyclesContextProviderProps){

    const [cyclesState, dispatch] = useReducer(cyclesReducer,
    {
        cycles: [],
        activeCycleID: null,
    }, (initialState) => {

        const storedStateAsJSON = localStorage.getItem('@ignite-timer:cycle-state-1.0.0:')
         
        if(storedStateAsJSON){
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    },
    )

    const { cycles, activeCycleID} = cyclesState
    
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleID )

    const [amountSecondsPassed, setAmountSecondPassed] = useState(() => {
        if(activeCycle) return differenceInSeconds(new Date(), activeCycle.startDate)
        
        return 0
    })


    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)
        localStorage.setItem('@ignite-timer:cycle-state-1.0.0:', stateJSON)
    }, [cyclesState])


    function setSecondsPassed(seconds: number){
        setAmountSecondPassed(seconds)
    }
    
    function markCurrentCycleAsFinished(){

        dispatch(markCurrentCycleAsFinishedAction())

    }

    function createNewCycle(data: CreateCycleData){  

        const id = String(new Date().getTime()) 

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        } 

        dispatch(addNewCycleAction(newCycle))
        setAmountSecondPassed(0)
    }


    function interruptCurrentCycle(){
        dispatch(interruptCurrentCycleAction())
    }



    return(
        <CyclesContext.Provider value={{ 
            cycles,
            activeCycle, 
            activeCycleID, 
            markCurrentCycleAsFinished, 
            amountSecondsPassed, 
            setSecondsPassed,
            createNewCycle,
            interruptCurrentCycle
            }}>
            {children}
        </CyclesContext.Provider>
    )
}
