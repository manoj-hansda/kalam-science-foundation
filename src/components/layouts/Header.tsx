import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

const Header = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto md:flex py-6 justify-between items-center">
        <div className="flex">
          <Logo className="mr-3" />
          <div className="text-3xl font-medium">KALAM <br /> SCIENCE <br /> FOUNDATION</div>
        </div>
        <div>
          <blockquote className="text-3xl font-thin italic text-center md:mr-56 mt-10">&quot;Inspiring People&quot;</blockquote>
        </div>
      </div>
      <Navigation />
    </>
  )
}

export default Header;