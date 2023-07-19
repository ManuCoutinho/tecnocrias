import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Cards } from '.'

const propsMock = [
  {
    title: 'title test',
    description: 'some description'
  }
]

const allPropsMock = [
  {
    title: 'title test',
    description: 'some description',
    href: '#anchor',
    link: 'the moon'
  }
]
describe('<GridCards/>', () => {
  it('should render GridCards correctly  with basic props', () => {
    render(<Cards cardList={propsMock} />)
    expect(screen.getByTestId('grid-cards')).toBeInTheDocument()
    expect(screen.getByText(/some description/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
  it('should render GridCards correctly with all props', () => {
    render(<Cards cardList={allPropsMock} />)
    expect(screen.getByRole('link', { name: /moon/i })).toHaveAttribute(
      'href',
      '#anchor'
    )
  })
  it('should match to snapshot', () => {
    const { container } = render(<Cards cardList={allPropsMock} />)
    expect(container).toMatchSnapshot()
  })
})
