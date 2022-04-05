import 'styled-components';
import { ThemeModel } from './models/ThemeModel';
import { DefaultTheme } from './styled.d';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel{}
}