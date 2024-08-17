import React from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import MessageContainer from "../../Components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="justify-center items-center">
      <div className="text-3xl text-yellow-400 font-bold flex items-center justify-center py-5">(USER)'s TalkBox 🗣️📦</div>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-yellow-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
