import Image from "next/image";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div>
      <div className="z-10 navbar bg-base-100 drop-shadow-md w-full pr-8 pl-8 font-[family-name:var(--font-geist-sans)] fixed text-primary gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
        </svg>
        <a className="text-xl">colfax and st paul</a>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen pr-8 pl-8 items-center justify-items-center sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-6 row-start-2 items-start sm:items-start pb-16 mt-20">
          <div>
            {/* <Carousel /> */}
            <Image 
              src="/img1.jpeg"
              alt="Image of Unit"
              width={2936}
              height={2936}
            />
            <div className="text-sm text-accent mt-2">
              Listing Last Updated: 10/12/2024
            </div>
          </div>
          <div>
            <div className="badge badge-lg badge-primary mb-2">For Lease</div>
            <div className="text-xl text-secondary font-bold mb-2">
              3109 E Colfax Ave, Denver, CO 80206
            </div>
            <div className="text-sm text-accent">
              Quaint retail space with highlight1, highlight2, and highlight3 located on Colfax with high traffic.
            </div>
          </div>
          <div className="flex gap-2 text-md text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            contact@colfaxandstpaul.com
          </div>
          <ol className="list-inside list-disc text-md text-left sm:text-left text-secondary">
            <li>More info</li>
            <li>More info</li>
            <li>More info</li>
            <li>More info</li>
          </ol>
          <div>
            more images here
          </div>
          <div>
            map component
          </div>
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-center text-accent border-accent border-t py-8 font-[family-name:var(--font-geist-sans)]">
        <aside>
          <div className="mb-6">
            <p className="text-md">
              colfax and st paul
            </p>
            <p className="text-sm">
              real estate
            </p>
          </div>
          <p className="text-sm">
            Copyright © 2024 - All rights reserved
          </p>
        </aside>
      </footer>
    </div>
  );
}
