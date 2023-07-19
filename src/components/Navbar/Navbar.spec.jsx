import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from '.'

vi.spyOn(React, 'useState')
describe('<Navbar/>', () => {
  it('should render Navbar correctly ', () => {
    render(<Navbar/>)
    const home = screen.getByRole('menuitem', { name: /home/i })
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(home).toBeInTheDocument()
    expect(home.parentNode).toHaveAttribute('href', '#home')
    expect(screen.getByRole('menuitem', { name: /sobre/i })).toBeInTheDocument()
    expect(
       screen.getByRole('menuitem', { name: /desafios/i })
     ).toBeInTheDocument()
    expect(
        screen.getByRole('menuitem', { name: /contato/i })
      ).toBeInTheDocument()
    expect(
         screen.getByRole('menuitem', { name: /comunidade/i })
       ).toBeInTheDocument()

  })
   it('should render the menu item with status active when selected', () => {
    render(<Navbar />)
    const about = screen.getByRole('link', { name: /sobre/i })
    expect(about).toHaveAttribute('data-active', 'false')
    act(() => {
      fireEvent.click(about)
    })
    expect(about).toHaveAttribute('data-active', 'true')
   })
  it('should match to snapshot', () => {
    const { container } = render(<Navbar/>)
    expect(container).toMatchSnapshot()
  });
 })
