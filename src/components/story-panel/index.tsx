import stories from '../../mock/stories'
import IStory from '../../types/story'
import Story from './story'

const StoryPanel = () => {
  return (
    <section className="card flex gap-4">
      {stories.map((story: IStory) => {
        let username = story.username.split(' ').join('').toLowerCase()
        username = username.length <= 10 ? username : `${username.slice(0, 8)}...`
        return <Story key={story.id} username={username} image={story.image} />
      })}
    </section>
  )
}

export default StoryPanel