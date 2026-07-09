export default function Metrics({ documentData }) {

    if (!documentData)
        return null;

    const stats = documentData.stats;

    return (

        <div className="mt-8">

            <h2 className="text-3xl font-bold mb-6">

                📊 Performance Metrics

            </h2>

            <div className="grid grid-cols-3 gap-6">

                <Metric title="📄 Pages" value={stats.pages} />

                <Metric title="📝 Words" value={stats.words} />

                <Metric title="🔤 Characters" value={stats.characters} />

                <Metric title="📚 Chunks" value={documentData.total_chunks} />

                <Metric title="⏱ Reading Time" value={`${stats.reading_time} min`} />

                <Metric title="📦 File Size" value={`${stats.file_size} KB`} />

            </div>

        </div>

    );

}

function Metric({ title, value }) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h3 className="text-lg font-semibold">

                {title}

            </h3>

            <h1 className="text-3xl font-bold mt-4">

                {value}

            </h1>

        </div>

    );

}