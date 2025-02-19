import { aboutItems } from "@/data/about";
import Paragraph from "../Typography/Paragraph"
import AboutItem from "../AboutItem/AboutItem";
import Title from "../Typography/Title";

const AboutInfo = () => {
  return (
    <section className="py-[40px]">
      <div className="container text-center">
        <div className="max-w-[1000px] mx-auto">
          <Title variant="h2">
            All you have to do is make the product. Podia takes care of the details for you.
          </Title>
          <Paragraph>
            Podia lets you make your sales page, take payments, and give your customers access all in one place. Host and sell your products without needing to figure out a handful of new tools.
          </Paragraph>
        </div>
        <div className="flex md:flex-row flex-col mt-10 gap-[30px]">
          {
            aboutItems.map((item, index) => <AboutItem key={`${index}-about-item`} {...item} />)
          }
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;