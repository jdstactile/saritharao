import ImageWithLoader from "@/components/ImageWithLoader";
import ContactForm from "@/components/ContactForm";

const CLIENT_LOGO_BASE = "https://saritharao.com/wp-content/uploads/2020/12/";

const clientLogos = [
  ["Scroll_India_Logo.png", "download-4-1.png", "logos-US_hero-blk.png", "dwlLogo.png"],
  ["unnamed_1.png", "ie-default-image.png", "Atlas_Obscura_logo.png", "National-Geographic-Logo.png"],
  ["218-2186575_thehindu-logo-logo-of-the-hindu-newspaper-hd-1.png", "Logo-Hindu-Business-Line-600-400.png", "1200px-AD_Architectural_Digest_Germany_Logo.png", "5edcc7ad8ab6b32fb7b31aeef0f9f5f8e5c86baf_large.png"],
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative flex min-h-[420px] items-end overflow-hidden bg-cover bg-center pb-16"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(244,240,233,0.9) 30%, rgba(244,240,233,0) 100%), url("https://saritharao.com/wp-content/uploads/2020/12/florist-11.jpg")',
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <h1 className="font-heading text-6xl font-bold leading-none text-primary md:text-[80px]">
            About Me
          </h1>
        </div>
      </section>

      {/* Bio section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <ImageWithLoader
              src="https://saritharao.com/wp-content/uploads/2021/03/sarithaRao-profile-2-e1614758074123.jpg"
              alt="Saritha Rao Rayachoti"
              className="w-full rounded-3xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center py-10">
            <h2 className="mb-5 text-2xl font-normal leading-snug text-primary md:text-[32px]">
              Saritha Rao Rayachoti is a writer who lives and works in India. Since 2004 her articles and short fiction have been extensively published in Indian and international publications, anthologies and literary magazines.
            </h2>
            <div className="my-4 h-[3px] w-12 bg-accent" />
            <p className="text-lg leading-relaxed text-primary/80">
              Saritha has been a freelance journalist since 2004, and has contributed articles for Indian and International publications such as Atlas Obscura, Architectural Digest India, Arts Illustrated, The Hindu, National Geographic Traveller India, Mint, and Scroll.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-primary/80">
            Her short fiction has been published in literary magazines such as The Indian Quarterly, Out of Print, Joao-Roque Literary Journal and Papercuts, and part of anthologies such as The Best Asian Short Stories (2017). Her story, Marking Time, was shortlisted for the H.G. Wells Short Story Competition 2019 and published in their anthology, Time.
          </p>
          <p className="text-lg leading-relaxed text-primary/80">
            Writing is a process of discovery for Saritha, and every time she writes, she discovers a little more about the world, its people and herself.
          </p>
        </div>
      </section>

      {/* History section */}
      <section
        className="relative min-h-[400px] bg-cover bg-center py-20"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(213,222,232,1) 30%, rgba(213,222,232,0) 100%), url("https://saritharao.com/wp-content/uploads/2020/12/florist-12.jpg")',
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="mb-6 text-lg leading-relaxed text-primary/90">
                Saritha&apos;s strength comes from the diversity of her writing experience, and in her constant search for the quirky, the paradoxical and the heartfelt. Her curiosity has served her well, and she attributes it to a somewhat-nomadic childhood, moving cities every three years, not belonging to any one place, yet, belonging everywhere.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-primary/90">
                Saritha enjoys writing the conventional short story form &ndash; with a twist in the end, and at the very least, the hint of a resolution. Her stories are rooted in India, and evoke its rich cultural and literary traditions, with all the inherent bustle, kitsch and peculiarities.
              </p>
              <p className="text-lg font-bold text-primary">
                Saritha is based in Chennai, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients logos */}
      <section className="py-20" style={{ backgroundColor: "rgba(94,181,213,0.06)" }}>
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-14 text-center text-4xl font-bold text-primary">
            Clients
          </h2>
          {clientLogos.map((row, i) => (
            <div key={i} className="mb-10 grid grid-cols-2 items-center gap-8 md:grid-cols-4">
              {row.map((logo) => (
                <div key={logo} className="flex items-center justify-center px-4">
                  <ImageWithLoader
                    src={`${CLIENT_LOGO_BASE}${logo}`}
                    alt={logo.replace(/[-_]/g, " ").replace(/\.\w+$/, "")}
                    className="max-h-16 max-w-[70%] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h2 className="mb-8 text-[32px] font-bold text-primary">
                Get in Touch
              </h2>
              <div className="mb-6">
                <h3 className="mb-1 text-base font-semibold text-primary">Address</h3>
                <p className="text-base text-primary/80">Chennai, India</p>
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold text-primary">Email</h3>
                <a
                  href="mailto:rao.saritha@gmail.com"
                  className="text-base text-primary/80 hover:text-accent"
                >
                  rao.saritha@gmail.com
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
