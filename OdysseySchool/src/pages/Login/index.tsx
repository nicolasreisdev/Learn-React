import  LogoOdyssey  from '../../assets/logo_exibicao.png'
import { BaseInput, BoxLeft, BoxRight, CheckButton, LoginContainer } from './styled'


// controlled = o valor do input é controlado pelo estado do componente, melhor para validações
// uncontrolled = o valor do input não é controlado pelo estado do componente, melhor para formulários grandes (performance)

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { LoginProvider } from '../../contexts/LoginContexts'

const EnterSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
})

type EnterInput = zod.infer<typeof EnterSchema>

export function Login(){

    const { 
        register, 
        handleSubmit, 
        watch, 
        reset,
        formState: { isSubmitting}
    } = useForm<EnterInput>({
        resolver: zodResolver(EnterSchema),
        // defaultValues: {
        //     email: '',
        //     password: '',
        // },
    })



    async function handleEnterUser(data: EnterInput){
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
        reset();
    }

    const watchEmail = watch('email')
    const watchPassword = watch('password')
    const isFormValid = !watchEmail || !watchPassword

    

    return(
        <LoginProvider>
            <LoginContainer>
                <BoxLeft>
                    <h2>Faça o login para acessar o seu perfil:</h2>
                    <form onSubmit={handleSubmit(handleEnterUser)}  action="">
                        <BaseInput 
                            type="text" 
                            placeholder='EMAIL OU USUÁRIO'
                            required
                            {...register('email')}    
                        />
                        <BaseInput 
                            type="text" 
                            placeholder='SENHA'
                            required
                            {...register('password')}
                        />
                        <CheckButton  disabled= { isFormValid ||isSubmitting } type="submit">Entrar</CheckButton>
                    </form>
                </BoxLeft>

                <BoxRight>
                    <img  src={LogoOdyssey} alt="" />
                </BoxRight>
            </LoginContainer>
        </LoginProvider>
    )
}   