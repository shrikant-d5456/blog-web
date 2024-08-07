import React, { useEffect, useState } from "react";
import img1 from "../assets/image.png";
import RowContent from "./RowContent";
import "./index.css"; // CSS file is named index.css

const Pages = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("/api/about");
        const result = await response.json();
        setAboutData(result);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="w-10/12 flex flex-col m-auto justify-center">
      <div className="rounded-md w-full bg-[#171b38] p-4 flex flex-col justify-center items-center">
        {aboutData.map((item) => (
          <div key={item._id} className="w-full flex gap-4 justify-center">
            <div>
              <img
                className="w-10 h-10 object-fit rounded-full"
                src={img1}
                alt=""
              />
            </div>

            <div>
              <p>{item.title}</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}

        <p className="p-4 w-5/12 text-center text-gray-400">
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          technology and travel. Jonathan holds a degree in Computer Science and
          has spent years working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </p>
      </div>
      <RowContent />
    </div>
  );
};

export default Pages;
