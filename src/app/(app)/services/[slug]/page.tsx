import { NextPage } from 'next'
import { Header } from '../components/Header'
import GridComponent from '../components/ContentGrid'
import { Paragraph } from '../components/Paragraph'
import { Contact } from '../../components/Contact'
import Footer from '../../components/Footer'

const ServiceDetailPage: NextPage = () => {
  return (
    <main>
      <div>
        <Header image={''} subtitle={''} />
        <GridComponent>
          <Paragraph />

          <Paragraph />
          <Paragraph />
          <Paragraph />
        </GridComponent>
        <Contact
          imageUrl="/Bilder/hand-auf-bauch.png"
          buttonVariant={'whiteLight'}
          backgroundColor="bg-primary-darker"
          reverse
        />
        <Footer />
      </div>
    </main>
  )
}

export default ServiceDetailPage
