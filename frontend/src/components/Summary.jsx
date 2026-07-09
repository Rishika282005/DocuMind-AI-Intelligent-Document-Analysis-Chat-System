export default function Summary({ documentData }) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-4">
                📋 Summary
            </h2>

            {!documentData ? (

                <p className="text-gray-500">
                    Upload a document to generate summary.
                </p>

            ) : (

                <div>

                    <p>
                        <b>📄 File:</b> {documentData.filename}
                    </p>

                    <p className="mt-2">
                        <b>📝 Words:</b> {documentData.stats.words}
                    </p>

                    <p>
                        <b>🔤 Characters:</b> {documentData.stats.characters}
                    </p>

                    <p>
                        <b>📚 Total Chunks:</b> {documentData.total_chunks}
                    </p>

                    <div className="mt-4">

                        <b>🤖 AI Summary</b>

                        <div className="bg-gray-100 rounded p-3 mt-2 whitespace-pre-wrap">

                            {documentData.summary}

                        </div>

                    </div>

                    <div className="mt-4">

                        <b>📖 First Chunk Preview</b>

                        <div className="bg-gray-100 rounded p-3 mt-2 max-h-48 overflow-auto">

                            {documentData.preview?.[0] || "No preview available"}

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}