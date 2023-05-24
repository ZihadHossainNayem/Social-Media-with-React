import { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/AuthContext";

export const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //dummy comments
  const comments = [
    {
      id: 1,
      desc: "Amazing content. Keep it up.",
      time: "3 minutes ago.",
      name: "Abdul Aziz",
      profilePicture:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      desc: "Absolutely captivating! Your attention to detail and storytelling skills are exceptional. I couldn't take my eyes off this.",
      time: "17 minutes ago.",
      name: "Nazmus Shakb Shadhin",
      profilePicture:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write comment here..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">{comment.time}</span>
        </div>
      ))}
    </div>
  );
};
