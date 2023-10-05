import {BrowserRouter} from 'react-router-dom'
import RouterView from "./router/index.tsx";


function App() {
  return (
      <BrowserRouter>
        <RouterView></RouterView>
      </BrowserRouter>
  )
}

export default App
