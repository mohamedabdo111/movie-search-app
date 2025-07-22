
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='m-8 text-center '>
      <h2 className='text-4xl font-semibold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}