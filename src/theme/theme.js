import { COLORS } from "../colors/color"
import styled from 'styled-components';



export const dark = {
    colors:{
        bgColor: COLORS.darkBackground,
        text: 'white'
    }
}

export const light = {
    colors:{
        bgColor: COLORS.lightBackground,
        text: 'black'
    }
}

export const DarkModeDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgColor};
  color: ${props => props.theme.colors.text};
`;