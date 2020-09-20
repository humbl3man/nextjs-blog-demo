import styled from '@emotion/styled';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

const PostContainer = styled.article`
  margin: 5rem auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 68rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 2rem;
`;

const BlogPost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <p>{post.body}</p>

      <p>Author: {post.author}</p>
    </PostContainer>
  );
};

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  author: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if (!context.params?.id) {
    return {
      props: {
        post: {
          id: 0,
          userId: 0,
          title: 'Post not Found',
          body: ''
        }
      }
    };
  }

  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const postData = await postRes.json();
  const post: Post = postData;

  const authorRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  const authorData = await authorRes.json();
  const author: User = authorData;

  post.author = author.name;

  return {
    props: {
      post
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const posts: Post[] = data;

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export default BlogPost;
