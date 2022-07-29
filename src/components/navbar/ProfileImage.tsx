import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CgProfile, CgBookmark } from 'react-icons/cg'
import { IoSettingsOutline } from 'react-icons/io5'
import { TbRefresh } from 'react-icons/tb'

const ProfileImage = () => {
    return (
      <div className="rounded-full overflow-hidden w-6 h-6 cursor-pointer">
        <Menu as="div">
          <Menu.Button id="menu-button" aria-expanded="true" aria-haspopup="true" data-dropdown-toggle="dropdown-states" type="button">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&h=800&q=80"
              alt="Eino Leino"
            />
          </Menu.Button>

          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items style={{filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.0975)'}} className="absolute right-0 sm:right-auto sm:-ml-48 mt-1 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="absolute w-0 h-0 border-l-[12px] border-r-[12px] border-b-[15px]
            border-transparent border-b-white right-[10%] top-[1%] translate-y-[-100%]"></div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-gray-50'} 
                    group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3`}
                  >
                    <CgProfile size={18}/> Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && 'bg-gray-50'} 
                    group flex w-full items-center rounded-md px-2 py-2 text-sm gap-3`}
                  >
                    <CgBookmark size={20} /> Saved
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && 'bg-gray-50'} 
                    group flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm`}
                  >
                    <IoSettingsOutline size={20} /> Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && 'bg-gray-50'} 
                    group flex w-full gap-3 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <TbRefresh size={20} /> Switch accounts
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-2 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && 'bg-gray-50'} 
                    group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
        </Menu>
      </div>
    )
  }
  
  export default ProfileImage