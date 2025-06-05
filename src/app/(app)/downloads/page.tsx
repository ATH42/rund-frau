import { sanityFetch } from '@/sanity/live'
import { DOWNLOADS_QUERY } from '@/sanity/queries'
import { Downloads } from '@/sanity/types'

export default async function DownloadsPage() {
  const { data: downloads } = await sanityFetch({ query: DOWNLOADS_QUERY })

  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col  gap-12 px-6 py-16 lg:flex-row lg:items-start lg:px-32">
      <div className="flex flex-col text-primary-darker">
        <h2 className="text-header font-ink-blossoms text-primary-darker self-center font-bold mb-4">
          Downloads & Links
        </h2>
        {downloads && downloads.length > 0 ? (
          <ul className="text-lg mb-8 w-full max-w-3xl space-y-10">
            {downloads.map((download: Downloads, idx: number) => (
              <li key={idx}>
                <h3 className="text-2xl font-semibold mb-2">{download.title}</h3>

                {download.contacts?.length && download.contacts.length > 0 && (
                  <div className="mb-4">
                    <ul className="list-disc list-inside text-sm">
                      {download.contacts.map((contact, cIdx: number) => (
                        <li key={cIdx}>
                          {contact.contactName}
                          {contact.phoneNumber && ` – ${contact.phoneNumber}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {download.files?.length && download.files.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Dateien:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {download.files.map((file, fIdx) => (
                        <li key={fIdx}>
                          {file.fileItem?.asset?.url ? (
                            <a
                              href={file.fileItem.asset.url}
                              className="text-blue-500 hover:underline"
                              download
                            >
                              {file.fileName || 'Download'}
                            </a>
                          ) : (
                            file.fileName
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {download.url?.length && download.url?.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-1">Links:</h4>
                    <ul className="list-disc list-inside text-sm">
                      {download.url.map((link, lIdx) => (
                        <li key={lIdx}>
                          <a
                            href={link.urlItem}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.linkName || link.urlItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg mb-8">Bald sind Downloads und Links verfuegbar</p>
        )}
      </div>
    </main>
  )
}
