import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/BlogNavbar'

export const metadata = {
  title: 'Affiliate Disclosure | Business Loan Affiliate Library',
  description:
    'Affiliate disclosure for Business Loan Affiliate Library, including referral relationships, compensation, and funding-content limitations.',
}

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-theme">
          Disclosure
        </p>
        <h1 className="mb-6 text-4xl font-bold text-primary">Affiliate Disclosure</h1>

        <div className="space-y-6 text-lg leading-8 text-secondary">
          <p>
            Business Loan Affiliate Library may earn compensation when readers click links,
            submit forms, apply through partner pages, or connect with funding providers mentioned
            on this site. This compensation may influence which programs, tools, or providers are
            featured, but our goal is to make the content useful, practical, and transparent for
            publishers, brokers, creators, and business owners evaluating funding-related affiliate
            programs.
          </p>

          <p>
            Business funding products vary widely. Approval, terms, costs, repayment structure,
            and availability depend on the provider, borrower profile, revenue, credit, time in
            business, industry, documentation, jurisdiction, and underwriting criteria. Nothing on
            this site should be treated as financial, legal, tax, or lending advice.
          </p>

          <p>
            Always review the official provider terms and disclosures before applying, promoting,
            or recommending any funding product or affiliate program.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
