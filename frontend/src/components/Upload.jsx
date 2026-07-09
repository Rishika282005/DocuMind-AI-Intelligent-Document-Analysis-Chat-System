import { useState } from "react";
import API from "../api";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Upload({ setDocumentData }) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const uploadFile = async () => {

        if (!file) {
            alert("Please choose a file");
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        setLoading(true);

        try {

            const response = await API.post("/upload", formData);

            setDocumentData(response.data);

        }

        catch (err) {

            console.log(err);

        }

        setLoading(false);

    }

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-5">

                📂 Upload Document

            </h2>

            <label
                className="border-2 border-dashed border-blue-400 rounded-xl h-60 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">

                <FaCloudUploadAlt
                    size={70}
                    className="text-blue-500"
                />

                <p className="mt-4 text-lg">

                    Drag & Drop PDF / DOCX / TXT

                </p>

                <p className="text-gray-500">

                    or click to browse

                </p>

                <input
                    type="file"
                    accept=".pdf,.docx,.txt,.pptx"
                    hidden
                    onChange={(e)=>setFile(e.target.files[0])}
                />

            </label>

            {

                file &&

                <div className="mt-5 bg-gray-100 rounded-xl p-4">

                    <p className="font-semibold">

                        📄 {file.name}

                    </p>

                    <p className="text-gray-500">

                        {(file.size/1024/1024).toFixed(2)} MB

                    </p>

                </div>

            }

            <button

                onClick={uploadFile}

                className="mt-5 bg-blue-600 hover:bg-blue-700 transition text-white w-full py-3 rounded-xl font-bold"

            >

                {

                    loading ?

                    "Uploading..."

                    :

                    "Upload Document"

                }

            </button>

        </div>

    )

}