import React from 'react';
import { useQuery, gql } from '@apollo/client';

export default function DisplayArticle() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p className='text-white'>Loading...</p>;
  if (error) return <p className='text-white'>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3 className='text-white'>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b className='text-white'>About this location:</b>
      <p className='text-white'>{description}</p>
      <br />
    </div>
  ));
}
