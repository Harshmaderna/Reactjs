import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Card title="card 1" description="card 1 desc"/>
        <Card title="card 2" description="card 2 desc"/>
        <Card title="card 3" description="card 3 desc"/>
        <Card title="card 4" description="card 4 desc"/>
      </div>
    </>
  )
}

export default App
