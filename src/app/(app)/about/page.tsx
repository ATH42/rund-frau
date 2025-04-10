import type { NextPage } from 'next'

const About: NextPage = () => {
    return (
        <section className="min-h-screen bg-primary-light p-8 lg:p-16">
            <h1 className="mb-8 text-4xl font-bold text-secondary-dark">
                Über Uns
            </h1>
            <p className="text-lg text-secondary">
                Erfahren Sie mehr über das Geburtshaus Rundfrau Leipzig und
                unser Team.
            </p>
            <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-secondary-dark">
                    Unsere Mission
                </h2>
                <p className="text-secondary">
                    Unsere Mission ist es, werdenden Eltern die bestmögliche
                    Unterstützung zu bieten.
                </p>
                <h2 className="text-2xl font-bold text-secondary-dark">
                    Unser Team
                </h2>
                <p className="text-secondary">
                    Lernen Sie die engagierten Fachkräfte kennen, die für Sie da
                    sind.
                </p>
            </div>
        </section>
    )
}

export default About
