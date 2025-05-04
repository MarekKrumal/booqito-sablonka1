import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/RoomData";

interface RoomProps {
  room: Room;
  isActive?: boolean;
}

export default function Room({ room, isActive = false }: RoomProps) {
  return (
    <div
      className={`block bg-black/65 shadow-lg rounded-lg overflow-hidden transition-all duration-300 h-[500px] ${
        isActive ? "scale-100" : "scale-90 opacity-70"
      }`}
    >
      <Link href={`/rooms/${room.id}`} className="block h-[calc(100%-4rem)]">
        <div className="relative h-64">
          <Image
            src={room.img}
            alt={room.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="font-bold text-xl mb-2">{room.title}</h4>
          <p className="text-gray-300">{room.desc}</p>
        </div>
      </Link>
      <div className="px-6 pb-6 mt-auto">
        <Link
          href={room.link}
          className={`block w-full text-center px-4 py-2 rounded transition-colors ${
            room.isAvailable
              ? "bg-red-800 hover:bg-red-900 text-white"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
          }`}
        >
          {room.isAvailable ? "Rezervovat" : "Již brzy!"}
        </Link>
      </div>
    </div>
  );
}
