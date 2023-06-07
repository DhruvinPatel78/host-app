import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("remoteApp/counter"))
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const counterProps: any = {
        defaultCount: 5
    }
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
        <p className={'m-0 p-0'}>Host App</p>
          <Counter {...counterProps} />
      </main>
  )
}
