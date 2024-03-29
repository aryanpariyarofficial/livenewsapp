import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';

async function Homepage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','))
  // console.log(news);
  return (
    <div className=''>
      {/* News list news */}

      <NewsList news={news} />
    </div>
  )
}

export default Homepage;
