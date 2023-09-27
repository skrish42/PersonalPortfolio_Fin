import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A self-motivated person with a great passion for exploring various technologies and a growth-oriented mindset. 
          Well versed in web design and a good team player. 
          while continuously seeking knowledge expansion in any given field.
          Always cheerful and contribute positively to the working environment's growth and focussed on delivering innovative, high-quality solutions</p>
        <br />

        <p className="text-xl">
          Won national level Smart India Hackathon (SIH'22) in our problem statement where we competed against teams all over the country<br></br>
          Finalist of SSN College's 'Hack and Tackle 4.0' hackathon, a intercollege hackathon.<br></br>
          Secured 2nd mention in Caterpillar company's hackathon 'Code-A-Thon 2023' competing 97 teams in final.

        </p>
      </div>
    </div>
  );
};

export default About;
