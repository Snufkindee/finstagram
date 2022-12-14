import posts from '../../mock/posts'
import Post from './post'

const Feed = () => {
  return (
    <section className='space-y-3 z-20'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  )
}

export default Feed