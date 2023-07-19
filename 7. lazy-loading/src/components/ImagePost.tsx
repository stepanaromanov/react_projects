import { useState, useEffect } from 'react';
import LazyLoadPost from './LazyLoadPost';

type Post = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

function request<TResponse>(
    url: string,
    // `RequestInit` is a type for configuring 
    // a `fetch` request. By default, an empty object.
    config: RequestInit = {}
     
  // This function is async, it will return a Promise:
  ): Promise<TResponse> {
      
    // Inside, we call the `fetch` function with 
    // a URL and config given:
    return fetch(url, config)
      // When got a response call a `json` method on it
      .then((response) => response.json())
      // and return the result data.
      .then((data) => data as TResponse);
      
      // We also can use some post-response
      // data-transformations in the last `then` clause.
  }

const ImagePost = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        request<Post[]>("https://jsonplaceholder.typicode.com/photos")
          .then(res => setPosts(res))
          .catch((err) => {throw new Error(`fetching error: ${err}`);});
    }, []);

    return (
        <div className='container'>
            <h1 className='text-center header'>
                Posts images
            </h1>
            <div className="container d-flex flex-column" style={{ gap: 30 }}>
                {posts.map(post => {
                    return (<LazyLoadPost 
                                key={post.id}
                                title={post.title}
                                img={post.url}
                            />);
                        })
                }
            </div>
        </div>
    );
};

export default ImagePost;