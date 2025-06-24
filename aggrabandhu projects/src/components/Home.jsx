import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-yellow-100">
        <div className="flex   w-full">
          <p className="text-2xl font-bold mt-10 px-15">
            “ महाराजा अग्रसेन जी के संदेश 'एक ईंट, एक रुपया' को साकार करते हुए,
            संस्था उन अग्रबंधु परिवारों की मदद करती है जहाँ परिवार के मुख्य
            पालनकर्ता की असमय मृत्यु हो जाती है और आश्रित बच्चे अबोध उम्र के
            होते हैं, जिससे परिवार गंभीर आर्थिक संकट में आ जाता है “।
          </p>
          <img
            className="h-70 "
            src="https://aggrabandhuss.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlaxmiBrick.f339f2f1.png&w=1920&q=75"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center justify-center">
            <img
              className="mt-10 w-[800px]"
              src="https://aggrabandhuss.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsahyog.2386bd2d.png&w=1200&q=75"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center relative">
            <img className="w-230 object-cover rounded-full mt-5 border-22 border-green-800"
              src="https://aggrabandhuss.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsideVishkarma.d2ef8851.png&w=3840&q=75"
              alt="Background"
            />
            <img className="over" src="https://aggrabandhuss.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmianvishkarma.5bc44caf.png&w=1080&q=75" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
