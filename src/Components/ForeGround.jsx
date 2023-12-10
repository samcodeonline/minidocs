import React, { useRef } from "react";
import Card from "./Card";
const ForeGround = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "you can make the real thing happen in less than the actual amount of time",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "you can make the real thing happen in less than the actual amount of time",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "you can make the real thing happen in less than the actual amount of time",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Upload Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className=" fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default ForeGround;
