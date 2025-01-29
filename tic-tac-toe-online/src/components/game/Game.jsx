import { useState } from "react"
import Head from "next/head"

import GameInfo from "@/components/game/GameInfo"
import GameCell from "@/components/game/GameCeil"
import GameSymbol from "@/components/game/GameSymbol"
import UseGameState from "@/hooks/UseGameState"

import { SYMBOL_O, SYMBOL_X } from "@/constants/Constants"

import "@/styles/game.css"

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
      <div className='game'>
        <GameInfo
          isDraw={isDraw}
          winnerSymbol={winnerSymbol}
          currentStep={currentStep}
        />
        <div className='game-field'>
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
          className='reset'
          onClick={handleReload}
        >
          Сбросить
        </button>
      </div>
    </>
  )
}
