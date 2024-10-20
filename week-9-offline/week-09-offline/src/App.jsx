function App() {
  return (
    <div style={{ background }}>
      <PostComponent />
    </div>
  )
}

const style = { width: 200, backgroundColor: 'white', display: 'flex', gap: 10 }

function PostComponent() {
  return (
    <div>
      <div style={style}>
        <img
          src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
          alt="github logo"
          style={{
            width: 20,
            height: 20,
            borderRadius: 20,
          }}
        />
        <div>
          <b>github</b>
        </div>
        <div>
          23,000 followers
          <div>12m</div>
        </div>
      </div>

      <div style={{ fontSize: 20, marginTop: 20 }}>
        want to know how to win bounties? won around $60000 bounties
      </div>
    </div>
  )
}
export default App
