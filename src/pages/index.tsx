import Content from '../components/content'
import Header from '../components/header'
import getPageData from '../lib/notion/getPageData'
import { BLOG_INDEX_ID } from '../lib/notion/server-constants'




export async function unstable_getStaticProps() {
  const postData = await getPageData(BLOG_INDEX_ID, 2)
  const post = { content: postData.blocks }

  return {
    props: {
      post,
    },
  }
}

export default ({ post }) => {
  return (
    <article>
      <h1>Chao Xu</h1>
      <Header title="Chao Xu | About" />
      <Content blocks={post.content || []} />
    </article>
  )
}
