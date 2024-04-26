import { Link } from 'react-router-dom'

export default function Topics() {
  

  return (
    <>
      <ul className='list-none mt-6 md:mt-8'>
        <li className='md:inline p-3 hover:bg-zinc-50/50 hover:text-white text-neon-cyan rounded-sm'>
          <Link to='/global-warming'>Global warming</Link>
        </li>
        <li className='md:inline p-3 hover:bg-zinc-50/50 hover:text-white text-neon-cyan rounded-sm'>
          <Link to='/greenhouse-gases'>Greenhouse gases</Link>
        </li>
        <li className='md:inline p-3 hover:bg-zinc-50/50 hover:text-white text-neon-cyan rounded-sm'>
          <Link to='/ice-melting'>Ice melting</Link>
        </li>
        <li className='md:inline p-3 hover:bg-zinc-50/50 hover:text-white text-neon-cyan rounded-sm'>
          <Link to='/other-topics'>Other</Link>
        </li>
      </ul>
    </>
  )
}
