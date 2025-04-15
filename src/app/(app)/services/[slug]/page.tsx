import { Header } from '../components/Header'
import GridComponent from '../components/ContentGrid'
import { Contact } from '../../components/Contact'
import Footer from '../../components/Footer'
import { Paragraph } from '../components/Paragraph'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Service } from '@/payload-types'

interface ServiceDetailPageProps {
  params: {
    slug: string
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = params

  const pageTitle = slug.charAt(0).toUpperCase() + slug.slice(1)

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'services',
    where: {
      title: {
        equals: pageTitle,
      },
    },
  })

  if (!data.docs.length) {
    return <p>Service not found</p>
  }

  const service: Service = data.docs[0]
  const teamImageData = service.image

  const imageUrl =
    typeof teamImageData === 'object' && teamImageData !== null && 'url' in teamImageData
      ? teamImageData.url
      : '/default-image.jpg'

  return (
    <main>
      <Header title={service.title} image={imageUrl || ''} subtitle={service.description} />
      <div className="flex justify-center items-center gap-8 p-6 pb-20">
        <GridComponent>
          {service.paragraphs?.map((para, index) => (
            <div key={index}>
              <Paragraph title={para.paragraphTitle} content={para.paragraph} />
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
