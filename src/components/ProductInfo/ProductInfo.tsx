import Button from "../Button/Button";
import Paragraph from "../Typography/Paragraph";
import Subtitle from "../Typography/Subtitle";
import Title from "../Typography/Title";
import Image from "next/image";
import { ProductData } from "../ProductsSection/productsData";
import Feedback from "../Feedback/Feedback";


interface Props {
  product: ProductData;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <>
      <div className="md:flex block items-center my-10">
        <div className='flex-1 md:mr-[40px]'>
          <Subtitle>{product.name}</Subtitle>
          <Title variant="h3">{product.title}</Title>
          <Paragraph>{product.description}</Paragraph>
          <Button variant="text">
            {product.buttonText}
            <i className='bx bx-right-arrow-alt' />
          </Button>
        </div>
        <div className='relative flex-1 w-full aspect-[4/3] mx-auto xs max-w-[350px] mt-4 md:mt-0 md:max-w-full'>
          <Image src={product.image} fill alt='' objectFit='contain' />
        </div>
      </div>
      <Feedback {...product.feedback} />
    </>
  )
};

export default ProductInfo;