import { useState } from "react";
import UserCard from "./UserCard";

type PeopleToFollowProb = {
  name: string;
  following: boolean;
};

const initialPeopleToFollow: PeopleToFollowProb[] = [
  { name: "Alena Gouse", following: false },
  { name: "Ruben Bator", following: true },
  { name: "Aspen Stanton", following: true },
  { name: "Madelyn George", following: false },
];

function PeopleToFollow() {
  const [followed, setFollowed] = useState(initialPeopleToFollow);

  const handlePeopleToFollow = (i: number) => {
    setFollowed((prevPeopleToFollow) =>
      prevPeopleToFollow.map((person, index) =>
        index === i ? { ...person, following: !person.following } : person
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">👥 People to Follow</h3>
      <div className="space-y-4">
        {followed.map((person, index) => (
          <UserCard
            key={index}
            person={person}
            index={index}
            handleFollwing={handlePeopleToFollow} // Correctly pass the function
          />
        ))}
      </div>
    </div>
  );
}

export default PeopleToFollow;
