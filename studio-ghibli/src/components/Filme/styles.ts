import styled from "styled-components"

export const Imagem = styled.div`
    text-align: center;
    
    img{
    
        margin-bottom: 8px;
        margin-right: 16px;
        height: 200px;
        transition: 0.2s;

      &:hover{
        transform: scale(1.04);
        box-shadow: 2px 2px 4px #0e1d2f;
      }
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column
`