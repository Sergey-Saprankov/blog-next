import { Inter } from 'next/font/google'
import Head from 'next/head'

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
    </>
  )
}
