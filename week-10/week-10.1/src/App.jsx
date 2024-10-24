import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      allen
      <BrowserRouter>
        <Link to={'/neet/class-11'}>Class 11</Link> <br />
        <Link to={'/neet/class-12'}>Class 12</Link>
        <br />
        <Link to={'/'}>Allen</Link>
        <Routes>
          <Route path="/neet/class-11" element={<Class11 />} />
          <Route path="/neet/class-12" element={<Class12 />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Class11() {
  return <div>hello from class 11</div>
}

function Class12() {
  return <div>hello from class 12</div>
}

function Index() {
  return <div>home page</div>
}
export default App
