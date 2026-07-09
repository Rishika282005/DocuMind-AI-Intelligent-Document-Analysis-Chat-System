import {useState} from "react";

import axios from "axios";

export default function Search(){

const[query,setQuery]=useState("");

const[results,setResults]=useState([]);

const search=async()=>{

const res=await axios.post(

"http://127.0.0.1:8000/search",

{

query

}

);

setResults(res.data.results);

}

return(

<div className="bg-white rounded-xl shadow-lg p-6">

<h2 className="text-2xl font-bold">

🔍 Semantic Search

</h2>

<input

value={query}

onChange={(e)=>setQuery(e.target.value)}

placeholder="Search..."

className="w-full border rounded p-3 mt-4"

/>

<button

onClick={search}

className="bg-green-600 text-white rounded px-6 py-2 mt-4">

Search

</button>

<div className="mt-4">

{

results.map((item, i) => (

    <div
        key={i}
        className="bg-gray-100 rounded p-3 mb-3"
    >

        <p>{item.text}</p>

        <p className="text-green-600 text-sm mt-2">
            Match Score: {item.score}
        </p>

    </div>

))

}

</div>

</div>

)

}