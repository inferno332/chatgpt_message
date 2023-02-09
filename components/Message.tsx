/* eslint-disable @next/next/no-img-element */
import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
  key: string;
};

function Message({ message, key }: Props) {
  const isChatGPT = message.user._id === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt={message.user.name}
          className="h-8 w-8"
        />
        <p className="pt-1 text-sm ">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
