import React, { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import s from './Button.module.scss'

export enum ButtonTheme {
  Clear = 'clear',
  Primary = 'primary',
  Secondary = 'secondary',
  Destructive = 'destructive',
}

export enum ButtonSize {
  Small = 'small',
  Large = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: ButtonTheme
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = memo(
  ({ className, children, theme = '', size = '', type = 'button', ...other }) => {
    return (
      <button
        type={type}
        {...other}
        className={classNames(s.Button, {}, [s[theme], s[size], className])}
      >
        {children}
      </button>
    )
  }
)
