import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/olomouc-bg.jpg')" }}
    >
      {/* tmavý overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* obsah */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-heading text-5xl md:text-8xl uppercase drop-shadow-lg tracking-[0.2em]">
          ESCAPE GAMES
          <br />
          OLOMOUC
        </h1>
        <p className="mt-10 max-w-xl text-gray-400 text-lg md:text-xl">
          Vstupte do světa vzrušujících únikových her v srdci Olomouce. Ať už
          hledáte zážitek pro tým kolegů nebo rodinnou zábavu, naše únikové hry
          splní všechna vaše očekávání.
        </p>

        <div className="mt-12 text-sm font-extralight flex flex-col md:flex-row gap-4 items-center">
          {/* primární tlačítko */}
          <Link
            href="#rooms"
            className="px-8 py-5 bg-red-900 hover:bg-red-800 text-white uppercase tracking-wider rounded shadow"
          >
            Naše místnosti
          </Link>
          {/* sekundární tlačítko outline */}
          <Link
            href="#reservation"
            className="px-8 py-5 text-white font-heading uppercase tracking-wider rounded hover:bg-red-400/70 bg-red-300/70 "
          >
            Rezervovat
          </Link>
        </div>
      </div>
    </section>
  );
}
