import { render, screen } from '@testing-library/react'

import { Text, TextSize, TextThem } from './Text'

describe('Text component tests', () => {
  test('presence test', () => {
    render(<Text title={'Test'} />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('have class', () => {
    render(<Text title={'Test'} theme={TextThem.Accent} />)
    expect(screen.getByText('Test')).toHaveStyle({ color: 'var(--color-accent)' })
    screen.debug()
  })

  test('have class', () => {
    render(<Text text={'test'} textSize={TextSize.Middle} />)
    expect(screen.getByText('test')).toHaveClass('middle')
    screen.debug()
  })
})
