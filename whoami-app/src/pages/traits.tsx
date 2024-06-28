import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
type Params = {
    name: string
}

export interface Person {
    name:   string;
    traits: Traits;
}

export interface Traits {
    confidence: number;
    smile:      number;
    cuteness:   number;
    love:       number;
    kindness:   number;
    anger:      number;
}



function TraitsPage() {
    const [person, setPerson] = useState<Person>()
    const params = useParams<Params>()
    const navigate = useNavigate()
    
    const fetchData = async() => {
        try {
            const url = `https://whoami-backend.vercel.app/traits/${params.name?.replace(" ", "%20")}`;
        
            const response = await fetch(url);
            const text = await response.text()
            console.log(JSON.parse(text))
            setPerson(JSON.parse(text))
        } catch {
            alert("An error occurred. Please try again.")
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="h-screen w-screen flex flex-col justify-center bg-black items-center text-white">
            {person && person.name}
        </main>
    )
}

export default TraitsPage