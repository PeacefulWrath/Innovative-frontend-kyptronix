import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Styles from "../styles/BlogStyles.module.css";

import TestImg from "../assets/gallery-1.png";
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
      <div className={`${Styles.Blog__mainWrapper}`}>
        <div className={`${Styles.Blog__mainBlogWrapper}`}>
          <h1 className={`${Styles.Blog__mainBlogHeading}`}>
            What is Lost Wax Casting?
          </h1>
          <p className={`${Styles.Blog__publishedData}`}>
            By Sunrise / November 2, 2020
          </p>

          <div className={`${Styles.Blog__mainContent}`}>
            <p className={`${Styles.Blog__contentPara}`}>
              The process of anodizing is a popular and valuable procedure. It
              gives aluminum a long-lasting and lustrous exterior, making it
              more durable for use in multiple industries. Aluminum retains its
              original properties and gains an authentic appearance when treated
              in the anodize process.
            </p>
            <p className={`${Styles.Blog__contentPara}`}>
              The metal becomes corrosion-resistant and is preferred for use in
              multiple household and industrial applications including cookware
              and automobile sectors. Die-cast aluminum parts can also be
              anodized if done using the right techniques and equipment. Sunrise
              Metal is a proud manufacturer of anodized aluminum and offers
              multiple finishing processes at the best costs in the market.
            </p>

            <h3 className={`${Styles.BlogContentHeading}`}>
              What is Anodized Aluminum?
            </h3>

            <p className={`${Styles.Blog__contentPara}`}>
              Anodized Al is an enhanced form of aluminum that has a better
              visual appearance and long-lasting anti-corrosive properties. It
              is an electrochemical process that strengthens the thickness of
              the oxide layer that is naturally found on the metals. Aluminum
              alloy contains a natural layer of aluminum oxide on its surface.
            </p>
            <img src={TestImg} alt="blog-related" />

            <p className={`${Styles.Blog__contentPara}`}>
              Anodized Al is an enhanced form of aluminum that has a better
              visual appearance and long-lasting anti-corrosive properties. It
              is an electrochemical process that strengthens the thickness of
              the oxide layer that is naturally found on the metals. Aluminum
              alloy contains a natural layer of aluminum oxide on its surface.
            </p>
          </div>
        </div>

        <div className={`${Styles.Blog__relativeBlogMainWrapper}`}>
          <div>
            <div className={`${Styles.Blog__relaredBlogGeadingWrapper}`}>
              <h3
                className={`${Styles.Blog__relatedBlogHeading}`}
                style={{ color: "white" }}
              >
                Related Blogs
              </h3>
            </div>

            <div className={`${Styles.relatedBlogLinkWrapper}`}>
              <Link to='/' className={`${Styles.Blog__links}`}>21 THINGS YOU NEED TO KNOW ABOUT ANODIZING ALUMINUM</Link>
              <Link to='/' className={`${Styles.Blog__links}`}>ALUMINUM DIE CASTING ALLOYS</Link>
              <Link to='/' className={`${Styles.Blog__links}`}>Nickel Plating Aluminum</Link>
            </div>
          </div>

          <div className={`${Styles.Blog__popularBlogMainWrapper}`}>
            <div className={`${Styles.Blog__relaredBlogGeadingWrapper}`}>
              <h3
                className={`${Styles.Blog__relatedBlogHeading}`}
                style={{ color: "white" }}
              >
                Popular Blogs
              </h3>
            </div>

            <div className={`${Styles.relatedBlogLinkWrapper}`}>
              <Link to='/' className={`${Styles.Blog__links}`}>21 THINGS YOU NEED TO KNOW ABOUT ANODIZING ALUMINUM</Link>
              <Link to='/' className={`${Styles.Blog__links}`}>ALUMINUM DIE CASTING ALLOYS</Link>
              <Link to='/' className={`${Styles.Blog__links}`}>Nickel Plating Aluminum</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
