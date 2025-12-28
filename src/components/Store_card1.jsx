// components/ShopCarousel.jsx
import React, { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Shop_cardlogo from "./Shop_cardlogo";

const items = [
  {
    title: "Mac",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202510?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4YkVwOVNLbHRldEZZYkpvZ0VDM1ZJYisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazlhTkRKemhDN0NEc1VzN1ZjMGR5dUk",
  },
  {
    title: "iPhone",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202509?wid=1200&hei=780&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXM1doT212VzJoWjBSKzRpbmNETHN1QnRHU3BERzdnOWdiQkwvWTZGajY2b1M0TjRWdzF2UjRGVEY0c3dBQVZ6VFN0TmdKaCs3NTJMbFVuOGp2LzI5RGc",
  },
  {
    title: "iPad",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg",
  },
  {
    title: "Apple Watch",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkeUdJZTE2SHMxcG9uUER3YTRFOUZ6ckh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2k5NGJENldmZ3lMeGxpSDNmeE9hd2s",
  },
  {
    title: "Apple Vision Pro",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=VzVpanYvTldHb05iVXFhc0xveWRLM25jd0w4dXFwc1hFbWZkNm9IcUR2bytSMWt1ZUNyTGx4SjRKL1pSL0ZDeGpCeVFkSWhuN0RJazJDeHBqaFFac0hlZzcwajlwb1R2dHNlazl1dldSUGQ5RzBLTDk5c25YRG5wR2ZpUlI4RFM",
  },
  {
    title: "AirPods",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yMDhFUStvWHB3SDlDa3VrdUZORWRqeld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VGZUMjJQZFhhT2thWmkxZjhra3FyZEk",
  },
  {
    title: "AirTag",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFltc1ByWXViNGVYdEdGdkhJbjJoMGs",
  },
  {
    title: "Apple TV 4K",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA",
  },
  {
    title: "HomePod",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA",
  },
  {
    title: "Accessories",
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aWRqT2drRk00QWZTdStjaG1MbFN0Z1BrcjVFNVdueFRVbVY3TGtiL2RjUWZiYi92WkVCUEt5TCtGS2UwaWpxS3I3V3pZTFFiS3ZLYmI4VE9UR00xblE",
  },
];

export default function Store_card1() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full py-8 bg-[#f5f5f7]">
      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-7 top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7] shadow rounded-full p-2"
      >
        <HiChevronLeft size={22} className="md:w-10 md:h-10 " />
      </button>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-30"
      >
        {items.map((item) => (
          <Shop_cardlogo
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-7 top-1/2 -translate-y-1/2 z-10 bg-[#d2d2d7a3] hover:bg-[#dfdfe2b2] active:bg-[#c2c2c7a7]  rounded-full p-2 "
      >
        <HiChevronRight size={22} className="md:w-10 md:h-10 " />
      </button>
    </div>
  );
}
