import React from 'react'
import ButtonComponent from './Button'

export interface ButtonProps {
    color?: string
    label?: string
}

const Button: React.FC<ButtonProps> = ({ ...args }) =>{
    return <ButtonComponent {...args} />
}

export default Button