import type { NextPage } from 'next'

const Rooms: NextPage = () => {
    return (
        <section className="min-h-screen bg-primary-light p-8 lg:p-16">
            <h1 className="mb-8 text-4xl font-bold text-secondary-dark">
                Unsere Räume
            </h1>
            <p className="mb-4 text-lg text-secondary">
                Entdecken Sie die gemütlichen und funktionalen Räume unseres
                Geburtshauses.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="text-2xl font-bold text-secondary-dark">
                        Raum 1
                    </h2>
                    <p className="mt-2 text-secondary">
                        Beschreibung des Raums.
                    </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="text-2xl font-bold text-secondary-dark">
                        Raum 2
                    </h2>
                    <p className="mt-2 text-secondary">
                        Beschreibung des Raums.
                    </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="text-2xl font-bold text-secondary-dark">
                        Raum 3
                    </h2>
                    <p className="mt-2 text-secondary">
                        Beschreibung des Raums.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Rooms
