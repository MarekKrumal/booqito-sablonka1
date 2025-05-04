export interface Room {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
  isAvailable: boolean;
}

export const rooms: Room[] = [
  {
    id: 1,
    title: "Tajemství kouzelné knihovny",
    desc: "Pro 2-6 osob, obtížnost: jednoduchá. Objevte tajemství staré knihovny plné kouzelných knih.",
    img: "/images/room1.jpg",
    link: "#reservation",
    isAvailable: true,
  },
  {
    id: 2,
    title: "Ztracený poklad",
    desc: "Pro 2-6 hráčů, obtížnost: střední. Pátrejte po legendárním pokladu v zapomenutých katakombách.",
    img: "/images/room2.jpg",
    link: "#",
    isAvailable: false,
  },
  {
    id: 3,
    title: "Temný hrad",
    desc: "Pro 3-8 hráčů, obtížnost: vysoká. Pronikněte do srdce prokletého hradu a odhalte jeho tajemství.",
    img: "/images/room3.jpg",
    link: "#",
    isAvailable: false,
  },
  {
    id: 4,
    title: "Tajemství kouzelné knihovny 2",
    desc: "Pro 2-5 osob, obtížnost: střední. Objevte tajemství staré knihovny plné kouzelných knih.",
    img: "/images/room4.jpg",
    link: "#reservation",
    isAvailable: true,
  },
  {
    id: 5,
    title: "Ztracený poklad",
    desc: "Pro 3-7 hráčů, obtížnost: vysoká. Pátrejte po legendárním pokladu v zapomenutých katakombách.",
    img: "/images/room5.jpg",
    link: "#",
    isAvailable: false,
  },
  {
    id: 6,
    title: "Temný hrad",
    desc: "Pro 2-6 hráčů, obtížnost: expertní. Pronikněte do srdce prokletého hradu a odhalte jeho tajemství.",
    img: "/images/room6.jpg",
    link: "#",
    isAvailable: false,
  },
];
