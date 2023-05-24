import "./Profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Posts } from "../../components/posts/Posts";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/2291471/pexels-photo-2291471.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="profilePic"
        />
      </div>

      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Zihad Nayem</span>
            <div className="info">
              <div className="item">
                <LocationOnOutlinedIcon />
                <span>Bangladesh</span>
              </div>
              <div className="item">
                <LanguageOutlinedIcon />
                <span>zihadnayem.dev</span>
              </div>
            </div>
            <div className="button">
              <button>Add Friend</button>
              <button>Follow</button>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};
