import { useState } from "react";

const Comments = () => {
  const initialComments = [
    {
      name: "Abhay Sahu",
      comment: "This is first comment",
    },
    {
      name: "Broski",
      comment: "This is second comment",
    },
  ];

  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      {initialComments.map((comment, index) => (
        <div className="flex gap-2" key={index}>
          <span className="text-black font-bold">{comment.name}</span>
          <span className="text-black font-semibold">{comment.comment}</span>
          <button className="text-blue-500" onClick={() => setClicked(true)}>
            Reply
          </button>
        </div>
      ))}
    </div>
  );
};

export default Comments;
