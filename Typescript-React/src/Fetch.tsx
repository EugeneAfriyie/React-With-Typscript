import React, { useEffect, useState } from 'react';

const Fetch = () => {
  // Define the data type
  type dataType = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };

  // State to hold the list of users (an array of dataType objects)
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Update the state with the fetched data
      })
      .catch((error) => console.error('Error:', error));
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      {/* Map through the data array to display each user's name */}
      {data.length > 0 ? (
        data.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <br />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fetch;
