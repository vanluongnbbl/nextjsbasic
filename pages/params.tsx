import * as React from 'react';

export interface IParamsProps {
}

export default function ParamsPage (props: IParamsProps) {
  return (
    <div>
        <h1>Params Page</h1>
    </div>
  )
}


export async function getServerSideProps(context) {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5')
    // fake slow query
    await new Promise((resolve) => setTimeout(resolve, 3000))

    return {
        props: {}
    }
} 