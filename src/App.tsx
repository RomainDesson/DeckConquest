import { GameLayoutUi } from './components/GameLayout/GameLayoutUi'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <DndProvider backend={HTML5Backend}>
        <GameLayoutUi />
      </DndProvider>
    </div>
  )
}

export default App
