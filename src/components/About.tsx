import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-4">O našich únikových hrách</h2>
        <p className="max-w-2xl mx-auto">
          Zažijte jedinečný zážitek plný napětí, logických hádanek a týmové
          spolupráce. Ideální pro teambuilding, oslavy i zábavu s přáteli.
        </p>
        <Image
          src="/images/escape-room.jpg"
          alt="Úniková hra"
          width={1200}
          height={1200}
          className="mt-8 mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
}
