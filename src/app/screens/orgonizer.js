import Image from "next/image";
import React from "react";

function Organize() {
  let organizes = [
    ["unread", require("../assets/img/organize/unread.png")],
    ["cloud academy", require("../assets/img/organize/cloud_academy_logo.png")],
    ["cloud academy", require("../assets/img/organize/aws_user.png")],
  ];
  

  return (
    <>
      <div className="mt-10 md:mt-20 mx-2 lg:mx-30">
        <div className=" text-white text-center text-4xl xl:text-5xl font-bold">
          Organizer
        </div>
        <div className="flex flex-row justify-center flex-wrap">
          {organizes.map(([title, url], index) => (
            <div key={index} className="flex justify-center items-center m-4">
              <Image
                src={url}
                alt={title}
                style={{ width: "280px", height: "auto" }}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Organize;
