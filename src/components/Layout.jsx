import './Layout.css'
import TopHeader from './TopHeader'
import Header from './Header'
import Footer from './Footer'
import BottomFooter from './BottomFooter'
import FloatingContactButtons from './FloatingContactButtons'

export default function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomFooter />
      <FloatingContactButtons />
    </>
  )
}
