/* eslint-disable @next/next/no-img-element */
"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

import { db } from "@/firebase";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex p-2 flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div className="hidden md:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <p className="animate-pulse text-center text-white">
                Loading chats...
              </p>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div className="flex flex-col cursor-pointer hover:opacity-50" onClick={() => signOut()}>
          <img
            src={session.user?.image!}
            alt=""
            className="h-10 w-10 rounded-full mx-auto mb-2"
          />
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-white mx-auto" />
        </div>
      )}
    </div>
  );
}

export default SideBar;
