import Image from "next/image"

const Logo = (props: { className: string }) => {
  return (
    <Image src="/images/logo.png" width="100" height="100" alt="logo" className={props.className} />
  )
}

export default Logo;