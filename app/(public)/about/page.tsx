import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { gradientBody } from "@/components/landing/sections/BusinessSection"

export const metadata: Metadata = {
  title: "Tentang Kami | ASHIRA Group",
  description:
    "ASHIRA Group adalah holding company yang membawahi ASHIRATECH (teknologi & AI) dan ASHIRA Apparel (garmen & apparel custom).",
}

/*
  Figma: section "redesign revisi" → "Prototype / 2 — About" (frame 1440 × 2333, navbar 88px = <Header /> fixed).
  Mulai xl (≥ 1280px) elemen memakai koordinat frame 1440 di dalam kanvas 1440px yang ditengahkan;
  di bawahnya isi ditumpuk (flow layout) dengan ukuran huruf yang diperkecil.
*/

const blocks = [
  {
    title: "ASHIRATECH",
    body: "Subholding teknologi ASHIRA Group, menyediakan layanan software as a service dan AI bagi pemilik bisnis dan UMKM. Melalui Agentic AI Negotiation, in-website design app, dan layanan end-to-end, ASHIRATECH mempermudah pelaku usaha mengelola operasional dan efisiensi bisnis mereka.",
  },
  {
    title: "ASHIRA Apparel",
    body: "Subholding ASHIRA Group yang bergerak di produksi garmen dan pembuatan customizable apparel, memproduksi jaket, t-shirt, vest, dan seragam custom untuk menghasilkan produk fashion yang sesuai kebutuhan.",
  },
  {
    title: "Ekosistem yang berkelanjutan",
    body: "Dengan menyatukan sisi teknologi dan produksi dalam satu grup, ASHIRA berupaya membangun ekosistem industri fashion yang lebih efisien dari proses desain hingga produksi.",
  },
]

/** Pill logo (Figma 336 × 99, radius 29.5, silver gradient + bayangan luar & dalam). */
const logoPill =
  "relative h-[84px] w-[286px] rounded-[29.5px] bg-[linear-gradient(90deg,#D1D1D1_0%,#FFFFFF_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_4px_4px_rgba(0,0,0,0.25)] sm:h-[99px] sm:w-[336px]"

/** Potongan logo dari sprite brand (Figma: AG BRAND GUIDELINE FEEDS (3)) — posisi persen sesuai Figma. */
function SpriteLogo({ alt, className, crop }: { alt: string; className: string; crop: React.CSSProperties }) {
  return (
    <div className={`absolute overflow-hidden ${className}`}>
      <Image
        src="/images/about/brand-logos-sprite.png"
        alt={alt}
        width={1080}
        height={1350}
        sizes="380px"
        className="absolute left-0 max-w-none"
        style={crop}
      />
    </div>
  )
}

/** Gambar dekorasi yang dipotong (object position via persen, sesuai Figma). */
function CroppedDecor({ src, className, crop }: { src: string; className: string; crop: React.CSSProperties }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- crop >100% tidak bisa diekspresikan next/image */}
      <img src={src} alt="" className="absolute max-w-none" style={crop} />
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[linear-gradient(147deg,#FFFFFF_0%,#D1D1D1_35%)]">
      {/* ---------- Lapisan latar (koordinat frame Figma, kanvas 1440 di tengah) ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[2333px]">
        <div className="absolute inset-0 bg-[linear-gradient(147deg,#FFFFFF_0%,#D1D1D1_35%)]" />
        {/* Pita gelap di belakang kartu (Rectangle 60) */}
        <div className="absolute inset-x-0 top-[810px] h-[783px] bg-[linear-gradient(270deg,#04030D_0%,#2B2996_100%)]" />
        {/* Pudar putih di atas pita (Rectangle 42) */}
        <div className="absolute inset-x-0 top-[810px] h-[356px] bg-[linear-gradient(0deg,rgba(255,255,255,0)_9.268%,#FFFFFF_82.113%)]" />

        <div className="absolute left-[calc(50%-720px)] top-0 h-full w-[1440px]">
          {/* Foto gedung buram, dibalik (AG BRAND GUIDELINE FEEDS (11) 3) */}
          <div className="absolute left-[-168px] top-[59px] flex h-[2043px] w-[1642px] items-center justify-center">
            <div className="-scale-y-100 rotate-[179.39deg]">
              <div className="relative h-[2025.8px] w-[1620.6px] blur-[7.9px]">
                {/* eslint-disable-next-line @next/next/no-img-element -- lapisan dekorasi buram */}
                <img src="/images/about/brand-feeds-11.png" alt="" className="absolute inset-0 size-full max-w-none object-cover" />
              </div>
            </div>
          </div>
          {/* Foto gedung samar di atas (AG BRAND GUIDELINE FEEDS (11) 2) */}
          <CroppedDecor
            src="/images/about/brand-feeds-11.png"
            className="left-[-150px] top-[-1028px] h-[1838px] w-[1624px] opacity-[0.07]"
            crop={{ left: "0.62%", top: "-0.5%", width: "99.98%", height: "110.43%" }}
          />
          {/* Cahaya kanan atas (Ellipse 5 & 6) */}
          {[
            { left: 872, top: -363 },
            { left: 869, top: -349 },
          ].map((p) => (
            <div
              key={p.top}
              className="absolute flex h-[827.1px] w-[904.5px] items-center justify-center mix-blend-lighten"
              style={{ left: p.left, top: p.top }}
            >
              <div className="rotate-[30.11deg]">
                <div className="relative h-[527px] w-[740px]">
                  <div className="absolute inset-[-57.86%_-41.2%]">
                    {/* eslint-disable-next-line @next/next/no-img-element -- SVG blur dekoratif */}
                    <img src="/images/about/glow-ellipse.svg" alt="" className="block size-full max-w-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Tekstur grid (AG BRAND GUIDELINE FEEDS (8) 2 & 1) */}
          <CroppedDecor
            src="/images/about/brand-feeds-8.png"
            className="left-[526px] top-[633px] h-[1095px] w-[889px] opacity-[0.18] mix-blend-multiply"
            crop={{ left: "-115.86%", top: "-31.65%", width: "215.91%", height: "219.15%" }}
          />
        </div>

        {/* Transisi hero → konten */}
        <div className="absolute inset-x-0 top-[600px] h-[240px] bg-[linear-gradient(180deg,rgba(240,240,234,0)_0%,rgba(240,240,234,0.95)_100%)]" />
      </div>

      {/* ---------- Hero ---------- */}
      <section className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-12 px-6 pb-16 pt-32 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:pt-40 xl:block xl:h-[736px] xl:p-0">
        <div className="xl:absolute xl:left-[127px] xl:top-[166px] xl:w-[747px]">
          <p className={`text-base font-medium leading-[19px] tracking-[-0.3px] ${gradientBody}`}>Tentang Kami</p>
          <h1
            className={`mt-[29px] text-[44px] font-bold leading-none tracking-[-0.054em] sm:text-[60px] xl:text-[74px] xl:tracking-[-4px] ${gradientBody}`}
          >
            Dua <em className="font-bold">subholding</em>, satu ekosistem fashion yang berkelanjutan
          </h1>
          <p className={`mt-[29px] max-w-[563px] text-base font-medium leading-[19px] tracking-[-0.3px] ${gradientBody}`}>
            ASHIRA Group adalah holding company yang membawahi dua subholding: ASHIRATECH di bidang teknologi &amp; AI,
            dan ASHIRA Apparel di bidang garmen dan produksi apparel custom.
          </p>
          <div className="mt-[29px] flex flex-col gap-4 sm:flex-row sm:gap-[53px]">
            <a
              href="#tentang"
              className="inline-flex h-[59px] w-full items-center justify-center rounded-[29.5px] bg-[linear-gradient(180deg,#04030D_0%,#2B2996_100%)] text-base font-medium tracking-[-0.3px] sm:w-[219px]"
            >
              <span className="bg-[linear-gradient(90deg,#D1D1D1_0%,#FFFFFF_100%)] bg-clip-text text-transparent">Tentang Kami</span>
              <Image src="/images/about/arrow-right-light.svg" alt="" width={24} height={24} />
            </a>
            <Link
              href="/#holdings"
              className="inline-flex h-[59px] w-full items-center justify-center rounded-[29.5px] border border-[#04030D] text-base font-medium tracking-[-0.3px] transition-colors hover:bg-white/50 sm:w-[219px]"
            >
              <span className={gradientBody}>Lihat Bisnis Kami</span>
              <Image src="/images/about/arrow-right-dark.svg" alt="" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* Pill logo ASHIRATECH & ASHIRA'H */}
        <div className="flex flex-col items-center gap-[25px] xl:absolute xl:left-[945px] xl:top-[251px] xl:items-start">
          <div className={logoPill}>
            <SpriteLogo
              alt="ASHIRATECH"
              className="left-[3.27%] top-[7.07%] h-[98.99%] w-[93.45%]"
              crop={{ width: "100.03%", height: "401.95%", top: "-53.66%" }}
            />
          </div>
          <div className={logoPill}>
            <SpriteLogo
              alt="ASHIRA'H — ASHIRA Apparel"
              className="left-[-5.95%] top-0 h-[85.19%] w-[111.77%]"
              crop={{ width: "100.03%", height: "556.76%", top: "-409.11%" }}
            />
          </div>
        </div>
      </section>

      {/* ---------- Kartu isi (Rectangle 32: 1265 × 1255, radius 52) ---------- */}
      <section id="tentang" className="scroll-mt-24 px-3 pb-12 sm:px-6 xl:px-0 xl:pb-[53px]">
        <div className="mx-auto max-w-[1265px] rounded-[32px] bg-[linear-gradient(49.27deg,#D1D1D1_11.209%,#FFFFFF_69.863%)] px-6 py-10 shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:px-12 sm:py-14 lg:rounded-[52px] xl:min-h-[1255px] xl:pb-[57px] xl:pl-[57px] xl:pr-[82px] xl:pt-[87px]">
          <div className="flex flex-col gap-12 xl:gap-0">
            {blocks.map((b, i) => (
              <div key={b.title} className={i === 1 ? "xl:mt-[93px]" : i === 2 ? "xl:mt-[89px]" : undefined}>
                <h2
                  className={`text-[34px] font-bold leading-none tracking-[-0.042em] sm:text-[48px] xl:h-[65px] xl:text-[65px] xl:tracking-[-2.7083px] ${gradientBody}`}
                >
                  {b.title}
                </h2>
                <p
                  className={`mt-4 text-lg font-medium leading-[1.21] tracking-[-0.3px] sm:text-[26px] xl:ml-[8px] xl:max-w-[1118px] xl:text-[36px] xl:leading-[44px] ${i === 2 ? "xl:mt-[28px]" : "xl:mt-[31px]"} ${gradientBody}`}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
          <p className={`mt-14 text-center text-base font-medium italic leading-[19px] tracking-[-0.3px] xl:mt-[97px] ${gradientBody}`}>
            Lihat postingan terbaru kami di Instagram{" "}
            <a href="https://instagram.com/ashira.group" target="_blank" rel="noopener noreferrer" className="hover:underline">
              @ashira.group
            </a>{" "}
            untuk cerita dan aktivitas terkini.
          </p>
        </div>
      </section>

      {/* ---------- Lapisan di atas kartu (urutan layer Figma): tekstur grid & pola titik ---------- */}
      <div aria-hidden className="pointer-events-none absolute left-[calc(50%-720px)] top-0 hidden h-[2333px] w-[1440px] xl:block">
        <CroppedDecor
          src="/images/about/brand-feeds-8.png"
          className="left-[1064px] top-[-122px] h-[1095px] w-[889px] opacity-10"
          crop={{ left: "-115.86%", top: "-31.65%", width: "215.91%", height: "219.15%" }}
        />
        {/* POST 2 (1) 1 — pola titik; mode lighten sehingga hanya tampak di atas pita gelap */}
        {/* eslint-disable-next-line @next/next/no-img-element -- lapisan dekorasi dengan blend mode */}
        <img
          src="/images/about/post-2-dots.png"
          alt=""
          className="absolute left-0 top-[831px] h-[1152px] w-[884px] max-w-none opacity-70 mix-blend-lighten"
        />
      </div>

      <Footer />
    </main>
  )
}
