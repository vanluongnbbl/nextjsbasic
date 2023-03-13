import { GetServerSidePropsContext, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any
}

export default function PostDetailPage ({ post }: PostDetailPageProps) {
    const router = useRouter()
    
    return (
    <div>
        <h1>Post Detail Page</h1>
      
        <p>{post?.title}</p>
    </div>
  );
}

export const getStaticPaths = async (
  context: GetServerSidePropsContext
) => {
  const reponse = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const { data } = await reponse.json()

  return {
    paths: data.map((post) => ({ params: { postId: post.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const postId = context.params?.postId
  const reponse = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await reponse.json()
  return {
    props: {
      post: data,
    },
  }
}
