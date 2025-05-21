import { Header } from '../components/Header'
import GridComponent from '../components/ContentGrid'
import { Contact } from '../../components/Contact'
import Footer from '../../components/Footer'
import { Paragraph } from '../components/Paragraph'

import { sanityFetch } from '@/sanity/live'
import { SINGLE_SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'
import { urlFor } from '@/sanity/imageUrlBuilder'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data } = (await sanityFetch({
    query: SINGLE_SERVICE_QUERY,
    params: { title: slug },
  })) as { data: Service }

  if (!data) {
    return <p>Service not found</p>
  }

  const service: Service = data

  return (
    <main>
      <Header
        title={service.title || ''}
        image={service.image ? urlFor(service.image).url() : '/default-image.jpg'}
        subtitle={service.description || ''}
      />
      <div className="flex justify-center items-center gap-8 p-6 pb-20">
        <GridComponent>
          {service.paragraphs?.map((para, index) => (
            <div key={index}>
              <Paragraph title={para.paragraphTitle || ''} content={para.paragraph || ''} />
            </div>
          ))}
        </GridComponent>
      </div>
      <Contact
        imageUrl="/Bilder/hand-auf-bauch.png"
        buttonVariant={'whiteLight'}
        backgroundColor="bg-primary-darker"
        reverse
      />
      <Footer />
    </main>
  )
}
