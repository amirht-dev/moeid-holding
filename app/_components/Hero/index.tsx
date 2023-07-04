import Dots from '@/components/ui/Dots';
import Image from 'next/image';
import React from 'react';

const ContentContainer = () => (
  <div className="relative flex flex-1 flex-col">
    <div className="relative flex flex-1 items-center gap-10 rounded-[0px_30px_30px_0] bg-secondary ps-14">
      <span className="absolute left-0 top-full overflow-hidden aspect-square w-[30px] bg-inherit after:bg-base-100 after:absolute after:w-[200%] after:aspect-square after:translate-x-1/2 after:rounded-full" />
      <Dots rows={6} />
      <div className='space-y-2'>
        <h1 className="text-5xl font-bold text-secondary-content">
          هلدینگ <span className="text-primary">معید.</span>
        </h1>
        <p className="text-secondary-content/50 font-normal">مرجع بزرگ سوالات و دوره های حقوقی</p>
      </div>
    </div>

    <div className="flex-1 px-[30px] grid place-items-center text-base-content/50 leading-relaxed">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
    </div>
  </div>
);

const VideoContainer = () => (
  <div className="flex-1 rounded-[30px_0_30px_30px] bg-secondary p-16">
    <div className="relative aspect-[6/4] rounded-[30px]">
      <span className="absolute -inset-5 rounded-[inherit] bg-gradient-to-tr from-base-100/50 via-transparent to-transparent" />
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
    <section className="container flex">
      <ContentContainer />
      <VideoContainer />
    </section>
  );
}

export default Hero;
