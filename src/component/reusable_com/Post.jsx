import { useState } from "react";
import  {FiMoreHorizontal}  from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineModeComment } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md";
import { MdOutlineSentimentSatisfied } from "react-icons/md";




// import MoreHorizontal from "react-icons";


const Post = () => {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike((prevLike) => (prevLike === 0 ? 1 : 0));
  };

  return (
    <>
      <div className="flex justify-center items-center w-72 mb-4 pb-4 bg-yellow-300 mx-auto drop-shadow-lg">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-1">
                <img
                src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                alt="Profile picture"
                className="w-10 h-10 rounded-full mr-2"
                />
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <span className="text-base font-medium">jimkwik</span>
                        <span className="text-xs text-gray-500 ml-2">1h</span>
                    </div>
                    <span className="mb-1 text-xs">Original audio</span>
                </div>
            </div>
            <span className="cursor-pointer opacity-50 hover:opacity-100">
              <FiMoreHorizontal fontSize="small" />
            </span>
          </div>
          <img
            src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
            alt="Post image"
            className="w-full rounded-lg"
          />
          <div className="flex justify-between ">
            <div className="flex">
              <button
                type="button"
                onClick={handleLike}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {like === 0 ? (
                  <MdFavoriteBorder  className="cursor-pointer opacity-50 hover:opacity-100 " />
                ) : (
                  <MdFavorite fontSize="small" className="cursor-pointer" />
                )}
              </button>
              <div className="flex items-center">
                <MdOutlineModeComment fontSize="small" className="cursor-pointer opacity-50 hover:opacity-100" />
                <IoIosSend fontSize="small" className="cursor-pointer ml-4 opacity-50 hover:opacity-100" />
                <MdBookmarkBorder fontSize="small" className="cursor-pointer ml-4 opacity-50 hover:opacity-100" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-base mr-2">{like}</span>
              <span className="text-base font-medium">Like</span>
            </div>
          </div>
          <div className="">
            <p className="text-base cursor-pointer">some text over hear....</p>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Add comment..."
              className="w-full h-7 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            />
            <MdOutlineSentimentSatisfied fontSize="small" className="cursor-pointer opacity-50 hover:opacity-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
