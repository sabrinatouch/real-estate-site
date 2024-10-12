import Image from "next/image";
import { QuadGallery } from "./components/quadGallery";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid min-h-screen py-24 px-8 items-center justify-items-center font-[family-name:var(--font-geist-sans)] md:w-5/6 mx-auto">
        <main className="flex flex-col gap-6 row-start-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grow-0">
              <Image 
                src="/img5.jpeg"
                alt="Image of Unit"
                width={2936}
                height={2936}
                className="rounded-lg"
              />
              <div className="text-sm text-accent mt-2">
                Listing Last Updated: 10/12/2024
              </div>
            </div>
            <div className="grow-1">
              <div className="grid gap-2">
                <div className="badge badge-primary">
                  For Lease
                </div>
                <div className="text-xl text-secondary font-bold">
                  3109 E Colfax Ave, Denver, CO 80206
                </div>
                <div className="text-sm text-secondary">
                  This versatile property offers a spacious [X,XXX] square feet of customizable retail area, perfect for a boutique shop, café, or professional services. Situated on the high traffic street of Colfax, this location benefits from excellent footfall and visibility.
                </div>
                <div className="text-sm text-secondary">
                  The property features high ceilings, natural light, and an open floor plan providing endless possibilites to design the space to meet your business needs.
                </div>
                <ol className="list-inside list-disc text-sm text-left sm:text-left text-secondary">
                  <li>XXXX sq. ft.</li>
                  <li>High traffic location with excellent visibility</li>
                  <li>Open floor plan</li>
                  <li>Street and neighborhood parking</li>
                </ol>
                <div className="text-sm text-secondary">
                  <p className="">Contact us for more details or schedule a tour</p>
                  <div className="flex gap-1 items-center text-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p>contact@colfaxandstpaul.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider text-sm">Image Gallery</div>
          <div>
            <QuadGallery />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
