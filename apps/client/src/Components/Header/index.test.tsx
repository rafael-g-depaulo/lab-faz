import render from 'Utils/render'
import Header from './index'

it('renders header component', () => {
  expect(() => render(<Header />)).not.toThrow()
})

describe('Check links succesfully redirects to another page', () => {
  const {
    getByText,
    getByRole,
    getByTestId
  } = render(<Header />);
  it('check link of home page and text logo', () => {
    expect(getByTestId('home').closest('a')).toHaveAttribute('href', '/')
    expect(getByRole('img')).toHaveAttribute("alt", "logo")
  })

  it('check link of about us page', () => {
    expect(getByText('QUEM SOMOS').closest('a')).toHaveAttribute('href', '/about')
  })

  it('check link of list courses page', () => {
    expect(getByText('CURSOS').closest('a')).toHaveAttribute('href', '/classes')
  })

  // it('check link of calendar page', () => {
  //   expect(getByText('AGENDA').closest('a')).toHaveAttribute('href', '/calendar')
  // })

  it('check link of blog page', () => {
    expect(getByText('BLOG').closest('a')).toHaveAttribute('href', '/blog')
  })

  it('check link of professionals page', () => {
    expect(getByText('BUSCA DE PROFISSIONAIS').closest('a'))
    .toHaveAttribute('href', '/busca-profissionais')
  })
})

describe('Check user session links', () => {
  const { getByText } = render(<Header />);
  it('check signin button', () => {
    expect(getByText('ENTRAR').closest('a')).toHaveAttribute('href', '/login')
  })

  it('check sign up button', () => {
    expect(getByText('CADASTRE-SE').closest('a')).toHaveAttribute('href', '/signup')
  })
})
