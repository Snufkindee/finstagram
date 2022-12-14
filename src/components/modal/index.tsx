import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Modal = ({show, close}: {show: boolean, close: () => void}) => {
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <div className="flex-col text-center text-sm group divide-y">
                        <button className='w-full py-4 text-red-500 font-bold active:bg-black/[0.1]'>Report</button>
                        <button className='w-full py-4 text-red-500 font-bold active:bg-black/[0.1]'>Unfollow</button>
                        <button className='w-full py-4 active:bg-black/[0.1]'>Add to favorites</button>
                        <button className='w-full py-4 active:bg-black/[0.1]'>Go to post</button>
                        <button className='w-full py-4 active:bg-black/[0.1]' onClick={close}>Cancel</button>
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
