import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from '.'

describe('<Navbar/>', () => {
  it('should render Navbar correctly ', () => {
    render(<Navbar/>)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
 })
