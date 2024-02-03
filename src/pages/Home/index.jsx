import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import loadPosts from '../../utils/loadPosts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';

function Home() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(18);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = posts.length >= allPosts.length;

  const filteredPosts = searchValue ?
    allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) :
    posts;

  const getPosts = useCallback(async (postsPerPage) => {
    const posts = await loadPosts();
    setAllPosts(posts);
    setPosts(posts.slice(0, postsPerPage));
  }, []);

  useEffect(() => {
    getPosts(postsPerPage)
  }, [getPosts, postsPerPage]);




  const loadMorePosts = () => {
    setPosts([...posts, ...allPosts.slice(posts.length, posts.length + postsPerPage)]);
  }

  const handleChange = (event) => {
    const { value } = event.target
    setSearchValue(value);
  }


  return (
    <div className="container">

      <div className="search-container">
        <SearchInput searchValue={searchValue} handleChange={handleChange} />
        {searchValue && (
          <h1>Termo de busca: {searchValue}</h1>
        )}
      </div>


      {filteredPosts.length > 0 ?
        <Posts posts={filteredPosts} /> :
        <p>Não existem posts que incluem {searchValue}, tente outro termo</p>
      }
      {!searchValue && (
        <Button value={!noMorePosts ? "Carregar mais" : "Acabaram os posts"} onClick={loadMorePosts} disabled={noMorePosts} />
      )}
    </div>
  );
}


export default Home;
