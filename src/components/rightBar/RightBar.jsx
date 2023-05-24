import "./RightBar.scss";
export const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Friend Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Rakib Hasan</span>
            </div>
            <div className="buttons">
              <button>Add Friend</button>
              <button>Follow</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Fariha Binte</span>
            </div>
            <div className="buttons">
              <button>Add Friend</button>
              <button>Follow</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Trends for you</span>

          <div className="user">
            <div className="userInfo" id="trends">
              <p>
                <span>#gaming</span>
              </p>
              <span id="trendText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              </span>
            </div>
            <span>45.4k times</span>
          </div>

          <div className="user">
            <div className="userInfo" id="trends">
              <p>
                <span>#sscresults2023</span>
              </p>
              <span id="trendText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              </span>
            </div>
            <span>5.9k times</span>
          </div>

          <div className="user">
            <div className="userInfo" id="trends">
              <p>
                <span>#newsoftheday</span>
              </p>
              <span id="trendText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              </span>
            </div>
            <span>132.1k times</span>
          </div>
        </div>

        <div className="item">
          <span>Contacts</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4412516/pexels-photo-4412516.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Hasanul Mukit</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8114406/pexels-photo-8114406.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Md Iqbal Jahan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Abdul Aziz</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Maksudur Rahman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Isteak Kamal Aiman</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Nazmus Shakb Shadhin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
