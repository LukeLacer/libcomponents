import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ButtonProps } from '../Button'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
  },
} as Meta

export const Template: Story<ButtonProps> = (args) => <Button { ...args } />

export const Back = Template.bind({})
Back.args = {
  label: 'Voltar',
  color: '#ff8c00'
}

export const Login = Template.bind({})
Login.args = {
  label: 'Logar',
  color: '#8800f8'
}