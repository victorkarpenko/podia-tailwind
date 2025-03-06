import Paragraph from "../Typography/Paragraph";
import Title from "../Typography/Title";
import { productsData } from "./productsData";
import ProductInfo from "../ProductInfo/ProductInfo";

const WhatProducts = () => {
  return (
    <section className="py-[40px]">
      <div className="container">
        <div className="max-w-[1000px] mx-auto text-center mb-8">
          <Title variant="h2">
            What kinds of products can you sell with Podia?
          </Title>
          <Paragraph>
            Podia gives you the flexibility to sell whatever you want. That means you have more ways to grow your creator business.
          </Paragraph>
        </div>
        {
          productsData.map((product) => (
            <ProductInfo key={product.name} product={product} />
          ))
        }
      </div>
    </section>
  );
};

export default WhatProducts;

