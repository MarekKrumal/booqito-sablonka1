import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h5 className="font-bold mb-2">Adresa</h5>
          <p className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
            Václavské nám., 779 00 Olomouc 9
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h5 className="font-bold mb-2">Email</h5>
          <p className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            <Link href="mailto:hello@yourdomain.com">
              svatejvaclav3@gmail.com
            </Link>
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h5 className="font-bold mb-2">Telefon</h5>
          <p className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
            +420 333 333 333
          </p>
        </div>
      </div>
    </section>
  );
}
