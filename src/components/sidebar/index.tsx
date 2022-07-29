import people from '../../mock/users'
import IPerson from '../../types/person'
import Button from './button'
import User from './user'

const Sidebar = () => {
  return (
    <section className="w-[22rem] hidden lg:block lg:fixed ml-[30.5rem] space-y-4 pt-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden w-16 h-16 cursor-pointer">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&h=800&q=80"
              alt="Eino Leino"
            />
          </div>
          <div>
            <h2 className="font-semibold text-md">eino.leino</h2>
            <h3 className="opacity-50">Eino Leino</h3>
          </div>
        </div>
        <Button>Switch</Button>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-semibold opacity-50">Suggestions For You</h1>
        <Button blacked>See All</Button>
      </div>

      <div className='space-y-4'>
        {people.map((person: IPerson) => (
          <User key={person.id} person={person}/>
        ))}
      </div>
    </section>
  )
}

export default Sidebar