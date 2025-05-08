import Image from "next/image";
import MasonryGallery from "./components/masonryGallery";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })

export default async function Home() {
  const { resources } = await cloudinary.search.expression('prop-3109').execute(); // Destructure 'resources' from this response since this response came back with a property of 'resources' that includes that array of resources
  console.log(resources);

  return (
    <div className="">
      <Header />
      <div className="grid min-h-screen py-24 px-8 items-center justify-items-center font-[family-name:var(--font-geist-sans)] md:max-w-6xl mx-auto">
        <main className="flex flex-col gap-6 row-start-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grow-0">
              <Image 
                src="https://res.cloudinary.com/dnkwvd83w/image/upload/v1746656856/img5_smnkqb.jpg"
                alt="Image of Unit"
                width={2936}
                height={2936}
                className="rounded-lg"
              />
              <div className="text-sm text-accent mt-2">
                Listing Last Updated: 05/07/2025
              </div>
            </div>
            <div className="grow-1">
              <div className="grid gap-2">
                <div className="badge badge-primary">
                  For Lease
                </div>
                <div>
                  <div className="text-2xl text-secondary font-bold">
                    $1,900/month
                  </div>
                  <div className="text-lg text-secondary">
                    3109 E Colfax Ave, Denver, CO 80206
                  </div>
                </div>
                <div className="text-sm text-secondary">
                  This property offers a spacious 600 square feet of customizable retail area, perfect for a boutique shop, café, or professional services. Situated on the high traffic street of Colfax, this location benefits from excellent footfall and visibility.
                </div>
                <div className="text-sm text-secondary">
                  The property features high ceilings, natural light, and an open floor plan providing endless possibilites to design the space to meet your business needs.
                </div>
                <ol className="list-inside list-disc text-sm text-left sm:text-left text-secondary">
                  <li>600 sq. ft.</li>
                  <li>Base rent $1,900/month</li>
                  <li>Water and trash billed separately</li>
                  <li>Pay for own electricity</li>
                  <li>Swamp cooler</li>
                  <li>High traffic location with excellent visibility</li>
                </ol>
                <div className="text-sm text-secondary">
                  <p className="">Contact us for more details or schedule a tour</p>
                  <div className="flex gap-1 items-center text-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p>colfaxandsaintpaul@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider text-sm">Image Gallery</div>
          <div>
            <MasonryGallery images={resources}/>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
