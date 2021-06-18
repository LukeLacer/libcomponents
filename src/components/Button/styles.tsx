import styled from 'styled-components'

interface props {
    color?: string
}

export const ButtonContainer = styled.button<props>`
    background-color: ${props => props.color};
    border-radius: 4px;
`