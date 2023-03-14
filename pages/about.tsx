// import Header from '@/components/common/header';
import { MainLayout } from '@/components/layout';
import dynamic from 'next/dynamic';
import * as React from 'react';

const Header = dynamic(() => 
  import('@/components/common/header'),
 { ssr: false },
 )

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  return (
    <div>
        <Header />
        <h1>About Page</h1>
    </div>
  );
}
 

export async function getServerSideProps() {
    return {
      props: {}, // will be passed to the page component as props
    }
  }