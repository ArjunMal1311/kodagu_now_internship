import LastBody from '@/components/LastBody'
import MainBody from '@/components/MainBody'
import SideNavBar from '@/components/SideNavBar'
import TopBar from '@/components/TopBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <SideNavBar />
      <div className='flex-col w-full'>
        <TopBar />
        <MainBody />
        <LastBody />
      </div>
    </main>
  )
}
