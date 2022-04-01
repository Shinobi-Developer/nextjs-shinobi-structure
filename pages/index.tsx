import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { EnvVars } from 'env';
import Hero from 'views/HomePage/Hero';
import { HomepageWrapper } from './components/index';


export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
          <Hero />
      </HomepageWrapper>
    </>
  );
}
