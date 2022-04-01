import NextLink from 'next/link';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { CtaWrapper, Stack, Description, OutlinedButton } from './components/CtaComponents';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Lorem ipsum dolor sit amet</OverTitle>
          <SectionTitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus delectus?</SectionTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae accusamus deleniti nihil quas tempora numquam, vitae
            culpa.
          </Description>
          <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button>
                Subscribe to the newsletter <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}