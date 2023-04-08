import React, { ChangeEvent, FC, InputHTMLAttributes, memo, ReactNode } from 'react'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import { classNames } from '../../lib/classNames/classNames'

import s from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  children?: ReactNode
  value?: string
  onChange?: (value: string) => void
  register?: UseFormRegister<FieldValues>
  registerName?: string
  error?: string
}

export const Input: FC<InputProps> = memo(
  ({ className, children, value, onChange, title, register, registerName, error, ...other }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value)
    }

    const registerParam = registerName && register && register(registerName)

    return (
      <div className={classNames(s.Input, {}, [className])}>
        <label className={s.label}>
          <span>{title}</span>
          <input
            autoComplete={'off'}
            {...registerParam}
            {...other}
            className={s.input}
            value={value}
            onChange={onChangeHandler}
          />
          {error && <span className={s.error}>{error}</span>}
          {children}
        </label>
      </div>
    )
  }
)
