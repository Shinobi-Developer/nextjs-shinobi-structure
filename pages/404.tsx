import Container from 'components/Container';
import NotFoundIllustration from 'components/NotFoundIllustration';
import { Wrapper, ImageContainer, Title, Description } from './components/404Components';

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <NotFoundIllustration />
        </ImageContainer>
        <Title>404</Title>
        <Description>Oh, that&apos;s unfortunate! Page not found 😔</Description>
      </Container>
    </Wrapper>
  );
}
