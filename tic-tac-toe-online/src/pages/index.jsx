import Header from "@/components/header"
import { GameTitle, GameInfo, GameField } from "@/components/game"

const HomePage = () => {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <Header />
      <main className='pt-6 mx-auto max-w-max'>
        <GameTitle />
        <GameInfo className='mt-4' />
        <GameField className='mt-4' />
      </main>
    </div>
  )
}

export default HomePage
