import freelanceSiteProjectImg from '@/public/img/projects/freelance-site.png'
import rfProjectImg from '@/public/img/projects/rf.png'
import nawaProjectImg from '@/public/img/projects/nawa.png'
import criminalRollsProjectImg from '@/public/img/projects/criminal-rolls.png'
import ourHealthRoiProjectImg from '@/public/img/projects/ourhealthroi.png'


export const projects = [
  {
    id: 'personal-site',
    title: 'This Site!',
    image: {
      src: freelanceSiteProjectImg,
      alt: 'intro section of this website',
    },
    links: {
      blog: '/blog/how-to-design-a-gaudy-profile-site',
      liveSite: '/',
    },
    techStack: ['nextjs', 'sass', 'framerMotion'],
    decorativeIcon: 'cat',
    colorTheme: 'bg-vibrant-blue',
  },
  {
    id: 'health-roi',
    title: 'Our Health ROI',
    image: {
      src: ourHealthRoiProjectImg,
      alt: 'Our Health ROI project page',
    },
    links: {
      blog: '/blog/from-simple-to-civic-what-happened-when-i-built-the-thing-anyway',
      liveSite: 'https://ourhealthroi.com/',
    },
    techStack: ['nextjs', 'sass', 'framerMotion'],
    decorativeIcon: 'medical',
    colorTheme: 'bg-vibrant-red',
  },
  {
    id: 'rf',
    title: 'RF Profile Build',
    image: {
      src: rfProjectImg,
      alt: 'RF project page',
    },
    links: {
      blog: '/blog/rf-project',
      liveSite: 'https://rf-website.vercel.app/',
    },
    techStack: ['nextjs', 'sass', 'framerMotion'],
    decorativeIcon: 'cool',
    colorTheme: 'bg-vibrant-purple',
  },
  {
    id: 'nawa',
    title: 'Nawa - Not Another Work App',
    image: {
      src: nawaProjectImg,
      alt: 'Nawa project page',
    },
    links: {
      blog: '/blog/nawa-project',
      liveSite: 'https://nawa-website.vercel.app/',
    },
    techStack: ['nextjs', 'sass', 'firebase'],
    decorativeIcon: 'work',
    colorTheme: 'bg-vibrant-green',
  },

  {
    id: 'criminal-rolls',
    title: 'Criminal Rolls',
    image: {
      src: criminalRollsProjectImg,
      alt: 'Criminal Rolls project page',
    },
    links: {
      blog: '/blog/criminal-rolls-project',
      liveSite: 'https://criminal-rolls-website.vercel.app/',
    },
    techStack: ['nextjs', 'tailwind', 'firebase'],
    decorativeIcon: 'cinnamonRoll',
    colorTheme: 'bg-orange',
  },
]
