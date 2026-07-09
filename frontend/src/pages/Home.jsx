import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Upload from "../components/Upload";
import Summary from "../components/Summary";
import Chat from "../components/Chat";
import Search from "../components/Search";
import Metrics from "../components/Metrics";
import Insights from "../components/Insights";

export default function Home() {

    const [documentData, setDocumentData] = useState(null);

    return (

        <div className="flex h-screen bg-gray-100">

            <Sidebar />

            <main className="flex-1 overflow-auto p-6">

                <h1 className="text-4xl font-bold mb-6">
                    📄 DocMind AI
                </h1>

                <div className="grid grid-cols-2 gap-6">

                    <Upload setDocumentData={setDocumentData} />

                    <Summary documentData={documentData} />

                    <Chat />

                    <Search />

                    <Insights documentData={documentData}/>

                </div>

                <div className="mt-6">

                    <Metrics documentData={documentData} />

                </div>

            </main>

        </div>

    );
}