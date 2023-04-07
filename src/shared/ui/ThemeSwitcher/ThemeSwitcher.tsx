import React, { FC, ReactNode } from 'react'

import s from './ThemeSwitcher.module.scss'

import { Theme } from 'main/providers/ThemeProvider/lib/ThemeContext'
import { useTheme } from 'main/providers/ThemeProvider/lib/useTheme'
// import { ReactComponent as Dark } from 'shared/assets/icon/darkTheme.svg'
// import { ReactComponent as Light } from 'shared/assets/icon/lightTheme.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
  children: ReactNode
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, children }) => {
  const { theme, toggleTheme } = useTheme()
  const fill = theme === Theme.Dark ? '#fff' : '#000'

  return (
    <div className={classNames(s.ThemeSwitcher, {}, [className])}>
      <Button className={s.btn} onClick={toggleTheme} theme={ButtonTheme.Clear}>
        {/*{theme === Theme.Light ? (*/}
        {/*  <Light style={{ fill: 'var(--color-primary)' }} />*/}
        {/*) : (*/}
        {/*  <Dark style={{ fill: 'var(--color-primary)' }} />*/}
        {/*)}*/}
        {children}
      </Button>
    </div>
  )
}
