import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/RoomData";

interface RoomProps {
  room: Room;
  isActive?: boolean;
}

export default function Room({ room, isActive = false }: RoomProps) {
  return (
    <Link
      href={`/rooms/${room.id}`}
      className={`block bg-black/65 shadow-lg rounded-lg overflow-hidden transition-all duration-300 h-[500px] ${
        isActive ? "scale-100" : "scale-90 opacity-70"
      }`}
    >
      <div className="relative h-64">
        <Image src={room.img} alt={room.title} fill className="object-cover" />
      </div>
      <div className="p-6 text-center flex flex-col justify-between h-[calc(500px-16rem)]">
        <div>
          <h4 className="font-bold text-xl mb-2">{room.title}</h4>
          <p className="text-gray-300 mb-4">{room.desc}</p>
        </div>
        <div
          className={`px-4 py-2 rounded transition-colors ${
            room.isAvailable
              ? "bg-red-800 hover:bg-red-900 text-white"
              : "bg-gray-600 text-gray-300 cursor-not-allowed"
          }`}
        >
          {room.isAvailable ? "Rezervovat" : "Již brzy!"}
        </div>
      </div>
    </Link>
  );
}
