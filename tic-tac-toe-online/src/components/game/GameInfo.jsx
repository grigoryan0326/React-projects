import GameSymbol from "./GameSymbol"

export default function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return (
      <div className='mb-[10px] flex items-center gap-[10px] text-[24px]'>
        Ничья
      </div>
    )
  }

  if (winnerSymbol) {
    return (
      <div className='mb-[10px] flex items-center gap-[10px] text-[24px]'>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    )
  }

  return (
    <div className='mb-[10px] flex items-center gap-[10px] text-[24px]'>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  )
}
