import { useCallback } from 'react'

import s from './LoginForm.module.scss'

import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export const LoginForm = () => {
  // const { error, data } = useCreateRequestTokenQuery({})
  // const [authenticateWithLogin] = useAuthenticateWithLoginMutation()
  // const [createSessionId] = useCreateSessionIdMutation()
  // const dispatch = useAppDispatch()
  // const userName = useSelector(getUserName)
  // const password = useSelector(getPassword)
  // const errorUserName = useSelector(getErrorUserName)
  // const errorPassword = useSelector(getErrorPassword)

  const onChangeUserName = useCallback((value: string) => {}, [])

  const onChangePassword = useCallback((value: string) => {}, [])

  const onBlurPassword = useCallback(() => {}, [])

  const onBlurUserName = useCallback(() => {}, [])
  const handleSubmit = async (e: React.FormEvent) => {}

  return (
    <div className={s.LoginForm}>
      <Text theme={TextTheme.Secondary} title={'Sign In'} />
      <form className={s.form} onSubmit={handleSubmit}>
        <Input
          // error={errorUserName}
          onBlur={onBlurUserName}
          // value={userName}
          onChange={onChangeUserName}
          label={'User name'}
        />
        <Input
          // error={errorPassword}
          onBlur={onBlurPassword}
          // value={password}
          onChange={onChangePassword}
          type={'password'}
          label={'Password'}
          className={s.mb}
        />
        <Button theme={ButtonTheme.Primary} type={'submit'}>
          Sign In
        </Button>
      </form>
    </div>
  )
}
