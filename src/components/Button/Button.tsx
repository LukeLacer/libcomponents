import React from 'react'

import { ButtonContainer } from './styles'

interface ButtonProps {
    color?: string
    label?: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ color = '#eee', label = 'Button' }) =>{
    return (
        <ButtonContainer color={color}>
            {label}
        </ButtonContainer>
    )
}

export default ButtonComponent