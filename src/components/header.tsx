import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ExtLink from './ext-link'

const navItems: { label: string; page?: string; link?: string }[] = [
  // TODO: Modify navItems
  { label: 'About', page: '/' },
  { label: 'Blog', page: '/blog' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ title = '', children = null }) => {
  const { pathname } = useRouter()

  return <>
    <Head>
      <title>{title || 'Chao'}</title>
      <meta
        name="description"
        content="Chao's blogs"
      />
      {/* <meta name="og:title" content="Chao" /> */}
    </Head>
    <header>
      <div>{children}</div>
      <nav>
        {children ? <div>
          <Link href={pathname.split('/').slice(0, -1).join('/')}>
            <a>
              Back
            </a>
          </Link>
        </div> : navItems.map(({ label, page, link }) => (
          <div key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
          </div>
        ))}
      </nav>
    </header>
  </>
}
