import { categories } from '@/appData'
import CategoryList from '@/components/category/CategoryList'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/BlogNavbar'

export const metadata = {
  title: 'Categories | Business Loan Affiliate Library',
  description:
    'Browse Business Loan Affiliate Library categories, including affiliate guides, best programs, loan type programs, strategy, payouts, compliance, reviews, and tools.',
}

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-theme">
          Browse by Topic
        </p>
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Categories</h1>
        <p className="mb-10 max-w-3xl text-lg leading-8 text-secondary">
          Use these categories to navigate the business loan affiliate ecosystem: guides,
          comparison pages, loan-type programs, affiliate strategy, payout economics,
          compliance, program reviews, and conversion resources.
        </p>

        <CategoryList categories={categories} />
      </main>
      <Footer />
    </>
  )
}
