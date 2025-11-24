"use client"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import DifferentFromOthers from "@/components/Services/DifferentFromOthers";
// import Industries from "@/components/Services/Industries";
// import PricingCards from "@/components/Misc/PricingCards";
// import FormCard2 from "@/components/Misc/FormCard2";
import { motion } from "framer-motion";
// import Accordion1 from "@/components/Misc/Accordion1";
// import FormCard from "@/components/Misc/FormCard";


const services = () => {

  
    const accordionData1 = [
    {
      question: "What types of businesses can benefit from Omnia’s chatbots?",
      answer: (
        <>
          Omnia Chatbots serve many industries by automating tasks like bookings, consultations,
          and quick answers. Supported sectors include:
          <ul className="pl-5 mt-2 list-disc">
            <li>Travel & Hospitality: automate bookings, answer queries, send updates</li>
            <li>Healthcare: schedule appointments, handle patient questions securely</li>
            <li>Education & Training: respond instantly to student inquiries, streamline admissions</li>
            <li>Marketing & Agencies: capture leads, qualify prospects, drive engagement 24/7</li>
            <li>eCommerce & Retail: manage FAQs, order tracking, and support automatically</li>
          </ul>
        </>
      ),
    },
    {
      question: "How does AI automation reduce costs",
      answer: (
        <>
          AI automation reduces costs by eliminating repetitive manual work - allowing your team to
          focus on more valuable, high-impact tasks.
          <ul className="pl-5 mt-2 list-disc">
            <li>Automates routine tasks</li>
            <li>Saves time</li>
            <li>Reduces labor expenses</li>
            <li>Boosts efficiency</li>
          </ul>
        </>
      ),
    },
    {
      question: "Can Omnia’s chatbots be integrated with existing systems?",
      answer: (
        <>
          Absolutely! Omnia Chatbots integrate with your existing tools:
          <ul className="pl-5 mt-2 list-disc">
            <li>CRMs: HubSpot, Zoho, Salesforce</li>
            <li>Helpdesks: Freshdesk, Zendesk</li>
            <li>Payment gateways, booking engines, and more</li>
            <li>Websites, apps, messaging platforms (WhatsApp, Messenger, etc.)</li>
          </ul>
        </>
      ),
    },
    {
      question: "What support services does Omnia provide?",
      answer: (
        <>
          Omnia offers continuous support from onboarding to scaling:
          <ul className="pl-5 mt-2 list-disc">
            <li>Initial Setup & Onboarding</li>
            <li>Technical Assistance</li>
            <li>Ongoing Maintenance</li>
            <li>Performance Monitoring</li>
            <li>Priority Support (on request)</li>
          </ul>
        </>
      ),
    },
    {
      question: "Are Omnia's services scalable?",
      answer: (
        <>
          Yes - scalability is at the core of everything we build.
          <ul className="pl-5 mt-2 list-disc">
            <li>Modular Architecture</li>
            <li>Flexible Infrastructure</li>
            <li>Custom Workflows</li>
            <li>No Downtime Scaling</li>
          </ul>
        </>
      ),
    },
  ];

  const nftCardData = [
    {
      img: "Elt as seevices.jpg",
tiimg: "/assets/images/services/Elt as seevices.jpg",
title: "ETL Platform",
desc: [
  "Empowering data pipelines: seamless integration and transformation of your business data.",
  "Seamless data integration: ETL as a service simplifies and optimizes your entire workflow.",
  "Streamlined analytics: unlock actionable insights with powerful ETL solutions.",
],


    },
    {
      img: "Ai based service.jpg",
    title: "Cognitive Assistant",
desc: [
  "Revolutionizing customer support: unleash the future with Omnia ChatBot.",
  "Enhanced user engagement: AI-driven services deliver tailored, meaningful experiences.",
  "Streamlined support: personalized chatbots provide fast and effective assistance.",
],

    },
    {
      img: "DevOps.jpg",
    title: "Managed DevOps",
desc: [
  "Efficient infrastructure management: ensures smooth operations and scalable growth.",
  "Continuous monitoring: proactive oversight minimizes downtime and boosts reliability.",
  "Automated deployment: streamlines processes to accelerate development and deployment.",
],

    },
    {
      img: "Gen ai.jpg",
title: "AI Arbitrage Model",
desc: [
  "AI is rapidly disrupting global centers, here’s why you want to be part of the change.",
  "Generative AI effortlessly produces original content and ideas at incredible speed.",
  "Transform your business today with constant, AI-driven creative innovation.",
],

    },
  ];

  const imageData = [
    "/omnia-chatbot.png",
    "/omnia-bot.png",
    "/assets/images/slider/10.jpg",
    "/assets/images/slider/11.jpg",
    "/assets/images/slider/12.jpg",
    "/assets/images/slider/9.jpg",
  ]

  return (
    <>
    {/* <SEO 
        title = " Super Charged AI Chatbot for Travel Industry - Omnia Chatbot "
        description = " Omnia Automation’s travel chatbots helps you deliver great experience, provide a personalized experience while increasing your revenue "  
      /> */}
    
  <Header />

  {/* Background SVG */}
  {/* <div className="absolute -z-10 top-[-50rem] -left-[40rem]">
    <img src="Group47.svg" className="relative top-[20rem]" alt="Background Graphic" />
  </div> */}

  {/* Main Content Section */}
  <div className="bg-services md:w-[90%] mx-auto md:bg-right-bottom bg-right bg-contain md:bg-contain bg-no-repeat">

    <div className="px-4 sm:px-6 mx-auto max-w-7xl pb-2 mt-12 md:mt-22 lg:mt-0 font-roboto">
      <section className="p-4 lg:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

            {/* LEFT: Text Content */}
          <div
  className="w-full lg:w-1/2 text-center lg:text-left"
  
>
 <h2
    className="text-5xl lg:text-5xl font-bold
    bg-clip-text text-gray-300"
>
    THINK
    <br />BUILD<br />TRANSFORM
</h2>
  <p
    className="mt-2 text-lg text-gray-400 max-w-md mx-auto lg:mx-0"
  >
    We specialize in building transformative AI-powered systems that automate repetitive workflows, drive customer engagement, and enable seamless digital transformation for startups, SMEs, and large organizations.
  </p>
</div>


            {/* RIGHT: Contact Form */}
            {/* <div className="w-full lg:w-3/5">
              <FormCard2 />
            </div> */}

          </div>
        </div>
      </section>
    </div>

  </div>




      <div className="px-4 sm:px-6 mx-auto max-w-7xl pb-10 mt-32 md:mt-32 lg:mt-10 fon-family-roboto">
        <div className="relative">

           <section className="p-4 lg:p-8 ">
            <div className="container mx-auto space-y-12  ">
              <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row-reverse">
              <div className="flex items-center justify-center flex-1">
  <div className="relative group ">
    {/* Main 3D Image */}
    <img
      src="omnia-chatbot.png"
      alt="Omnia Chatbot"
      // className="w-full h-auto rounded-xl transition-all duration-500 transform-style-preserve-3d transform-3d "
      // style={{
      //   transform: 'perspective(1000px) translateZ(50px)',
      //   boxShadow: `
      //     0 0 0 1px rgba(255,255,255,0.1),
      //     0 2px 8px rgba(0,0,0,0.1),
      //     0 16px 48px -10px rgba(0,0,0,0.2),
      //     0 48px 80px -20px rgba(0,0,0,0.25)
      //   `,
      //   filter: 'brightness(1.05) saturate(1.1)'
      // }}
    />
    
    
    {/* 3D Edge Glow */}
    <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
      style={{
        boxShadow: 'inset 0 0 15px rgba(255,255,255,0.3)',
        mixBlendMode: 'overlay'
      }}
    />
    </div>
</div>
                <div className="flex flex-col justify-center flex-1 px-6 py-0 ">
                  <h2 className="text-3xl font-bold">
                   Conversational AI
                  </h2>
                
                     <ul className="list-disc list-outside my-6 pl-6 space-y-2 text-white">
                      <li>   Unlock instant, intelligent conversations with our AI-powered chatbot - <br />always available, lightning-fast, and endlessly evolving.</li>
                      <li>It understands, adapts, and responds like a pro, turning every customer interaction into a seamless experience.</li>
                      <li>From FAQs to complex queries, it never sleeps, never slows down, delivering instant,  reliable support 24/7.</li>
                    </ul>
           
               
               
                  
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-md  lg:flex-row">
              <div className="flex items-center justify-center flex-1">
  <img
    src="omnia-bot.png"
    alt="Omnia Bot"
  />
</div>


               <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
<h2 className="text-3xl font-bold">
  Tailored Systems
</h2>
<ul className="list-disc list-outside my-6 pl-6 space-y-2 text-white">
  <li>One-size-fits-all is obsolete - tailored systems are built to solve your unique challenges, scalable, adaptive, and ready to grow with you.</li>
  <li>From discovery to deployment, every feature is designed to streamline operations, boost efficiency, and enhance your edge.</li>
  <li>Smarter software that adapts and evolves - built to think, perform, and grow like your business, without compromise.</li>
</ul>


  
</div>

              </div>
             
            </div>
          </section> 

          <section className="p-4 lg:p-8 w-full">
            {/* <ServicesSlider imageData={imageData} /> */}
            <div className="w-full md:flex gap-6">
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl text-center font-bold">Next-Gen Bot Solutions</h2>
                <div className="mt-2 p-4 text-xl">
                 Our next-gen bots enhance customer engagement, provide instant answers, and simplify your workflow by automating routine tasks.
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-4xl text-center font-bold">AI-Driven Automation</h2>
                <div className="mt-2 p-4 text-xl">
                 Our intelligent AI automates daily tasks, helping you save time and reduce costs while increasing business productivity.
                </div>
              </div>

            </div>
          </section>

        </div>
        <section>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {nftCardData.map((service, index) => (
              <div className="py-2" key={index}>
                <ServiceCard
                  image={service.img}
                  title={service.title}
                  desc={service.desc}
                />
                
              </div>
            ))}
          </div> */}
          <div className="mt-6 p-2 md:p-12">
            {nftCardData.map((service, index) => (
              <div className="w-full md:flex gap-24 mt-12">
                <div className="w-full md:w-1/2 ">
                  <img src={service.img} style={{ width: "100%" }} className="mx-auto" />

                </div>
                <div className={`w-full text-left md:w-1/2 p-2 ${index % 2 === 0 ? "order-first" : ""}`}>
                  <h2 className="text-4xl font-bold">{service.title}</h2>
                  <div className="mt-6 text-xl">
                    <ul className="list-disc">

                      {service.desc.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}

                    </ul>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>
        <div className="mt-6">
          {/* <h2 className="text-5xl text-center">Save upto 20% by hiring a VA</h2> */}
          {/* <div className=" overflow-scroll">
            <table className="w-full min-w-[1000px] mt-6">
              <tr className="text-left border">
                <th className="text-lg p-4">$ Costs</th>
                <th className="text-lg p-4">Direct Hire</th>
                <th className="text-lg p-4">Hire a VA</th>
              </tr>
              <tr className="border">
                <td className="p-4">Alfreds Futterkiste</td>
                <td className="p-4">Maria Anders</td>
                <td className="p-4">Germany</td>
              </tr>
              <tr className="p-4 border">
                <td className="p-4">Centro comercial Moctezuma</td>
                <td className="p-4">Francisco Chang</td>
                <td className="p-4">Mexico</td>
              </tr>
            </table>
          </div> */}
        </div>

        <div className="mt-24">
          {/* <DifferentFromOthers /> */}
        </div>

        <div className="mt-24">
          {/* <Industries /> */}
        </div>
 {/* <Accordion1 accordionData={accordionData1} /> */}
 <br />
        {/* <ProjectsCarousel /> */}
        {/* <div className="max-w-2xl mx-auto mt-24 text-center ">
          <h2 className="text-5xl font-bold lg:text-6xl">Not sure which solution fits best ?</h2>
          <br />
          
          <h2 className="text-2xl font-bold lg:text-3xl">Schedule a strategy session and explore premium services from just 1500</h2>
        </div>
         <div className="flex flex-col items-center justify-center w-full">
      

        </div> */}
      {/* <PricingCards/> 
  <FormCard2 /> */}
        <Footer />
      </div>
    </>
  );
};

export default services;



