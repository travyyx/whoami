import twitter from '/twitter.svg'
import github from '/github.svg'
import reddit from '/reddit.svg'

function App() {

  function getTraits(e) {
    e.preventDefault()
  }
  return (
  <main className="h-screen w-full flex flex-col justify-center bg-black items-center text-white">
    <h1 className='text-5xl font-semibold mb-4'>Who-am-i.</h1>
    <h1 className='text-2xl w-[27rem] text-center'>Get instantly your traits and see <span className='italic font-extrabold text-blue-500'>Who-Are-You</span> by only your name.</h1>
    <form action="submit" className='mt-6 border-2 p-4 h-64 flex flex-col items-center justify-center rounded-lg w-96 gap-2 border-neutral-800 mb-6' onSubmit={getTraits}>
      <label htmlFor="name" className='text-xl w-full'>Name</label>
      <input type="text" name="name" id="name" placeholder="John Doe" className='bg-transparent border-2 w-full p-1.5 rounded-lg border-neutral-800 placeholder:text-neutral-800'/>
      <button type="submit" className='w-36 bg-white rounded-lg text-black hover:bg-neutral-200 transition-colors duration-200 p-2 text-lg mt-3'>Get Traits.</button>
    </form>
    <h1 className='text-xl mb-4'>Made with Love by Ayomide.</h1>
    <div className='flex gap-5 items-center'>
      <a href="https://www.google.com" target='_blank'>
      <img src={twitter} alt="twitter" />
      </a>
      <a href="https://www.google.com" target='_blank'>
      <img src={twitter} alt="twitter" />
      </a>
      <a href="https://www.google.com" target='_blank'>
      <img src={twitter} alt="twitter" />
      </a>
    </div>
  </main>
  )
}

export default App
