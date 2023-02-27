import * as React from 'react';

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  return (
    <div>
        <h1>About Page</h1>
    </div>
  );
}
 

export async function getServerSideProps() {
    return {
      props: {}, // will be passed to the page component as props
    }
  }