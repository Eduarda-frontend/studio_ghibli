import {createGlobalStyle } from 'styled-components'

export const cores = {
    marrom:'rgb(73, 73, 54)'
}

const EstiloGlobal = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }

    div{
       position: absolute;  
       left: 0;
       right: 0;
    }
`

export default EstiloGlobal