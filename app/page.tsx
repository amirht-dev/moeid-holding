import React from 'react'
import Hero from './_components/sections/Hero'
import Collections from './_components/sections/Collections'
import Section from './_components/Section'
const items = [
  {
    icon: '/images/icons/Video.png',
    title: 'مشاوره',
    boldTitle: 'حقوقی'
  },
  {
    icon: '/images/icons/Bookmark.png',
    title: 'لایحه',
    boldTitle: 'دفاعی'
  },
  {
    icon: '/images/icons/Edit.png',
    title: 'تنظیم',
    boldTitle: 'دادخواست'
  },
  {
    icon: '/images/icons/Paper.png',
    title: 'قبول',
    boldTitle: 'دعاوی'
  },
]

function Home() {
  return (
    <>
    <Hero />
    <Collections />
    <Section 
      img="/images/section-1.png" 
      title='حقوقی'
      subtitle='Law Group'
      desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
      href=''
      items={items}
      />
    <Section 
      img="/images/section-1.png" 
      title='حقوقی'
      subtitle='Law Group'
      desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
      href=''
      items={items}
      reverse
      />
    <Section 
      img="/images/section-1.png" 
      title='حقوقی'
      subtitle='Law Group'
      desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
      href=''
      items={items}
      />
    </>
  )
}

export default Home
