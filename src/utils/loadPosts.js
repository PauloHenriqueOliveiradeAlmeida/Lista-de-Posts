async function loadPosts () {
    const postsRes = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosRes = fetch("https://jsonplaceholder.typicode.com/photos");
    const [posts, photos] = await Promise.all([
      postsRes,
      photosRes
    ]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {
        ...post,
        photo: photosJson[index].url
      }
    });

    return postsAndPhotos;
  }

export default loadPosts;
