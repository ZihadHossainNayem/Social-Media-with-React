import { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../context/AuthContext.js";

export const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //dummy data
  const stories = [
    {
      id: 1,
      name: "Hasanul Mukit",
      img: "https://images.pexels.com/photos/2954199/pexels-photo-2954199.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Md. Iqbal Jahan",
      img: "https://images.pexels.com/photos/390023/pexels-photo-390023.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Makshudur Rahman",
      img: "https://images.pexels.com/photos/3879160/pexels-photo-3879160.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Isteak Kamal Aiman",
      img: "https://images.pexels.com/photos/3619972/pexels-photo-3619972.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="storyimage" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="storyimage" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
