import ArrowButton from '@/components/ui/Buttons/ArrowButton';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Item = {
  icon: string;
  title: string;
  boldTitle: string;
};

type SectionProps = {
  reverse?: boolean;
  img: string;
  title: string;
  subtitle: string;
  desc: string;
  items: Item[];
  href: string;
};

function Section({
  img,
  title,
  subtitle,
  desc,
  href,
  items,
  reverse = false,
}: SectionProps) {
  return (
    <section className={clsx("relative ", !reverse && 'min-h-[80vh] flex items-center justify-center')}>
      {!reverse && (
        <span className="section-path absolute inset-0 -z-20 bg-gradient-to-r from-slate-100 to-transparent" />
      )}

      <div
        className={clsx(
          'container relative flex max-md:flex-col-reverse gap-7',
          reverse ? 'flex-row-reverse' : 'flex-row'
        )}
      >
        <div className="relative flex-1">
          <span className="absolute left-1/2 -z-10 aspect-square h-full -translate-x-1/2 rounded-full bg-gradient-to-t from-slate-100 to-transparent shadow-2xl">
            <span className="absolute inset-5 rounded-full bg-secondary" />
          </span>
          <Image src={img} alt="section" width={660} height={390} />
        </div>

        <div className="relative flex flex-1 flex-col justify-center">
          <span className={clsx("absolute max-md:hidden left-0 top-0 -z-10 aspect-square h-full rounded-full bg-slate-100 shadow-2xl", reverse ? 'translate-x-2/3' : "-translate-x-1/3")}>
            <span className="absolute inset-5 rounded-full bg-base-100" />
          </span>
          {/* header */}
          <div className="flex">
            <div className="p-4">
            <div className="relative aspect-square w-10 md:w-16">
              <Image
                src="/images/logo/logo-vector.png"
                alt="logo"
                fill
              />
            </div>
            </div>

            <div className="relative flex flex-1 items-center justify-between rounded-t-[20px] md:rounded-t-[30px] bg-slate-200 p-2 md:px-7 md:py-5">
              <span className="absolute bottom-0 left-full aspect-square w-[20px] md:w-[30px] bg-slate-200 after:absolute after:inset-0 after:rounded-bl-full after:bg-base-100" />
              <h2 className="text-xl md:text-3xl font-bold text-secondary">
                معید <span className="text-primary">{title}</span>
                <br />
                <span className="text-[.7em] font-normal opacity-50">
                  Moeid <span className="text-primary">{subtitle}</span>
                </span>
              </h2>
              <Link href={href}>
                <ArrowButton variant="Left" />
              </Link>
            </div>
          </div>

          {/* body */}
          <div className="rounded-[0_20px_20px_20px] md:rounded-[0_30px_30px_30px] bg-inherit bg-slate-200 p-3 md:p-7">
            <p className="text-sm">{desc}</p>
            <ul className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
              {items.map((item, idx) => (
                <li
                  className="rounded-[15px] bg-base-100 p-2 text-xs md:text-base"
                  key={idx}
                >
                  <Image src={item.icon} alt="icon" width={20} height={20} />
                  <span>{item.title}</span>
                  <br />
                  <b>{item.boldTitle}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
