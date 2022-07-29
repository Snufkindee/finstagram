import Logo from './Logo'
import Search from './Search'
import IconWrapper from './IconWrapper'
import ProfileImage from './ProfileImage'
import { MdOutlineExplore, MdHomeFilled } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbBrandTelegram } from 'react-icons/tb'
import { BsPlusSquare } from 'react-icons/bs'


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 h-14 gap-5">
      <Logo />
      <Search />
      <div className="flex items-center gap-5">
        <ul className="flex items-center gap-3 sm:gap-5">
          <IconWrapper Icon={MdHomeFilled} />
          <IconWrapper Icon={TbBrandTelegram} />
          <IconWrapper Icon={BsPlusSquare} />
          <IconWrapper Icon={MdOutlineExplore} />
          <IconWrapper Icon={AiOutlineHeart} />
        </ul>
        <ProfileImage />
      </div>
    </nav>
  )
}

export default Navbar