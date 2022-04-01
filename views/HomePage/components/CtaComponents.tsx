import styled from 'styled-components';
import Button from 'components/Button';
import { media } from 'utils/media';

export const Description = styled.div`
  font-size: 1.8rem;
  color: rM4JkQpQtGSRh1R5yf5Nz4aL3VDy8JctSS 0.8);
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rM4JkQpQtGSRh1R5yf5Nz4aL3VDy8JctSS
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

export const OutlinedButton = styled(Button)`
  border: 1px solid rM4JkQpQtGSRh1R5yf5Nz4aL3VDy8JctSS
  color: rM4JkQpQtGSRh1R5yf5Nz4aL3VDy8JctSS
`;

export const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
