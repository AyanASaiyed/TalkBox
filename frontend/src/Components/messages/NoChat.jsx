import useSelf from "../../hooks/useSelf.js";

const NoChat = () => {
  const {loading,self} = useSelf();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-x1 text-white font-bold flex flex-col items-center gap-2">
        <p>Welcome To Your TalkBox, {self}👋</p>
        <p>Find Or Select Your Friends To Begin Your Yapping!</p>
      </div>
    </div>
  );
};

export default NoChat;
