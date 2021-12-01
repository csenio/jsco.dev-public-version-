/* eslint-disable jsx-a11y/heading-has-content */
import {MDXProvider} from '@mdx-js/react'
import Footer from 'components/common/footer'
import Navigation from 'components/common/navigation'
import CodeBlock from '../codeBlock'
import {ArticleJsonLd, NextSeo} from 'next-seo'

const components = {
  h1: (p) => <h2 {...p} />,
  h2: (p) => <h3 {...p} />,
  h3: (p) => <h4 {...p} />,
  h4: (p) => <h5 {...p} />,
  code: CodeBlock,
}

/////////////////////////////////////////////////////////////////////////

function Blogpost({frontMatter, children}) {
  return (
    <div>
      <NextSeo
        title={frontMatter.title}
        description="This example uses more of the available config options."
        canonical={`https://jsco.dev/blog/${frontMatter.slug}`}
        openGraph={{
          url: `https://jsco.dev/blog/${frontMatter.slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://jsco.dev/blog/${frontMatter.slug}.png`,
              width: 842,
              height: 506,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://jsco.dev/blog/${frontMatter.slug}`}
        title={frontMatter.title}
        images={[`https://jsco.dev/blog/${frontMatter.slug}.png`]}
        datePublished={new Date(frontMatter.date)}
        authorName={['Jesco Wuester']}
        description={frontMatter.description}
      />
      <Navigation />
      <MDXProvider components={components}>
        <main className="mx-auto w-full max-w-prose lg:max-w-prose-lg px-5 py-8">
          <div className="text-center py-20">
            <div className=" text-indigo-600 font-bold mb-4"> {frontMatter.category}</div>
            <h1 className="text-gray-900 font-bold font-header text-4xl xl:text-5xl">{frontMatter.title}</h1>
            <div className="mt-2 text-gray-400">
              {frontMatter.date} <span className="text-gray-200">•</span> {frontMatter.readingTime} reading time
            </div>
          </div>

          <div className="prose prose-indigo lg:prose-lg ">{children}</div>
        </main>
      </MDXProvider>
      <Footer />
    </div>
  )
}

export default Blogpost
