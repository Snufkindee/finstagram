interface IProps {
    children: React.ReactNode
  }
  
  const Content = ({ children }: IProps) => {
    return (
      <main>
        <div className="max-w-[53rem] mx-auto lg:flex mb-10">{children}</div>
      </main>
    )
  }
  
  export default Content