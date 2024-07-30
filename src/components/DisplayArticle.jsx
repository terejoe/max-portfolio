import React from 'react';
import { useQuery, gql } from '@apollo/client';

export default function DisplayArticle() {
  const GET_ARTICLES = gql`
    query Publication {
      publication(host: "kells.hashnode.dev") {
        post(slug: "getting-started-with-laravel-vuejs-and-inertia") {
          id
          title
          content {
              markdown
          }
        }
      }
    }
  `;


  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p className='text-white'>Loading...</p>;
  if (error) return <p className='text-white'>Error : {error.message}</p>;

  return data.locations?.map(({ id, title, markdown}) => (
    <div key={id}>
      <h3 className='text-white'>{title}</h3>
      {/* <img width="400" height="250" alt="location-reference" src={`${photo}`} /> */}
      <br />
      <b className='text-white'>About this location:</b>
      <p className='text-white'>{markdown}</p>
      <br />
    </div>
  ));
}
