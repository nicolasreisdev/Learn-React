import LogoOdyssey from '../../assets/logo_exibicao.png'
import { BoxLeft, RegisterContainer, BoxRight } from './styled'
import * as zod from 'zod'

// controlled = o valor do input é controlado pelo estado do componente, melhor para validações
// uncontrolled = o valor do input não é controlado pelo estado do componente, melhor para formulários grandes (performance)

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newUserSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    birth: zod.string(),
    cellphone: zod.string(),
    username: zod.string(),
    password: zod.string().min(6),
})

type NewUserInput = zod.infer<typeof newUserSchema>


export function Register(){

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { isSubmitting}
    } = useForm<NewUserInput>({
        resolver: zodResolver(newUserSchema),
    })

    async function handleNewUser(data: NewUserInput){
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
        reset();
    }

    const watchName = watch('name')
    const watchEmail = watch('email')
    const watchBirth = watch('birth')
    const watchCellphone = watch('cellphone')
    const watchUsername = watch('username')
    const watchPassword = watch('password')
    const isFormValid = !watchName || !watchEmail || !watchBirth || !watchCellphone || !watchUsername || !watchPassword


    return(
        <RegisterContainer>
            <BoxLeft>
                <h2>Crie o seu perfil e chegue cada vez mais perto dos seus objetivos!</h2>
                <form onSubmit={handleSubmit(handleNewUser)}  action="">
                    <input 
                        type="text" 
                        placeholder='Nome completo' 
                        required
                        {...register('name')}
                    />
                    <input 
                        type="text" 
                        placeholder='E-mail' 
                        required
                        {...register('email')}
                    />
                    <input 
                        type="text" 
                        placeholder='Data de nascimento' 
                        required
                        {...register('birth')}
                    />
                    <input 
                        type="text" 
                        placeholder='Telefone de contato'
                        required
                        {...register('cellphone')}
                    />
                    <input 
                        type="text" 
                        placeholder='Crie um nome de usuário'
                        required
                        {...register('username')}
                    />
                    <input 
                        type="text" 
                        placeholder='Senha'
                        required
                        {...register('password')}
                    />
                    <button disabled={ isFormValid ||isSubmitting} type="submit">
                        Criar Conta
                    </button>
                </form>
            </BoxLeft>

            <BoxRight>
                <img src={LogoOdyssey} alt="" />
            </BoxRight>
        </RegisterContainer>
    )
}   