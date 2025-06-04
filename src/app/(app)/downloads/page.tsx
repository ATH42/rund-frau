import { fileUrlFor } from '@/sanity/imageUrlBuilder'
import { sanityFetch } from '@/sanity/live'
import { DOWNLOADS_QUERY } from '@/sanity/queries'
import { Downloads } from '@/sanity/types'

export default async function DownloadsPage() {
  const { data: downloads } = await sanityFetch({ query: DOWNLOADS_QUERY })

  return (
    <>
      <main className="relative z-10 flex min-h-screen w-full flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:justify-center lg:items-start lg:px-32">
        <div className="flex flex-col items-center justify-center text-primary-darker">
          <h2 className="text-header font-ink-blossoms text-primary-darker font-bold mb-4">
            Downloads & Links
          </h2>
          {downloads && downloads.length > 0 ? (
            <ul className="text-lg mb-8">
              {downloads.map((download: Downloads) => (
                <li key={download._id} className="mb-4">
                  <h3 className="text-xl font-semibold">{download.title}</h3>
                  <p className="text-sm text-gray-600">{download.description}</p>
                  {download.file ? (
                    <a
                      href={download.file.asset?._ref && fileUrlFor(download.file.asset?._ref)}
                      className="text-blue-500 hover:underline"
                      download
                    >
                      Datei herunterladen
                    </a>
                  ) : (
                    <a
                      href={download.url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link besuchen
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg mb-8">Coming soon!</p>
          )}
        </div>
      </main>
    </>
  )
}
