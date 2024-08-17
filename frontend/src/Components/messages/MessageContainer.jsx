import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChat from "./NoChat";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChat />
      ) : (
        <>
          <div className="flex bg-slate-400 px-4 py-2 mb-2 justify-center">
            <span className="text-black font-bold">Roronoa Zoro</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
