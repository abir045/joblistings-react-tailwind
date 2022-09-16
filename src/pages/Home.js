import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();

  //fetching data
  useEffect(() => {
    const getData = async () => {
      const joblists = await fetch("data.json");
      const response = await joblists.json();
      setData(response);
    };
    getData();
  }, []);
  console.log(data);

  return (
    <div className="flex flex-col mx-[5%] my-[10%] space-y-10">
      {data &&
        data.map((item) => (
          <div className="relative flex flex-col space-y-4 bg-white mb-5 py-5 border-l-[5px] px-[5%] border-[#5ca5a5] drop-shadow-lg rounded-lg ">
            <img
              className="absolute -top-[10%] w-[48px] h-[48px]"
              src={item.logo}
            />

            <h5 className="text-[13px] leading-3    text-[#5ca5a5] font-bold">
              {item.company}
            </h5>

            <h5 className="font-bold text-[15px] leading-6 text-[#2b3939]">
              {item.position}
            </h5>

            <div className="flex space-x-3 items-content text-base text-[#7c8f8f] tracking-[-0.123px]">
              <span className="flex">{item.postedAt}</span>
              <span className="w-[4px] ">.</span>
              <span className="flex">{item.contract}</span>
              <span className="w-[4px]">.</span>
              <span className="flex">{item.location}</span>
            </div>

            <hr className="border-x  bg-[#979797]" />

            <div className="flex space-x-5 text-base font-bold text-[#5ca5a5] tracking-[-0.123px]">
              <span>{item.role}</span>
              <span>{item.level}</span>
            </div>

            <div className="flex space-x-5 text-base font-bold text-[#5ca5a5] tracking-[-0.123px] ">
              {item.languages.map((item) => (
                <div className="flex-row mb-5">
                  <span>{item}</span>
                </div>
              ))}
              {item.tools.map((item) => (
                <div className="flex-row mb-5 ">
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
