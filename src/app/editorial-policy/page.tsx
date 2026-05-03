import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/BlogNavbar'

export const metadata = {
  title: 'Editorial Policy | Business Loan Affiliate Library',
  description:
    'Editorial policy for Business Loan Affiliate Library, including standards for affiliate reviews, comparisons, and funding-related educational content.',
}

export default function EditorialPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-theme">
          Editorial Standards
        </p>
        <h1 className="mb-6 text-4xl font-bold text-primary">Editorial Policy</h1>

        <div className="space-y-6 text-lg leading-8 text-secondary">
          <p>
            Business Loan Affiliate Library is built to help publishers, marketers, brokers,
            creators, and referral partners understand business loan affiliate programs, referral
            models, funding offers, traffic strategies, compliance basics, and monetization
            opportunities.
          </p>

          <p>
            Our editorial goal is to explain how these programs work in plain English, compare
            options responsibly, and help readers avoid misleading claims, low-quality offers, and
            poor-fit partnerships.
          </p>

          <p>
            When content includes affiliate or referral relationships, those relationships should
            be disclosed clearly. Reviews, comparisons, and guides should prioritize usefulness,
            clarity, and reader fit over hype.
          </p>

          <p>
            We do not guarantee approval, funding, earnings, conversion rates, or affiliate
            payouts. Any examples are educational and should be verified against the current terms
            of the relevant provider or program.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
