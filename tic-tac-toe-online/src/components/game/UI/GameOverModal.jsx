import UIButton from "./UIButton"
import UIModal from "./UIModal"

const GameOverModal = ({ winnerName, players }) => {
  return (
    <div>
      <UIModal
        width={"md"}
        isOpen={!!winnerName}
      >
        <UIModal.Header>Game Over!</UIModal.Header>
        <UIModal.Body>
          <div className='text-sm'>
            Winner: <span className='text-teal-600'>{winnerName}</span>
          </div>
          <div className='justify-between grid grid-cols-2 gap-3 mt-2'>
            {players}
          </div>
        </UIModal.Body>
        <UIModal.Footer>
          <UIButton
            size='md'
            variant='outline'
          >
            Quit
          </UIButton>
          <UIButton
            size='md'
            variant='primary'
          >
            Restart
          </UIButton>
        </UIModal.Footer>
      </UIModal>
    </div>
  )
}
export default GameOverModal
