import "./Post.scss";
import { Link } from "react-router-dom";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Comments } from "../comments/Comments";
import { useState } from "react";

export const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [postLike, setPostLike] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{post.postTime}</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="items" onClick={() => setPostLike(!postLike)}>
            {postLike ? (
              <FavoriteOutlinedIcon fontSize="small" />
            ) : (
              <FavoriteBorderOutlinedIcon fontSize="small" />
            )}
            122 Likes
          </div>
          <div className="items" onClick={() => setCommentOpen(!commentOpen)}>
            <SmsOutlinedIcon fontSize="small" />
            17 Comments
          </div>
          <div className="items">
            <ShareOutlinedIcon fontSize="small" />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};
