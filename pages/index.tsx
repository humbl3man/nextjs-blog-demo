import { InferGetStaticPropsType, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styled from '@emotion/styled';
import { siteTitle } from '../config/site';
type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  padding: 5rem 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  list-style: none;
  padding: 0;
  margin: 0 0 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  a {
    padding: 1rem;
    border: 1px solid var(--text-color);
    border-radius: 4px;
    transition: all 300ms ease;
    &:hover {
      border-color: var(--accent-color2);
      color: var(--accent-color2);
    }
  }
`;

const Title = styled.h1`
  color: var(--heading-color);
`;

const title: string = 'My Next JS Blog';
export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          <p>{siteTitle}</p>
        </Title>
      </Main>
      <List>
        {posts.map((p: Post) => {
          return (
            <Link key={p.id} href={`/posts/${p.id}`}>
              {p.title}
            </Link>
          );
        })}
      </List>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const posts: Post[] = data;

  return {
    props: {
      posts
    }
  };
};
