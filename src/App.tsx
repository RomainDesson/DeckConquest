import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { GameLayoutLogic } from './components/GameLayout/GameLayoutLogic'

function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <DndProvider backend={HTML5Backend}>
        <GameLayoutLogic />
      </DndProvider>
    </div>
  )
}

export default App
