import { useState } from "react"
import Header from "@/components/header"
import { GameTitle, GameInfo, GameField } from "@/components/game"

const HomePage = () => {
  const [playersCount, setPlayersCount] = useState(4)

  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <main className='pt-6 mx-auto w-max'>
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className='mt-4'
          playersCount={playersCount}
        />
        <GameField
          className='mt-6 mb-6'
          playersCount={playersCount}
        />
      </main>
    </div>
  )
}

export default HomePage
