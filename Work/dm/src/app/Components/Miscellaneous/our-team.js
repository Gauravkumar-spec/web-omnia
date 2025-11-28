import React from "react";
import NavComponent from "../Header";
import Footer from "../Footer";


function Card({ rev, image, name, designation, description, }) 
{
  return (
    <div
      className={`${rev} flex items-end my-8 max-w-5xl flex-wrap md:flex-nowrap lg:px-4`}
    >
      <div>
        <img
          src={image}
          alt="placeholder.png"
          width="500"
          height="500"
          className="w-full"
        />
      </div>
      <div className="md:mx-3 md:mt-0 mt-4 max-w-xl md:max-w-sm lg:max-w-xl">
        <p className="text-2xl">{name}</p>
        <p className="font-WorkSansSemiBold text-lg my-2">{description}</p>
        <p className="uppercase text-lg font-bold py-2">{designation}</p>
      </div>
    </div>
  );
}

export function Work() {
  const data = [
    {
      flex: "flex-row-reverse",
      image:
        "profile-icon-1.jpeg",
      name: "Ankush Gauba",
      designation: "Founder and CEO",
      description: "As the Founder & CEO of Omnia Automation and Beyond, my responsibilities include vision-setting, strategic leadership, team management, and business development for innovative automation solutions.",
    },
    {
      flex: "",
      image:
        "profile-img.jpeg",
      name: "Apurva Srivastava",
      designation: "Co-Founder & coo",
      description: "As the co-founder and COO of Omnia Automation and Beyond, I oversee daily operations, implement strategies, manage resources, and drive organizational efficiency for optimal performance.",
    },
    {
      flex: "flex-row-reverse",
      image:
        "profile-icon-2.jpeg",
      name: "Howard Lambert",
      designation: "Director Marketing Head",
      description: "As the Director of Marketing at Omnia Automation and Beyond, I lead branding efforts, develop marketing strategies, manage campaigns, and analyze market trends to drive growth and visibility.",
    },
  ];
  return (
    <div id="work" className="min-h-screen px-4 mt-32">
      <div className=" flex flex-col  items-center  w-full ">
        {data.map((n, index) => {
          return (
            <Card
              key={index}
              rev={n.flex}
              image={n.image}
              name={n.name}
              description={n.description}
              designation={n.designation}
            />
          );
        })}
      </div>
    </div>
  );
}

const OurTeam = () => {
  return (
    <>
      <NavComponent />
      <div
        className="bg-meet-our-team md:w-[90%] mx-auto md:bg-right-bottom bg-bottom
      bg-50% md:bg-30% bg-no-repeat"
      >
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>
      <div className="px-4 sm:px-6 mx-auto max-w-7xl pb-10">
        <Work />
        <Footer />
      </div>
    </>
  );
};

export default OurTeam;
