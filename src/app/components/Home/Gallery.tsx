export default function Gallery() {
  return (
    <section className="pb-4 md:pt-6 md:pb-12" id="gallery">
      <div className="overflow-scroll no-scrollbar">
        <div className="flex flex-row gap-4 py-12 ml-12 h-96" id="galleryScroll">
          <img src="/gallery/boys.jpg" alt="Eden's boys" />
          <img src="/gallery/eden-bw.jpg" alt="Eden" />
          <img src="/gallery/couple.jpg" alt="Steve and Eden" />
          <img src="/gallery/family.jpg" alt="family" />
          <img src="/gallery/dinner.jpg" alt="dinner" />
          <img src="/gallery/hearts.png" alt="Eden with hearts" />
          <img src="/gallery/row.jpg" alt="Eden's family" />
          <img src="/gallery/fancy-dinner.jpg" alt="dinner" />
          <img src="/gallery/walking.jpg" alt="Eden walking" />
          <img src="/gallery/dressed-up.jpg" alt="Steve and Eden" className="pr-12" />
        </div>
      </div>
    </section>
  );
}
