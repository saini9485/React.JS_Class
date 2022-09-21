import React, { Component } from "react";
import { Buttons } from "./Buttons";
//import photo1 from "./Assets/photo1.jpg"
import "./Post.css";
export class Posts extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          postId: 1,
          userName: "Rajesh Saini",
          postImageURL: "/Asset/photo2.jpg",
          likes: "2",
          Comment: "Nice pic",
          location: "UP India",
          time: "6 hours ago",
        },
        {
          postId: 4,
          userName: "Govind ",
          postImageURL: "/Asset/photo2.jpg",
          timeStamp: "6.00PM",
          likes: "23",
          Comment: "Nice pic",
          location: "UP India",
          time: "3 hours ago",
        },
        {
          postId: 5,
          userName: "Virendra ",
          postImageURL: "/Assets/photo4.jpg",
          timeStamp: "6.00PM",
          likes: "20",
          Comment: "Nice pic",
          location: "UP India",
          time: "6 hours ago",
        },
        {
          postId: 6,
          userName: "Riyaj ",
          postImageURL: "./Assets/photo.jpg",
          timeStamp: "6.00PM",
          likes: "25",
          Comment: "Nice pic",
          location: "UP India",
          time: "2 hours ago",
        },
        {
          postId: 7,
          userName: "Prakash Kumar",
          postImageURL: "./Assets/photo2.jpg",
          timeStamp: "6.00PM",
          likes: "30",
          Comment: "Nice pic",
          location: "UP India",
          time: "5 hours ago",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.data.map((item) => {
          return (
            <div className="container">
              <div className="user_Profile">
                <img
                  className="user_profile_image"
                  src={item.postImageURL} 
                  alt=""
                />
                <h3>{item.userName}</h3>
                {/* <p>{item.location}</p> */}
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <div className="post_Images">
                <img src={item.postImageURL} alt="" />
              </div>
              <Buttons />
              <h5> {item.likes} likes</h5>
              <div className="post_comment">
                <h5>{item.userName} </h5>
                <p>{item.Comment}</p>
              </div>
              <p className="post_time">{item.time}</p>
              <div className="add-comment">
                <input
                  type="text"
                  className="comment_area"
                  placeholder="  Add a Comment..."
                ></input>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
