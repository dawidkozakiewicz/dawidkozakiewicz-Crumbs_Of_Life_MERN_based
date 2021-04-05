import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3
    },
    {
      id: 'u3',
      name: 'Ernst Schwanz',
      image:
        'https://cdn.shopify.com/s/files/1/0638/6243/products/32_245aed8a-e009-4036-b98f-7ca22a9edb90_1024x1024.jpg?v=1571438588',
      places: 3
    }

  ];

  return <UsersList items={USERS} />;
};

export default Users;
