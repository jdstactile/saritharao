import HeroSlider from "./HeroSlider";
import Link from "next/link";
import ImageWithLoader from "@/components/ImageWithLoader";
import ScrollAnimate from "@/components/ScrollAnimate";

const clientLogos = {
  row1: [
    "Scroll_India_Logo.png",
    "download-4-1.png",
    "logos-US_hero-blk.png",
    "1200px-AD_Architectural_Digest_Germany_Logo.png",
  ],
  row2: [
    "unnamed_1.png",
    "ie-default-image.png",
    "Atlas_Obscura_logo.png",
  ],
  row3: [
    "218-2186575_thehindu-logo-logo-of-the-hindu-newspaper-hd-1.png",
    "Logo-Hindu-Business-Line-600-400.png",
    "National-Geographic-Logo.png",
  ],
};

const CLIENT_LOGO_BASE =
  "https://saritharao.com/wp-content/uploads/2020/12/";

export default function Home() {
  return (
    <div>
      {/* A. Hero Slider */}
      <HeroSlider />

      {/* B. Featured Fiction */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "rgba(4,165,194,0.03)" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <ScrollAnimate>
            <h2
              className="mb-6 text-[32px] font-bold"
              style={{ color: "#164551" }}
            >
              Featured Fiction
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-gray-600">
              Saritha writes literary fiction that is rich with the textures of
              everyday Indian life &mdash; the rituals, the relationships, and the
              quiet dramas that unfold in domestic spaces. Her stories explore
              identity, memory, and belonging with warmth and precision.
            </p>
          </ScrollAnimate>

          {/* Featured blurb */}
          <ScrollAnimate delay={1}>
            <div className="mx-auto mb-10 max-w-md">
              <a
                href="https://www.outofprintmagazine.co.in/archive/june_2020-issue/saritha-rao-rayachoti_hide-and-seek.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg transition-shadow group-hover:shadow-xl">
                  <ImageWithLoader
                    src="https://saritharao.com/wp-content/uploads/2021/09/CleanShot-2021-09-02-at-22.00.50@2x.png"
                    alt="The Last Day Of School"
                    className="w-full object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#164551]">
                  The Last Day Of School
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Bangalore Review // June 2021
                </p>
              </a>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={2}>
            <Link
              href="/fiction"
              className="inline-block rounded-full bg-[#04A5C2] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              View all
            </Link>
          </ScrollAnimate>
        </div>
      </section>

      {/* C. About Me */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{ backgroundColor: "#164551" }}
      >
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage:
              "url(https://saritharao.com/wp-content/uploads/2021/09/home-profile_background-v2.png)",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Left column */}
          <ScrollAnimate>
            <div>
              <h3 className="mb-6 text-3xl font-bold text-white">About Me</h3>
              <p className="mb-8 leading-relaxed text-white/90">
                Saritha Rao Rayachoti is a writer based in India. She writes
                across genres &mdash; literary fiction, longform journalism, and
                cultural criticism. Her work has appeared in National Geographic
                Traveller India, Mint Lounge, The Hindu, Scroll.in, Architectural
                Digest, and other publications. She is drawn to stories about
                people, places, art, cinema, and food &mdash; the things that make
                life rich and interesting.
              </p>
              <Link
                href="/about"
                className="inline-block rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#04A5C2] transition-opacity hover:opacity-90"
              >
                Read More
              </Link>
            </div>
          </ScrollAnimate>

          {/* Right column - profile image */}
          <ScrollAnimate delay={2}>
            <div className="flex justify-center">
              <ImageWithLoader
                src="https://saritharao.com/wp-content/uploads/2021/09/home-profile-v2.png"
                alt="Saritha Rao Rayachoti"
                className="w-[90%] object-cover"
                style={{ borderRadius: "500px" }}
              />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* D. Clients */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <ScrollAnimate>
            <h2 className="mb-14 text-[32px] font-bold text-[#164551]">
              Clients
            </h2>
          </ScrollAnimate>

          {/* Row 1 - 4 logos */}
          <div className="mb-10 grid grid-cols-2 items-center gap-8 md:grid-cols-4">
            {clientLogos.row1.map((logo) => (
              <div key={logo} className="flex items-center justify-center px-4">
                <ImageWithLoader
                  src={`${CLIENT_LOGO_BASE}${logo}`}
                  alt={logo.replace(/[-_]/g, " ").replace(/\.\w+$/, "")}
                  className="max-h-16 max-w-full object-contain grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - 3 logos */}
          <div className="mb-10 grid grid-cols-2 items-center gap-8 md:grid-cols-3">
            {clientLogos.row2.map((logo) => (
              <div key={logo} className="flex items-center justify-center px-4">
                <ImageWithLoader
                  src={`${CLIENT_LOGO_BASE}${logo}`}
                  alt={logo.replace(/[-_]/g, " ").replace(/\.\w+$/, "")}
                  className="max-h-16 max-w-full object-contain grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Row 3 - 3 logos */}
          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3">
            {clientLogos.row3.map((logo) => (
              <div key={logo} className="flex items-center justify-center px-4">
                <ImageWithLoader
                  src={`${CLIENT_LOGO_BASE}${logo}`}
                  alt={logo.replace(/[-_]/g, " ").replace(/\.\w+$/, "")}
                  className="max-h-16 max-w-full object-contain grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
