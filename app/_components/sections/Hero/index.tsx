import Dots from '@/components/ui/Dots';
import Image from 'next/image';
import React from 'react';

const ContentContainer = () => (
  <div className="flex flex-1 max-md:gap-12 flex-col max-md:bg-secondary max-md:rounded-b-[15px] -z-20">
    <div className="relative flex flex-[3] items-center gap-10 max-md:text-center md:rounded-[0px_50px_50px_0] bg-secondary md:ps-14">
      <span className="absolute left-0 top-full max-md:hidden overflow-hidden aspect-square w-[50px] bg-inherit after:bg-base-100 after:absolute after:w-[200%] after:aspect-square after:translate-x-1/2 after:rounded-full" />
      <Dots rows={6} className='bg-base-100/50 max-md:hidden' />
      <div className='space-y-2'>
        <h1 className="text-2xl md:text-5xl font-bold text-secondary-content">
          هلدینگ <span className="text-primary">معید.</span>
        </h1>
        <p className="text-secondary-content/50 font-normal">مرجع بزرگ سوالات و دوره های حقوقی</p>
      </div>
    </div>

    <div className="flex-[2] rounded-[15px] md:px-[50px] grid place-items-center text-base-content/50 leading-relaxed  max-md:max-w-[70%] mx-auto max-md:-mb-5 relative">
      <span className="absolute inset-4 rounded-[inherit] left-0 -rotate-6 bg-base-100 -z-10" />
      <p className='z-30 max-md:bg-slate-200 rounded-[inherit] p-3'>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
    </div>
  </div>
);

const VideoContainer = () => (
  <div className="flex-1 rounded-t-[15px] md:rounded-[50px_0_50px_50px] bg-secondary p-8 md:p-16">
    <div className="relative aspect-[6/4] w-full rounded-[15px] md:rounded-[50px]">
      <span className="absolute -inset-3 md:-inset-5 rounded-[inherit] bg-gradient-to-tr from-base-100/50 via-transparent to-transparent" />
      <Image
        src="/images/hero-img.png"
        alt="hero"
        fill
        className="rounded-[inherit] object-cover object-center"
      />
    </div>
  </div>
);

function Hero() {
  return (
    <section className="container flex flex-col-reverse md:flex-row">
      <ContentContainer />
      <VideoContainer />
    </section>
  );
}

export default Hero;
