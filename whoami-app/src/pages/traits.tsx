import { useNavigate, useParams } from "react-router-dom";
type Params = {
    name: string
}
function TraitsPage() {
    const params = useParams<Params>()
    const navigate = useNavigate()

    return (
        <main className="h-screen w-full flex flex-col justify-center bg-black items-center text-white">
            {params.name}
        </main>
    )
}

export default TraitsPage