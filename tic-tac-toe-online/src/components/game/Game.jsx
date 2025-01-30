import { useState } from "react"
import Head from "next/head"

import GameInfo from "@/components/game/GameInfo"
import GameCell from "@/components/game/GameCeil"
import GameSymbol from "@/components/game/GameSymbol"
import UseGameState from "@/hooks/UseGameState"

import { SYMBOL_O, SYMBOL_X } from "@/constants/Constants"

export default function HomePage() {
  const {
    cells,
    currentStep,
    winnerSequence,
    isDraw,
    handleCellClick,
    handleReload,
    winnerSymbol,
  } = UseGameState()

  const renderSymbol = (symbol) => (
    <span className={`symbol ${GameSymbol(symbol)}`}>{symbol}</span>
  )

  return (
    <>
      <Head>
        <title>Tic-Tac-Toe</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <div className='flex flex-col items-center w-[250px] my-24 mx-auto border border-[#229abf] p-5'>
        <GameInfo
          isDraw={isDraw}
          winnerSymbol={winnerSymbol}
          currentStep={currentStep}
        />
        <div className='relative grid grid-cols-[repeat(3,_70px)] grid-rows-[repeat(3,_70px)] pl-[1px] pt-[1px]'>
          {cells.map((symbol, index) => (
            <GameCell
              key={index}
              symbol={symbol}
              isWinner={winnerSequence?.includes(index)}
              onClick={() => handleCellClick(index)}
            />
          ))}
        </div>
        <button
          className='mt-5 border border-[#229abf] rounded-[5px] px-[10px] py-[5px]
  bg-transparent text-[#229abf] hover:border-white hover:text-white duration-300 ease-in-out'
          onClick={handleReload}
        >
          Сбросить
        </button>
      </div>
    </>
  )
}
