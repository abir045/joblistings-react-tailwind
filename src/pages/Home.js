import React, { useEffect, useState } from "react";
import oval from "../images/oval.svg";

const Home = () => {
  const [data, setData] = useState([]);

  const [filterparam, setFilterParam] = useState(["All"]);

  const [searchParam] = useState(["Frontend", "CSS", "JavaScript"]);

  const search = (data) => {
    return data.filter((item) => {
      if (item.role == filterparam) {
        return searchParam.some((newItem) => {
          return item[newItem].toString().toLowerCase().indexOf();
        });
      }
    });
  };

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

  // border-[#5ca5a5]
  // border-l-[5px]

  return (
    <div className="flex flex-col mx-[5%]  space-y-10 xl:space-y-5 xl:mr-15 xl:ml-40 xl:my-[5%]">
      <div className="flex flex-row space-x-3 mt- h-[120px] p-10  bg-white">
        <div
          onChange={(e) => {
            setFilterParam(e.target.value);
          }}
          className="flex-row space-x-3"
        >
          <input
            className="hidden"
            type="radio"
            id="role"
            name="role"
            value="Frontend"
            hidden
          />
          <label for="Frontend">Frontend</label>
        </div>
        <div className="flex-row space-x-3">
          <input
            className="hidden"
            type="radio"
            id="languages"
            name="languages"
            value="CSS"
            hidden
          />
          <label for="CSS">CSS</label>
        </div>
        <div className="flex-row space-x-3">
          <input
            className="dec"
            type="radio"
            id="javascript"
            name="languages"
            value="JavaScript"
            hidden
          />
          <label for="JavaScript">JavaScript</label>
        </div>
      </div>

      {data &&
        data.map((item) => (
          <div
            style={{
              borderLeft: item.new && item.featured ? "5px solid #5ca5a5" : "",
            }}
            className="relative flex flex-col my-5 space-y-7 bg-white px-[5%]  drop-shadow-lg rounded-lg xl:pr-10 xl:pl-5 xl:flex-row  xl:items-center xl:space-x-5 xl:my-5 xl:h-[152px]  "
          >
            <img
              className="absolute -top-[10%]  w-[48px] h-[48px] xl:hidden"
              src={item.logo}
            />

            <img className="hidden w-[88px] h-[88px] xl:flex" src={item.logo} />

            <div className="flex flex-col space-y-3 w-[80%]">
              <div className="flex space-x-5 items-center">
                <h5 className="text-[13px] leading-3    text-[#5ca5a5] font-bold xl:text-[18px] xl:leading-[17px]">
                  {item.company}
                </h5>
                {item.new && item.featured ? (
                  <div className="flex space-x-2 text-[14px] leading-[14px] text-white">
                    <span className="bg-[#5ca5a5] uppercase font-bold py-2  px-2  rounded-xl">
                      new!
                    </span>
                    <span className="bg-[#2b3939] uppercase font-bold py-2  px-2  rounded-xl">
                      featured
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <h5 className="font-bold text-[15px] leading-6 text-[#2b3939] xl:text-[22px] xl:leading-6 w-full">
                {item.position}
              </h5>

              <div className="flex space-x-3 items-content text-base text-[#7c8f8f] tracking-[-0.123px] xl:text-[18px] xl:leading-6 xl:font-medium ">
                <span className="flex">{item.postedAt}</span>
                <img className="w-[4px]" src={oval} />
                <span className="flex">{item.contract}</span>
                <img className="w-[4px]" src={oval} />
                <span className="flex">{item.location}</span>
              </div>
            </div>

            <hr className="border-x  bg-[#979797]" />

            {/* role and level */}
            <div className="flex  space-x-5 text-base font-bold  text-[#5ca5a5] tracking-[-0.123px] xl:hidden">
              <span className="bg-[#eef6f6] p-2 rounded">{item.role}</span>
              <span className="bg-[#eef6f6] p-2 rounded">{item.level}</span>
            </div>

            {/* labguages and tools container */}
            <div className="flex space-x-5 text-base font-bold text-[#5ca5a5] tracking-[-0.123px] xl:hidden">
              {item.languages.map((item) => (
                <div className="flex-row mb-5">
                  <span className="bg-[#eef6f6] p-2 rounded">{item}</span>
                </div>
              ))}
              {item.tools.map((item) => (
                <div className="flex-row mb-5 ">
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* desktop container */}

            <div className="hidden  space-x-5 text-base font-bold text-[#5ca5a5]  tracking-[-0.123px] xl:flex  items-center">
              <span className="flex bg-[#eef6f6] p-2 rounded">{item.role}</span>

              <span className="flex bg-[#eef6f6] p-2 rounded">
                {item.level}
              </span>
              {item.languages.map((item) => (
                <div className="flex-row  ">
                  <span className="bg-[#eef6f6] p-2 rounded ">{item}</span>
                </div>
              ))}
              {item.tools.map((item) => (
                <div className="flex-row  ">
                  <span className="bg-[#eef6f6] p-2 rounded">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
