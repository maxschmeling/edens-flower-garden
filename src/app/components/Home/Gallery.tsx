export default function Gallery() {
  return (
    <section className="py-12">
      <div className="overflow-scroll">
        <div className="flex flex-row gap-4 py-12">
          <img
            src="https://place-hold.it/550x300"
            alt="photo1"
            className="pl-12"
          />
          <img src="https://place-hold.it/250x300" alt="photo2" />
          <img src="https://place-hold.it/550x300" alt="photo3" />
          <img src="https://place-hold.it/250x300" alt="photo4" />
          <img src="https://place-hold.it/550x300" alt="photo5" />
          <img src="https://place-hold.it/250x300" alt="photo6" />
          <img src="https://place-hold.it/550x300" alt="photo7" />
          <img
            src="https://place-hold.it/250x300"
            alt="photo8"
            className="pr-12"
          />
        </div>
      </div>
    </section>
  );
}
