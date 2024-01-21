import './styles.css';
import { Component } from 'react';
import loadPosts from '../../utils/loadPosts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';


class Home extends Component {
  state = {
    allPosts: [],
    posts: [],
    postsPerPage: 18,
    searchValue: ""
  };

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const posts = await loadPosts();
    this.setState({
      allPosts: posts,
      posts: posts.slice(0, this.state.postsPerPage)
    });
  }

  loadMorePosts = () => {
    const { posts, allPosts, postsPerPage } = this.state;
    this.setState({
      posts: [...posts, ...allPosts.slice(posts.length, posts.length + postsPerPage)]
    });
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, allPosts, searchValue } = this.state
    const noMorePosts = posts.length >= allPosts.length;

    const filteredPosts = searchValue ?
      allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) :
      posts;

    return (
      <div className="container">

        <div className="search-container">
          <SearchInput searchValue={searchValue} handleChange={this.handleChange}/>
          {searchValue && (
            <h1>Termo de busca: {searchValue}</h1>
          )}
        </div>


        {filteredPosts.length > 0 ?
          <Posts posts={filteredPosts} /> :
          <p>Não existem posts que incluem {searchValue}, tente outro termo</p>
        }
        {!searchValue && (
          <Button value={!noMorePosts ? "Carregar mais" : "Acabaram os posts"} onClick={this.loadMorePosts} disabled={noMorePosts} />
        )}
      </div>
    );
  }
}

export default Home;
