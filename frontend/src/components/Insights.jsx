export default function Insights({documentData}){

if(!documentData) return null;

const insights = documentData?.insights || {
    topics: [],
    dates: [],
    emails: []
};

return(

<div className="bg-white rounded-xl shadow-lg p-6 mt-8">

<h2 className="text-2xl font-bold">

🧠 Document Insights

</h2>

<div className="mt-5">

<h3 className="font-bold">

📌 Key Topics

</h3>

<div className="flex flex-wrap gap-2 mt-2">

{

insights.topics.map((topic,index)=>

<span

key={index}

className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

{topic}

</span>

)

}

</div>

</div>

<div className="mt-6">

<h3 className="font-bold">

📅 Dates

</h3>

{

insights.dates.length===0?

<p>No dates found.</p>

:

<ul>

{

insights.dates.map((d,i)=>

<li key={i}>{d}</li>

)

}

</ul>

}

</div>

<div className="mt-6">

<h3 className="font-bold">

📧 Emails

</h3>

{

insights.emails.length===0?

<p>No emails found.</p>

:

<ul>

{

insights.emails.map((e,i)=>

<li key={i}>{e}</li>

)

}

</ul>

}

</div>

</div>

)

}