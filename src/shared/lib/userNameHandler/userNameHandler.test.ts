import { userNameHandler } from './userNameHandler'

describe('userNameHandler', () => {
  test('should return', () => {
    const name = 'test@mail.ru'

    expect(userNameHandler(name)).toEqual('test')
  })

  test('length check', () => {
    const name = '1234567890123456789012345@mail.ru'

    expect(userNameHandler(name)).toEqual('12345678901234567890...')
  })
})
