import React, { FC, useCallback, useState } from 'react'

import Image from 'next/image'

import s from './Sidebar.module.scss'

import { Theme } from 'main/providers/ThemeProvider/lib/ThemeContext'
import { useTheme } from 'main/providers/ThemeProvider/lib/useTheme'
// import { getUser } from 'entities/viewer/model/selectors/getUser/getUser'
// import { Logout } from 'features/Auth/Logout/ui/Logout'
// import avatar from 'shared/assets/avatar.png'
// import arrowLeft from 'shared/assets/icon/arrow-left.svg'
// import arrowRight from 'shared/assets/icon/arrow-right.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { theme } = useTheme()
  // const { login } = useSelector(getUser)
  const [collapsed, setCollapsed] = useState(false)

  const onLogoutHandler = useCallback(() => {}, [])

  const onCollapsedHandler = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <aside
      data-testid={'sidebar'}
      className={classNames(s.Sidebar, { [s.closing]: collapsed }, [className])}
    >
      <div className={s.userBlock}>
        {/*<Image width={'70px'} height={'70px'} className={s.avatar} src={avatar} alt={'avatar'} />*/}
        {/*<span className={classNames(s.text, { [s.display]: collapsed }, [])}>{login}</span>*/}
      </div>
      <div className={s.footer}>
        <ThemeSwitcher>
          {
            <span className={classNames(s.text, { [s.display]: collapsed }, [])}>
              {theme === Theme.Dark ? 'Dark mode' : 'Light mode'}
            </span>
          }
        </ThemeSwitcher>
        {/*<Logout collapsed={collapsed} onClick={onLogoutHandler} />*/}

        <Button
          theme={ButtonTheme.Clear}
          data-testid={'toggle-btn'}
          onClick={onCollapsedHandler}
          className={classNames(s.arrowContainer, {}, [s.btnArrow])}
        >
          {/*{!collapsed ? (*/}
          {/*    <Image src={arrowLeft} fill={} />*/}
          {/*  // <ArrowLeft style={{ fill: 'var(--color-primary)' }} width={'12px'} height={'12px'} />*/}
          {/*) : (*/}
          {/*  // <ArrowRight style={{ fill: 'var(--color-primary)' }} width={'12px'} height={'12px'} />*/}
          {/*)}*/}
        </Button>
      </div>
    </aside>
  )
}
