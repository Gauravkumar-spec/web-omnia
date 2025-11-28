import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Work } from "../Components/Miscellaneous/our-team";
// import MyApp from "./_app";
function AboutCompany() {
  return (
    <>
    {/* <MyApp/> */}
      <Header />
      <div
        className="bg-about-us md:w-[90%] mx-auto md:bg-right-bottom bg-right
       bg-contain md:bg-contain bg-no-repeat "
      >
        <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
          <img src="Group47.svg" className="relative top-[20rem]" />
        </div>
      </div>
      <div className="px-4 sm:px-6 mx-auto max-w-7xl pb-10 mt-32 md:mt-32 lg:mt-10 fon-family-roboto">
        <div className="flex lg:flex-row flex-col lg:gap-8 mb-32">
          <div className="lg:w-1/2 md:w-2/3 relative md:mx-auto lg:mt-0 md:mt-32 lg:mb-0 md:mb-96 mb-48">
            <picture className=" -top-16 right-0 md:right-8 md:-top-20 absolute lg:right-0 lg:top-[20%]">
              <img
                className="md:ml-0 ml-auto md:mr-0 mr-6 md:w-full w-1/2 rounded-lg"
                src="https://omniaautomation.us/assets/images/resource/about-4.jpg"
              />
            </picture>
            <picture className="lg:top-0 md:-top-44 -top-20 left-24 absolute md:left-40">
              <img
                className="md:w-full w-1/2 rounded-lg"
                src="https://omniaautomation.us/assets/images/resource/about-5.jpg"
              />
            </picture>
            <picture className="left-8 md:left-8 absolute lg:-bottom-32 lg:left-8">
              <img
                className=" md:w-full w-1/2 rounded-lg"
                src="https://omniaautomation.us/assets/images/resource/about-3.jpg"
              />
            </picture>
          </div>
          <div className="lg:w-1/2">
            <span className="text-md uppercase text-gray-300">
              ABOUT COMPANY
            </span>
            <h2 className="text-4xl mt-4">
              Mission is to bring the power of AI to every business
            </h2>
            <p className="mt-10 ">
              Welcome to Omnia Automation, where the future of intelligent
              operations is being reimagined and redefined. We are a dynamic
              centre of AI experts, data scientists and machine learning
              maestros, dedicated to accentuate enterprises into a new era of
              automation.
            </p>
            <p className="mt-10">
              Our solutions are more than just technology. They're process of
              innovation for businesses ready to unlock the new levels of
              milestones. Join us on this exciting journey to the pinnacle of
              the digital transformation.
            </p>
          </div>
        </div>
        <div className="md:my-[300px] mb-20 py-6 relative arrow-box">
          <img
            src="arrow-3.png"
            className="lg:absolute lg:-bottom-20 lg:block hidden -z-10"
            alt=""
          />
          <div className="lg:w-1/3 md:w-1/2 lg:absolute lg:mb-0 mb-10">
            <span className="text-gray-300 uppercase font-bold mb-4 block">
              Our History
            </span>
            <h2 className="text-transparent bg-gradient bg-clip-text text-3xl font-bold">
              History begins in 2023 with the foundation
            </h2>
          </div>
          <div className="lg:h-[80vh] flex md:flex-row flex-col">
            <div className="md:w-1/2 flex">
              <div className="self-end w-full md:flex-row flex-col md:gap-0 flex gap-6">
                <div className=" flex flex-col-reverse items-center md:w-1/2">
                  <div className="rounded-[100%] h-[100px] w-[100px] grid place-items-center mt-20 year-globe bg-gray-600">
                    <p className="font-bold text-lg">2022</p>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-lg mb-3">
                      ChatGPT Public Released
                    </h2>
                    <p>Take trivial example which idea of ever undertakes.</p>
                  </div>
                </div>
                <div className=" flex flex-col items-center md:w-1/2 mb-10">
                  <div className="rounded-[100%] h-[100px] w-[100px] grid place-items-center mb-20 year-globe-reverse bg-gray-600">
                    <p className="font-bold text-lg">2023</p>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-lg mb-3">Founded</h2>
                    <p>Best every pleasure is welcomed every pain avoided.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex">
              <div className="self-start w-full md:flex-row flex-col flex">
                <div className=" flex flex-col-reverse items-center md:w-1/2 mb-10">
                  <div className="rounded-[100%] h-[100px] w-[100px] grid place-items-center mt-20 year-globe bg-gray-600">
                    <p className="font-bold text-lg">2024</p>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-lg mb-3">Product Lauched</h2>
                    <p>
                      TCustomized service is any service that's tailored to the
                      needs of individual customers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:w-1/2 md:-mt-20">
                  <div className="rounded-[100%] h-[100px] w-[100px] grid place-items-center mb-20 year-globe-reverse bg-gray-600">
                    <p className="font-bold text-lg">Next</p>
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold text-lg mb-3">
                      Unlocking New Realm
                    </h2>
                    <p>Take trivial example which idea of ever undertakes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-10 lg:p-6 lg:mt-56 items-center">
          <div className="lg:w-1/2">
            <picture>
              <img
                src="https://omniaautomation.us/assets/images/resource/choose-1.jpg"
                alt=""
                className="mx-auto"
              />
            </picture>
          </div>
          <div className="lg:w-1/2">
            <span className="text-md uppercase text-gray-300">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl mt-4">REASON FOR PEOPLE CHOOSE US </h2>
            <div className="flex flex-col gap-8 mt-8">
              <div>
                <h2 className="text-lg font-bold mb-2">
                  Empowering Your Business with Cutting-Edge Technology
                  Solutions
                </h2>
                <p>
                  We are focused on bringing Cutting Edge Technology's for your
                  business needs.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">
                  Unleash the Power of AI with LLM/ChatGPT for Your Business
                  Advancement
                </h2>
                <p>
                  As LLM/ChatGPT is very crucial in upcoming digital world, Join
                  us to bring power of AI in your business needs.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">
                  Pioneering Affordability
                </h2>
                <p>
                  As a early stage startup, we promise to give pricing never
                  seen before. Our post sale and technical support team is ready
                  to serve you 24*7 across globe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-44 mb-20">
          <h2 className="font-WorkSansRegular text-[#333e41] text-4xl lg:text-6xl bg-gradient bg-clip-text text-center">
            Our Team
          </h2>
          <hr className="w-full mt-20 mb-10 border-[#25262c]" />
          <Work />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutCompany;