import { render, screen } from '@testing-library/react'

import { Text, TextTheme } from './Text'

describe('Text component tests', () => {
  test('presence test', () => {
    render(<Text title={'Test'} />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('have class', () => {
    render(<Text title={'Test'} theme={TextTheme.Primary} />)
    expect(screen.getByText('Test')).toHaveStyle({ color: 'color: var(--color-primary)' })
    screen.debug()
  })

  test('have class', () => {
    render(<Text text={'test'} theme={TextTheme.Secondary} />)
    expect(screen.getByText('test')).toHaveStyle({ color: 'color: var(--color-secondary)' })
    screen.debug()
  })
})
