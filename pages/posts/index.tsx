import * as React from 'react';
import { GetServerSidePropsContext, GetStaticProps } from 'next';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {

  return (
    <div>
      <h3>Post list page</h3>
      <ul>
        {
          posts.map((post) => 
            <li key={post.id}>{post.title}</li>
          )
        }
        
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const reponse = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await reponse.json()

  return {
    props: {
      posts: data.data,
    },
  }
}