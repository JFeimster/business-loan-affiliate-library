import BlogCard from '@/components/blog/MinimalCard'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/BlogNavbar'
import { getBlogs } from '@/services/blogs'

export const metadata = {
  title: 'Guides | Business Loan Affiliate Library',
  description:
    'Business loan affiliate guides, comparisons, program reviews, strategy articles, and compliance resources.',
}

export default async function BlogsPage() {
  const posts = await getBlogs()

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-theme">
          Article Library
        </p>
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Guides</h1>
        <p className="mb-10 max-w-3xl text-lg leading-8 text-secondary">
          Explore business loan affiliate program guides, comparison articles, payout explainers,
          compliance resources, and affiliate growth playbooks.
        </p>

        <div className="grid gap-x-14 gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((blog) => (
            <BlogCard key={blog.slug} post={blog} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
