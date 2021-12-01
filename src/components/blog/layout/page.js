/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import {MDXProvider} from '@mdx-js/react'
import Footer from 'components/common/footer'
import Navigation from 'components/common/navigation'

/////////////////////////////////////////////////////////////////////////

function Page({frontMatter, children}) {
  return (
    <div>
      <Navigation />
      <MDXProvider>
        <main className="prose prose-sm md:prose-lg prose-indigo px-5 mx-auto py-16 md:py-28">{children}</main>
      </MDXProvider>
      <Footer />
    </div>
  )
}

export default Page
