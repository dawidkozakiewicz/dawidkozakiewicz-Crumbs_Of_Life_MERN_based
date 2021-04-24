import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Wrocław',
    description: 'The City Of Gnomes',
    imageUrl:
      'https://ocdn.eu/pulscms-transforms/1/ksTk9kpTURBXy9hZmZmNGU1ODBjZmI5NGI4YTRmZWZlNjIxMTNjMzgzYy5qcGeTlQPNAe4AzRvHzQ-gkwXNAxTNAbyTCaY2MjI0MDAGgaEwAQ/wroclaw.jpg',
    address: 'Wrocław, Rynek, Poland',
    location: {
      lat: 51.1100488,
      lng: 17.0307688
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
