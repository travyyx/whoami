import twitter from '/twitter.svg'
import github from '/github.svg'
import reddit from '/reddit.svg'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type Inputs = {
  name: string
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.name)
    navigate(`/traits/${data.name}`)
  }

  return (
  <main className="h-screen w-screen flex flex-col justify-center bg-black items-center text-white">
    <h1 className=' text-4xl md:text-5xl font-semibold mb-4'>Who•am•i.</h1>
    <h1 className='text-xl md:text-2xl w-[27rem] text-center'>Get instantly your traits and see <span className='italic font-extrabold text-blue-500'>Who•Are•You</span> by only your name.</h1>
    <form action="submit" className='mt-6 border p-4 h-64 flex flex-col items-center justify-center rounded-lg md:w-96 gap-2 border-neutral-800 mb-6 w-80' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className='text-xl w-full'>Name</label>
      <input type="text" id="name" placeholder="John Doe" className='bg-transparent border w-full p-1.5 rounded-lg border-neutral-800 placeholder:text-neutral-800' {...register("name", {required: true})}/>
      {errors.name && <span className=' text-red-500 font-semibold w-full'>Please enter your name.</span>}
      <button type="submit" className='w-36 border rounded-lg text-white hover:bg-neutral-900 border-neutral-900 transition-colors duration-200 p-2 text-lg mt-3'>Get Traits.</button>
    </form>
    <h1 className='text-xl mb-4'>Made with Love by Ayomide.</h1>
    <div className='flex gap-5 items-center'>
      <a href="https://www.google.com" target='_blank' className='hover:bg-neutral-900 transition-all duration-200 border p-1.5 border-neutral-900 rounded-lg'>
      <img src={twitter} alt="twitter" />
      </a>
      <a href="https://www.google.com" target='_blank' className='hover:bg-neutral-900 transition-all duration-200 border p-1.5 border-neutral-900 rounded-lg'>
      <img src={github} alt="twitter" />
      </a>
      <a href="https://www.google.com" target='_blank' className='hover:bg-neutral-900 transition-all duration-200 border p-1.5 border-neutral-900 rounded-lg'>
      <img src={reddit} alt="twitter" />
      </a>
    </div>
  </main>
  )
}

export default App
