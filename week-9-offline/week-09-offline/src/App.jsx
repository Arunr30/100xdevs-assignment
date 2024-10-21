function App() {
  return (
    <div
      style={{
        background: 'gray',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 20,
          gap: 10,
        }}
      >
        <div>
          <div>
            <PostComponent />
          </div>
          <br />
          <div>
            <PostComponent />
          </div>
          <br />
          <div>
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

function PostComponent() {
  return (
    <div
      style={{
        background: 'white',
        width: 200,
        borderWidth: 1,
        height: 100,
        borderRadius: 10,
        padding: 20,
      }}
    >
      <div style={{ display: 'flex ' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s"
          alt=""
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ marginLeft: 20, fontSize: 10 }}>
          <b>100x devs</b>
          <div>23k followers</div>
          <div>21m</div>
        </div>
      </div>

      <div>wanna know how this peoples won bounties? join us</div>
    </div>
  )
}

export default App
