import Button from "../Button/Button";
import Paragraph from "../Typography/Paragraph";
import Title from "../Typography/Title";

const GetAccount = () => {
  return (
    <div className="bg-darkBrand rounded-xl py-[30px] lg:py-[60px] px-[15px] text-center">
      <Title variant='h2' color='white'>
        Get your free Podia account
      </Title>
      <Paragraph>
        <span className="text-secondaryBrand">
          Join the 150,000+ creators who use Podia to create websites, sell digital products, and build online communities.
        </span>
      </Paragraph>
      <Button
        variant="light"
      >
        Sign up free
      </Button>
    </div>
  )
};

export default GetAccount;