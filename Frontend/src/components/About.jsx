import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-4 py-10">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">About BookHub</h1>
        <p className="text-lg text-gray-700 mb-6">
          BookHub is your one-stop destination for discovering, learning, and enjoying a wide variety of books and courses. Our mission is to make learning accessible, fun, and engaging for everyone. Whether you're a student, a lifelong learner, or just looking for your next great read, BookHub has something for you!
        </p>
        <div className="text-gray-600 text-md space-y-2">
          <p>📚 Curated free and premium courses</p>
          <p>🌟 Engaging storybooks and resources</p>
          <p>💡 Easy-to-use, modern interface</p>
          <p>🤝 Community-driven and always growing</p>
        </div>
        <div className="mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BookHub. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default About; 