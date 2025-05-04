import BooqitoWidget from "./BooqitoWidget";

export default function Reservation() {
  return (
    <section id="reservation" className="w-full bg-white text-gray-800">
      <div className="container">
        <div className="text-center py-8 px-4">
          <h3 className="text-2xl font-bold uppercase mb-4 mt-22">
            Rezervujte svůj zážitek
          </h3>
          <p className="max-w-xl mx-auto">
            Vyplňte kontaktní údaje, zvolte dárkový poukaz nebo slevový kód,
            zadejte fakturační údaje a vyberte způsob platby (online nebo na
            místě). Poté potvrďte objednávku – souhlasíte tím i s obchodními
            podmínkami a ochranou osobních údajů.
          </p>
        </div>
        <BooqitoWidget />
      </div>
    </section>
  );
}
