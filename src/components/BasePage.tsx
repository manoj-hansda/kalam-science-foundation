import Banner from "./Banner";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const BasePage = (props: { pathname: string; children: React.ReactNode }) => {
  return (
    <>
      <Header />
      { props.pathname === '/' && <Banner /> }
      <div className="max-w-6xl mx-auto min-h-56 p-10">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default BasePage;
