/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();

  return (
    <div className="flex p-2 flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* Model Selection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt=""
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
