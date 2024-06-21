import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Styles from "../styles/BlogStyles.module.css";
import BlogImg1 from "../assets/BlogImg1.avif";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202020",
        overflowX: "hidden",
      }}
    >
      <TopBar page={"Blog"} />

      <div className={`${Styles.BlogMain__}`}>
        <h1 className={`${Styles.Blog__blogMainHeading}`}>Our Blogs</h1>

        <div className={`${Styles.Blog__blogMainWrapper}`}>
          {["1", "2", "3",'4','5'].map((cur, id) => (
            <div key={id} className={`${Styles.BlogCardMainWrapper}`}>
              <img
                src={BlogImg1}
                className={`${Styles.Blog__BlogImage}`}
                alt="blog-image"
              />
              <span className={`${Styles.Blog__blogPostTime}`}>
                27 AUG 2023
              </span>
              <div className={`${Styles.Blog__InfoWrapper}`}>
                <div className={`${Styles.Blog__blogLinkWrapper}`}>
                  <Link to={`/blog-details/${id+1}`} className={`${Styles.Blog__blogLink}`}>
                    Unlock Your Potential: The Ultimate Guide to Fitness Success
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
