import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray-200'>
    <div className=' flex flex-col items-center justify-center h-screen'>
      <Image
        src='/logo.png'
        alt='A pineapple'
        width={200}
        height={200}
        className='mb-4'
      />
      <h1 className='font-bold text-5xl'>Pineappletwo</h1>
      <p>SpongeBob lives in a what under the sea?</p>
    </div>


      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='font-bold text-5xl text-center mb-4'>Projects</h1>
        <div className='grid grid-cols-2 gap-4 w-full max-w-screen-xl'>
          <div className='border-2 p-4 w-full rounded-lg bg-white'>
            <img></img>
            <h1 className='text-center'>PineFish</h1>
          </div>
          <div className='border-2 p-4 w-full rounded-lg bg-white'>
            <img></img>
            <h1 className='text-center'>TBD</h1>
          </div>
          <div className='border-2 p-4 w-full rounded-lg bg-white'>
            <img></img>
            <h1 className='text-center'>Project Name</h1>
          </div>
          <div className='border-2 p-4 w-full rounded-lg bg-white'>
            <img></img>
            <h1 className='text-center'>Another Project</h1>
          </div>
        </div>
      </div>
    
    </div>
  )
}