import { description } from '@/appData'
import { EarthIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ScrollToTop from '../scrollToTop/ScrollToTop'

const socialLinks = [
  {
    name: 'LinkedIn',
    link: '',
    icon: <LinkedinIcon />,
  },
  {
    name: 'X',
    link: '',
    icon: <TwitterIcon />,
  },
  {
    name: 'Facebook',
    link: '',
    icon: <FacebookIcon />,
  },
  {
    name: 'Website',
    link: '',
    icon: <EarthIcon />,
  },
]

const categories = {
  title: 'Categories',
  items: [
    { label: 'Affiliate Guides', href: `/` },
    { label: 'Best Programs', href: `/` },
    { label: 'Compliance', href: `/` },
  ],
}

const quickLinks = {
  title: 'Quick Links',
  items: [
    {
      label: 'Guides',
      href: `/blogs`,
    },
  ],
}

const resources = {
  title: 'Resources',
  items: [
    { label: 'Complete Guide', href: '/blogs/business-loan-affiliate-programs-complete-guide' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Editorial Policy', href: '/editorial-policy' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-[#191F33]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 pb-10 pt-16 sm:grid-cols-[40fr_30fr_30fr] md:grid-cols-[40fr_30fr_30fr_30fr]">
          <div className="">
            <Link href="/" className="mb-8 flex items-center gap-5 text-white">
              <Image
                src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
                alt="Business Loan Affiliate Library"
                width={40}
                height={40}
              />
              <h6 className="text-3xl font-medium tracking-wider">BLA Library</h6>
            </Link>

            <div className="max-w-64">
              <p className="mt-3 text-[#767E94]">{description}</p>
            </div>
          </div>
          <div>
            <h6 className="mb-7 text-xl text-white">{categories.title}</h6>
            <ul>
              {categories.items.map(({ label, href }) => (
                <li
                  key={label}
                  className="mt-3 text-base font-normal text-[#767E94] transition-all duration-150 ease-in hover:text-white hover:underline hover:decoration-[#00AAFF] hover:underline-offset-8">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="mb-7 text-xl text-white">{quickLinks.title}</h6>
            <ul>
              {quickLinks.items.map(({ label, href }) => (
                <li
                  key={label}
                  className="mt-3 text-base font-normal text-[#767E94] transition-all duration-150 ease-in hover:text-white hover:underline hover:decoration-[#00AAFF] hover:underline-offset-8">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
              <li className="mt-3 text-base font-normal text-[#767E94] transition-all duration-150 ease-in hover:text-white hover:underline hover:decoration-[#00AAFF] hover:underline-offset-8">
                <Link href="/blogs/business-loan-affiliate-programs-complete-guide">
                  Start Here
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-7 text-xl text-white">{resources.title}</h6>
            <ul>
              {resources.items.map(({ label, href }) => (
                <li
                  key={label}
                  className="mt-3 text-base font-normal text-[#767E94] transition-all duration-150 ease-in hover:text-white hover:underline hover:decoration-[#00AAFF] hover:underline-offset-8">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative bg-[#2E3447]">
        <ScrollToTop />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-[26px] md:flex-row md:justify-between">
          <p className="text-center text-[#767E94]">
            Business Loan Affiliate Library © 2026. Guides, comparisons, and playbooks for monetizing business funding traffic.
          </p>
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="text-[#767E94] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer">
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
