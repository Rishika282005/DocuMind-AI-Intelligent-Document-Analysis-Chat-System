import { useState } from "react";
import axios from "axios";

export default function Chat(){

const[question,setQuestion]=useState("");

const[answer,setAnswer]=useState("");

const askQuestion=async()=>{

const res=await axios.post(

"http://127.0.0.1:8000/chat",

{

question

}

);

setAnswer(res.data.answer);

}

return(

<div className="bg-white rounded-xl shadow-lg p-6">

<h2 className="text-2xl font-bold mb-4">

💬 Ask Questions

</h2>

<input

value={question}

onChange={(e)=>setQuestion(e.target.value)}

placeholder="Ask anything..."

className="w-full border rounded-lg p-3"

/>

<button

onClick={askQuestion}

className="bg-blue-600 text-white px-6 py-2 rounded mt-4">

Ask

</button>

{

answer &&

<div className="mt-4 bg-gray-100 rounded p-4">

<b>Answer</b>

<p>{answer}</p>

</div>

}

</div>

)

}