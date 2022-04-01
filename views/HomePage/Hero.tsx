import { HeroWrapper, Contents, CustomOverTitle, Heading, Description, ImageContainer } from './components/HeroComponents';
import HeroIllustration from 'components/HeroIllustation';


export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>the coolest, saas product you have ever seen</CustomOverTitle>
        <Heading>Make your life easier with our SaaS</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
          repudiandae perspiciatis nostrum praesentium, unde pariatur tempora magni rem. Necessitatibus facilis obcaecati ratione.
        </Description>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}
