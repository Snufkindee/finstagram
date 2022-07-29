interface IProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }
  
  const IconWrapper = ({ Icon }: IProps) => {
    return (
      <li>
        <a className="cursor-pointer m-0">
          <Icon className="w-7 h-7" />
        </a>
      </li>
    )
  }
  
  export default IconWrapper