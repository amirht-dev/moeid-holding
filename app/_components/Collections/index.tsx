'use client';

import Dots from '@/components/ui/Dots';
import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import clsx from 'clsx';

const Heading = ({ mobile = false }: { mobile?: boolean }) => (
  <div
    className={clsx('flex gap-3', mobile ? 'flex md:hidden' : 'hidden md:flex')}
  >
    <Dots rows={4} className="bg-black" />
    <h3
      className={clsx( mobile ? 'text-base-content text-xl' : 'text-white text-2xl')}
    >
      مجموعه های
      <br />
      <span className={clsx('font-bold', mobile && 'text-primary')}>معید.</span>
    </h3>
  </div>
);

function Collections() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section className="container">
      {/* mobile */}
      <div className="mb-8 md:hidden flex items-center justify-between">
        <Heading mobile />
        <div className="flex gap-2">
          <button
            className="grid place-items-center rounded-xl bg-secondary p-1"
            onClick={() => swiper?.slidePrev()}
          >
            <Image
              src="/images/icons/arrow/Arrow-Right.png"
              alt="slider previous button"
              width={25}
              height={25}
            />
          </button>
          <button
            className="grid place-items-center rounded-xl bg-secondary p-1"
            onClick={() => swiper?.slideNext()}
          >
            <Image
              src="/images/icons/arrow/Arrow-Left.png"
              alt="slider next button"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
      <div className="relative inset-x-2 rounded-3xl bg-primary bg-[url(/images/line.png)] bg-right bg-no-repeat p-4 md:p-10 ">
        <span className="absolute inset-x-8 -top-4 -z-10 h-full rounded-[inherit] bg-primary/50 max-md:hidden" />
        <div className=" text-white flex items-center max-md:hidden">
          <Heading />
          <p className="ms-auto max-w-md text-left">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1.8}
            spaceBetween={30}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
            className="md:-mb-16 md:mt-20"
            breakpoints={{
              768: {slidesPerView: 3},
              1000: {slidesPerView: 4},
            }}
          >
            {Array.from({ length: 8 }).map((_, idx) => (
              <SwiperSlide
                key={idx}
                className="rounded-[20px] bg-base-100 p-4 md:rounded-[30px] md:p-8"
              >
                <Image
                  src="/images/slider.png"
                  alt="slider"
                  width={130}
                  height={130}
                  className="max-md:hidden"
                />
                <Image
                  src="/images/logo/logo-light.png"
                  alt="slider"
                  width={180}
                  height={70}
                  className="md:hidden"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mx-auto mt-4 flex md:hidden max-w-fit gap-2">
        {Array.from({ length: swiper?.slides.length ?? 0 }).map((_, idx) => {
          const isActive = activeIdx === idx;
          return (
            <span
              key={idx}
              className={clsx(
                'h-1 rounded-full',
                isActive
                  ? 'w-6 bg-secondary'
                  : 'aspect-square w-2 bg-base-content/10'
              )}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Collections;
