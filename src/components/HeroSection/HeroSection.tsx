import Image from 'next/image';
import Subtitle from '../Typography/Subtitle';
import Title from '../Typography/Title';
import Paragraph from '../Typography/Paragraph';

const HeroSection = () => {
  return (
    <section className='py-[40px]'>
      <div className="container md:flex block items-center">
        <div className='flex-1 mr-[40px]'>
          <Subtitle>
            Digital products
          </Subtitle>
          <Title>
            Sell online courses, coaching sessions, webinars, workshops, ebooks, and anything you can think of on Podia
          </Title>
          <Paragraph>
            Get everything you need in one place that you own. Podia takes care of hosting products, taking payments, and getting products to your customers. And you always control your own work.
          </Paragraph>
        </div>
        <div className='relative flex-1 w-full aspect-square mx-auto xs max-w-[350px] mt-4 md:mt-0 md:max-w-full'>
          <Image src='/hero-image.jpg' fill alt='hero-image' objectFit='contain' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;