import { Post } from "../post/Post";
import "./Posts.scss";

export const Posts = () => {
  //dummy data
  const posts = [
    {
      id: 1,
      name: "Hasanul Mukit",
      userId: 1,
      postTime: "2 minutes ago",
      profilePic:
        "https://images.pexels.com/photos/4412516/pexels-photo-4412516.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Refreshing cold tea to beat the heat and quench your thirst. Perfect for a summer day!",
      img: "https://images.pexels.com/photos/2382889/pexels-photo-2382889.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Md Iqbal Jahan",
      userId: 2,
      postTime: "1 hour ago",
      profilePic:
        "https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Another busy day at the office, filled with deadlines and meetings. The hustle and bustle keeps us on our toes, but we're determined to achieve our goals. The team is working tirelessly, collaborating and supporting each other. Despite the challenges, we're pushing through and making things happen!",
    },
    {
      id: 3,
      name: "Maksudur Rahman",
      userId: 3,
      postTime: "23 hours ago",
      profilePic:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Sailing into serenity on a breathtaking boat journey, embracing the beauty of nature and the tranquility of the open waters.",
      img: "https://images.pexels.com/photos/6113097/pexels-photo-6113097.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
