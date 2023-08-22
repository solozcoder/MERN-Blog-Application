import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

// import { images, stables } from "../constants";
import postImage1 from "./../assets/post/post1.jpg";
import userAvatar from "./../assets/post/user1.png";

import { Link } from "react-router-dom";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      {/* <Link to={`/blog/${post.slug}`}> */}
      <img
        src={postImage1}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      {/* </Link> */}
      <div className="p-5">
        {/* <Link to={`/blog/${post.slug}`}> */}
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Ini title
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">ini caption</p>
        {/* </Link> */}
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={userAvatar}
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                ini username
              </h4>
              <div className="flex items-center gap-x-2">
                <div
                  className={`bg-[#87f1ff] w-fit bg-opacity-20 p-2 rounded-full`}
                >
                  <BsCheckLg className="w-[10px] h-[10px] text-[#36B37E]" />
                </div>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {"Verified"} writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            02 May 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
