/**
 * Maps post slugs to their external article URLs.
 * Posts with an entry here will open externally in a new tab
 * instead of navigating to the internal post page.
 */
const externalLinks: Record<string, string> = {
  // Batch 4 — April 2024 (these don't have posts in the CMS, added as stubs)
  "hazar-chaurasi-ki-maa-1998-a-mothers-grief-and-awakening":
    "https://www.ottplay.com/features/hazar-chaurasi-ki-maa-1998-a-mothers-grief-and-awakening/fbbc5b06b4415",
  "sila-nerangalil-sila-manithargal-1977":
    "https://www.ottplay.com/features/sila-nerangalil-sila-manithargal-1977-a-primer-on-grey-rape-human-nature-and-fleeting-morality/033b3cd4a1105",
  "literarily-speaking-40-years-of-masoom-1983":
    "https://www.ottplay.com/features/literarily-speaking-40-years-of-masoom-1983-a-little-boy-and-a-secret-that-fractures-a-happy-family/ac1136585d321",
  "literarily-speaking-daredevil-musthafa-2023":
    "https://www.ottplay.com/features/literarily-speaking-daredevil-musthafa-2023-life-and-times-in-abachuru-college/e98462559a770",
  "literarily-speaking-shyamchi-aai-1953-2023":
    "https://www.ottplay.com/features/literarily-speaking-shyamchi-aai-1953-2023-a-primer-on-moral-righteousness-and-a-sons-tribute-to-his-mother/bdb942de02803",
  "literarily-speaking-vidheyan-1994":
    "https://www.ottplay.com/features/literarily-speaking-vidheyan-1994-the-master-and-his-servant/18f73b0655108",
  "literarily-speaking-best-book-to-screen-adaptations-2023":
    "https://www.ottplay.com/features/literarily-speaking-best-book-to-screen-adaptations-on-indian-ott-in-2023/ca394ebbfd95",
  "literarily-speaking-30-years-of-maya-memsaab-1993":
    "https://www.ottplay.com/features/literarily-speaking-30-years-of-maya-memsaab-1993/ec28f51150809",
  "literarily-speaking-pinjar-2003":
    "https://www.ottplay.com/features/literarily-speaking-pinjar-2003-a-womans-place-in-the-world/05ee860dfe2",

  // Batch 2 — September 2023
  "literarily-speaking-rajnigandha-deepa-kapoor-and-the-fragrance-of-tuberoses":
    "https://www.ottplay.com/features/literarily-speaking-rajnigandha-deepa-kapoor-and-the-fragrance-of-tuberoses/400a6fda749",
  "literarily-speaking-namukku-parkkan-munthirithoppukal-two-worlds-and-a-vineyard":
    "https://www.ottplay.com/news/literarily-speaking-namukku-parkkan-munthirithoppukal-two-worlds-and-a-vineyard/5347a4443c305",
  "literarily-speaking-47-natkal-a-one-day-wedding-and-a-47-day-marriage":
    "https://www.ottplay.com/news/literarily-speaking-47-natkal-a-one-day-wedding-and-a-47-day-marriage/68daec7aa4205",
  "literarily-speaking-bhargavi-nilayam-a-writer-in-search-of-solitude-meets-a-spirit-with-unfinished-business":
    "https://www.ottplay.com/features/literarily-speaking-bhargavi-nilayam-a-writer-in-search-of-solitude-meets-a-spirit-with-unfinished-business/4844983d12216",
  "literarily-speaking-meena-1973-and-a-aa2016-one-popular-novel-two-interpretations":
    "https://www.ottplay.com/news/meena-1973-and-aaa2016-one-popular-novel-two-interpretations/9641b900b5965",
  "literarily-speaking-shatranj-ke-khilari-the-nawab-the-company-bahadur-the-noblemen-and-a-game-of-strategy":
    "https://www.ottplay.com/features/shatranj-ke-khilari-the-nawab-the-company-bahadur-the-noblemen-and-a-game-of-strategy/44856b0a15113",
  "50-years-of-chitralaya-gopus-kasethan-kadavulada-1972-an-authoritarian-stepmother-a-fake-godman-and-a-secret-money-safe":
    "https://www.ottplay.com/features/50-years-of-chitralaya-gopus-kasethan-kadavulada-1972-an-authoritarian-stepmother-a-fake-godman-and-a-secret-money-safe/a07ec428bd884",

  // Batch 1 — January 2023
  "40-years-of-subhalekha":
    "https://www.ottplay.com/features/40-years-of subhalekha/96f8aeb1d522",
  "40-years-of-subhalekha-3":
    "https://www.ottplay.com/features/40-years-of subhalekha/96f8aeb1d522",
  "55-years-of-pattanathil-bhootham":
    "https://www.ottplay.com/features/55-years-of-pattanathil-bhootham/e2082a232849",
  "old-locomotives-get-new-visitors-at-mysuru-rail-museum":
    "https://lifestyle.livemint.com/news/talking-point/take-a-virtual-tour-of-mysuru-rail-museum-on-indian-rail-transport-day-111650090128141.html",
  "beyond-mani-ratnams-ponniyin-selvan-kalki-krishnamurthys-contribution-to-tamil-cinema":
    "https://www.ottplay.com/news/beyond-mani-ratnams-ponniyin-selvan-kalki-krishnamurthys-contribution-to-tamil-cinema/7b2211bcdc116",
  "40-years-of-bharathirajas-tik-tik-tik-tamil-1981":
    "https://www.ottplay.com/features/40-years-of-bharathirajas-tik-tik-tik-tamil-1981/16eca79fa4476",
  "30-years-of-mahesh-bhatts-junoon-a-cursed-weretiger-and-a-magical-dagger":
    "https://www.ottplay.com/features/30-years-of-mahesh-bhatts-junoon-a-cursed-weretiger-and-a-magical-dagger/a19b967ddd830",
  "the-ultimate-foodies-road-trip-along-ecr":
    "https://natgeotraveller.in/ultimate-foodies-road-trip-along-ecr/",

  // Earlier articles — April 2022
  "a-chennai-apartment-is-a-modern-foreground-to-the-greenery-outside":
    "https://www.beautifulhomes.com/living/homes/a-chennai-apartment-is-a-modern-foreground-to-the-greenery-outside.html",
  "46-years-of-manmatha-leelai":
    "https://www.ottplay.com/features/46-years-of-manmatha-leelai/45fbdb13f1744",

  // February 2022
  "chennai-misses-its-beloved-mylapore-street-festival":
    "https://lifestyle.livemint.com/news/big-story/chennai-misses-its-beloved-mylapore-street-festival-111643202078653.html",
  "24-hours-in-mysuru":
    "https://natgeotraveller.in/24-hours-in-mysuru/",

  // October 2021
  "from-adimakal-to-nizhal-nijamagiradhu-the-taming-of-the-shrew-reimagined":
    "https://www.ottplay.com/news/from-adimakal-to-nizhal-nijamagiradhu-the-taming-of-the-shrew-reimagined/6535f24af5433",

  // December 2020
  "all-in-a-days-walk-2":
    "https://www.thehindubusinessline.com/blink/takeaway/All-in-a-day%E2%80%99s-walk/article20891142.ece",
  "the-flying-shuttles-of-melkote":
    "https://www.livemint.com/Sundayapp/0sdXIIUg7aXAdhlK13LYEL/The-flying-shuttles-of-Melkote.html",
  "picture-the-song-ajith-is-the-worlds-best-dad-in-unakkenna-venum-sollu":
    "https://scroll.in/reel/847890/picture-the-song-ajith-is-at-his-tender-best-in-unakkenna-venum-sollu",
  "the-shifting-sands-of-talakadu":
    "https://www.thehindubusinessline.com/blink/takeaway/the-shifting-sands-of-talakadu/article9215767.ece",
};

export default externalLinks;
