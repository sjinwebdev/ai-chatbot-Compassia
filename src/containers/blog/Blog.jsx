import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot happening, we are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imageUrl={blog01}
            title={"COMPASSIA is the future. Let us Explore how it is?"}
            date={"OCT 1, 2023"}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imageUrl={blog02}
            title={"COMPASSIA is the future. Let us Explore how it is?"}
            date={"OCT 1, 2023"}
          />
          <Article
            imageUrl={blog03}
            title={"COMPASSIA is the future. Let us Explore how it is?"}
            date={"OCT 1, 2023"}
          />
          <Article
            imageUrl={blog04}
            title={"COMPASSIA is the future. Let us Explore how it is?"}
            date={"OCT 1, 2023"}
          />
          <Article
            imageUrl={blog05}
            title={"COMPASSIA is the future. Let us Explore how it is?"}
            date={"OCT 1, 2023"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
