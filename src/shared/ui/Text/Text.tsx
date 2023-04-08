import React, { FC, memo, ReactNode } from 'react'

import { classNames } from '../../lib/classNames/classNames'

import s from './Text.module.scss'

export enum TextSize {
  Low = 'low',
  Middle = 'middle',
  High = 'high',
}

export enum TextThem {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
  Error = 'error',
}

interface TextProps {
  className?: string
  theme?: TextThem
  title?: string
  text?: string
  textSize?: TextSize
  children?: ReactNode
}

export const Text: FC<TextProps> = memo(
  ({ className, theme = 'primary', text, title, textSize = 'low', children }) => {
    return (
      <div className={classNames(s.Text, {}, [className, s[theme]])}>
        {title && <span className={s.title}>{title}</span>}
        {text && <span className={classNames(s.text, {}, [s[textSize]])}>{text}</span>}
        {children}
      </div>
    )
  }
)
