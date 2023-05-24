import "./LeftBar.scss";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/group.png";
import Pages from "../../assets/facebook-page.png";
import Marketplace from "../../assets/food-stand.png";
import Videos from "../../assets/film.png";
import Memories from "../../assets/rewind.png";
import Gaming from "../../assets/controller.png";
import Events from "../../assets/event.png";
import Gallery from "../../assets/gallery.png";
import Message from "../../assets/message.png";
import Bookmark from "../../assets/bookmark.png";
import Draft from "../../assets/draft.png";
import Verification from "../../assets/verification.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Pages} alt="Pages" />
            <span>Pages</span>
          </div>
          <div className="item">
            <img src={Marketplace} alt="Marketplace" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Gaming} alt="Gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Events} alt="Events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Message} alt="Message" />
            <span>Message</span>
          </div>
        </div>
        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Bookmark} alt="Bookmark" />
            <span>Bookmark</span>
          </div>
          <div className="item">
            <img src={Draft} alt="Draft" />
            <span>Draft</span>
          </div>
          <div className="item">
            <img src={Verification} alt="Verification" />
            <span>Verification</span>
          </div>
        </div>
      </div>
    </div>
  );
};
