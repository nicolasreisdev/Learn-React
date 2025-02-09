import 'styled-components';
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme; // Crianção de um tipo ThemeType que é igual ao tipo do defaultTheme (que é um objeto)


declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {} // Adiciona a interface DefaultTheme ao styled-components, que é igual ao ThemeType
}