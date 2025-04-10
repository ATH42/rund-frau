import type { NextPage } from 'next'

const FAQ: NextPage = () => {
    return (
        <section className="min-h-screen bg-primary-light p-8 lg:p-16">
            <h1 className="mb-8 text-4xl font-bold text-secondary-dark">
                Häufige Fragen
            </h1>
            <p className="mb-4 text-lg text-secondary">
                Antworten auf die häufigsten Fragen rund um unser Geburtshaus.
            </p>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-secondary-dark">
                        Frage 1
                    </h2>
                    <p className="mt-2 text-secondary">
                        Antwort auf die Frage 1.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-secondary-dark">
                        Frage 2
                    </h2>
                    <p className="mt-2 text-secondary">
                        Antwort auf die Frage 2.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-secondary-dark">
                        Frage 3
                    </h2>
                    <p className="mt-2 text-secondary">
                        Antwort auf die Frage 3.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FAQ
