import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray-100 flex flex-col items-center justify-center h-screen'>
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
  )
}