import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Hero from '.'

vi.spyOn(React, 'useEffect')
vi.spyOn(React, 'useState')
vi.spyOn(React, 'useRef')
vi.mock('vanta/dist/vanta.rings.min.js')
describe('<Hero/>', () => {
  it('should render Hero correctly', () => {
    render(<Hero/>)
    const description = screen.getByText(
      /O Tecnocrias está te convocando para embarcar em uma jornada incrível/i
    )
    const container = screen.getByTestId('hero')
    expect(container).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(container).toHaveClass('hero__container')
  })
  it('should render Hero correctly', () => {
    const {container} = render(<Hero />)
    expect(container).toMatchSnapshot()

  })
 })
