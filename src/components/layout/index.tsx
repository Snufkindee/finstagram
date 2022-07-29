import Header from './Header'
import Main from './Content'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <div className='min-h-screen space-y-5'>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout