"use client";
import { generateRandomAlphanumeric } from "@/lib/util";
import { useState } from "react";

export default function Home() {
  const [roomid, setRoomId] = useState("");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex gap-3">
        <input
          type="text"
          value={roomid}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-64 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter meeting id (empty for random)"
        />
        <button
          onClick={() => {
            if (roomid == "") {
              const roomName = createRoomName();
              window.location.href = `/conference/${roomName}`;
            } else {
              window.location.href = `/conference/${roomid}`;
            }
          }}
          className="px-4 py-2 bg-pink-500 text-white rounded-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          Join
        </button>
      </div>
    </div>
  );
}

function createRoomName() {
  return [generateRandomAlphanumeric(4), generateRandomAlphanumeric(4)].join(
    "-"
  );
}
