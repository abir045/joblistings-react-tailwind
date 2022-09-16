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
    <div className="flex flex-col mx-[5%] my-[5%]">
      {data &&
        data.map((item) => (
          <div className="flex flex-col space-y-5 mb-5">
            <img className="w-[48px]" src={item.logo} />

            <h5 className="text-[13px] leading-3 text-[#5ca5a5] font-bold">
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

            <div className="flex space-x-5 text-base font-bold text-[#5ca5a5] tracking-[-0.123px]">
              <span>{item.role}</span>
              <span>{item.level}</span>
              {item.languages.map((item) => (
                <div className="flex-row">
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <hr className="border-x  bg-[#979797]" />
          </div>
        ))}
    </div>
  );
};

export default Home;
