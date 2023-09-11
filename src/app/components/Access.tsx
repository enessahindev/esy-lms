"use client";

import Link from "next/link";

const Prod = [
  {
    id: 1,
    name: "Nextjs 101",
    href: "/courses/videos/2023-07-18.mp4",
    imageSrc: "/images/thumbnail.png",
  },
  {
    id: 2,
    name: "Nextjs 101",
    href: "/courses/videos/2023-04-02.mp4",
    imageSrc: "/images/thumbnail.png",
  },
  {
    id: 3,
    name: "Nextjs 101",
    href: "/courses/videos/2023-04-02.mp4",
    imageSrc: "/images/thumbnail.png",
  },
  {
    id: 4,
    name: "Nextjs 101",
    href: "/courses/videos/2023-04-02.mp4",
    imageSrc: "/images/thumbnail.png",
  },
];

export default function ProductVideos() {
  return (
    <section
      className="overflow-hidden bg-white py-24 sm:py-32 "
      id="ProductVideos"
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Free Coursendo!
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Free Courses
        </p>

        <div className="mt-8 mx-auto grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Prod.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-156 lg:w-156">
                <img
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="text-md text-primary">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
