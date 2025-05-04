"use client";

import { rooms } from "@/data/RoomData";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const room = rooms.find((r) => r.id === parseInt(id));

  const handleReservation = () => {
    window.location.href = "/#reservation";
  };

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Místnost nenalezena</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div
          onClick={() => (window.location.href = "/")}
          className="text-blue-500 hover:underline mb-8 inline-block cursor-pointer"
        >
          ← Zpět na hlavní stránku
        </div>

        <div className="bg-black/65 shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src={room.img}
              alt={room.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-4">{room.title}</h1>
            <p className="text-xl mb-8">{room.desc}</p>
            {room.isAvailable ? (
              <button
                onClick={handleReservation}
                className="inline-block px-6 py-3 bg-red-800 hover:bg-red-900 text-white rounded-lg transition-colors"
              >
                Rezervovat
              </button>
            ) : (
              <button
                disabled
                className="px-6 py-3 bg-gray-600 text-gray-300 rounded-lg cursor-not-allowed"
              >
                Již brzy!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
