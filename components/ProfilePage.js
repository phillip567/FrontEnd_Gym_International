import React, { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    savedWorkouts: ["Cardio Routine", "Strength Training"],
    savedHealthTips: ["Eat more protein", "Stay hydrated"],
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Saved Workouts</h3>
        <ul>
          {user.savedWorkouts.map((workout, index) => (
            <li key={index}>{workout}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Saved Health Tips</h3>
        <ul>
          {user.savedHealthTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;