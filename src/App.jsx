/* eslint-disable react/prop-types */
// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";

import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState({ posts: [], meta: {} });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:2368/ghost/api/content/posts?key=bfc204f548f71f1c96191b7e4f"
      );

      const rej = await res.json();

      setData(rej);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* home */}
      <header id="home">
        <nav className="navbar">
          <div className="container">
            <a href="index.html" className="navbar-brand">
              Art.Design
            </a>
            <div className="navbar-nav">
              <a href="#home">home</a>
              <a href="#design">design</a>
              <a href="#blog">blog</a>
              <a href="#about">about</a>
            </div>
          </div>
        </nav>
        <div className="banner">
          <div className="container">
            <h1 className="banner-title">
              <span>Art.</span> Design Blog
            </h1>
            <p>everything that you want to know about art & design</p>
            <form>
              <input
                type="text"
                className="search-input"
                placeholder="find your food . . ."
              />
              <button type="submit" className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Recent Arts & Designs */}
      <section className="design" id="design">
        <div className="container">
          <div className="title">
            <h2>Recent Arts & Designs</h2>
            <p>recent arts & designs on the blog</p>
          </div>

          <div className="design-content">
            <div className="design-item">
              <div className="design-img">
                <img src="/src/assets/art-design-2.jpg" alt="" />
                <span>
                  <i className="far fa-heart"></i> 22
                </span>
                <span>Art & Design</span>
              </div>
              <div className="design-title">
                <a href="#">
                  make an awesome art portfolio for college or university
                </a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src="/src/assets/art-design-1.jpg" alt="" />
                <span>
                  <i className="far fa-heart"></i> 22
                </span>
                <span>Art & Design</span>
              </div>
              <div className="design-title">
                <a href="#">
                  make an awesome art portfolio for college or university
                </a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src="/src/assets/art-design-3.jpg" alt="" />
                <span>
                  <i className="far fa-heart"></i> 22
                </span>
                <span>Art & Design</span>
              </div>
              <div className="design-title">
                <a href="#">
                  make an awesome art portfolio for college or university
                </a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src="/src/assets/art-design-4.jpg" alt="" />
                <span>
                  <i className="far fa-heart"></i> 22
                </span>
                <span>Art & Design</span>
              </div>
              <div className="design-title">
                <a href="#">
                  make an awesome art portfolio for college or university
                </a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src="/src/assets/art-design-5.jpg" alt="" />
                <span>
                  <i className="far fa-heart"></i> 22
                </span>
                <span>Art & Design</span>
              </div>
              <div className="design-title">
                <a href="#">
                  make an awesome art portfolio for college or university
                </a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src="/src/assets/art-design-6.jpg" alt="" />
                <span>
                  <i className="far fa-heart"></i> 22
                </span>
                <span>Art & Design</span>
              </div>
              <div className="design-title">
                <a href="#">
                  make an awesome art portfolio for college or university
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className="blog" id="blog">
        <div className="container">
          <div className="title">
            <h2>Latest Blog</h2>
            <p>recent blogs about art & design</p>
          </div>

          <div className="blog-content">
            {data.posts.map((post) => (
              <Blog key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div>
              <img src="/src/assets/about-bg.jpg" alt="" />
            </div>
            <div className="about-text">
              <div className="title">
                <h2>Catherine Doe</h2>
                <p>art & design is my passion</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                totam voluptatem saepe eius ipsum nam provident sapiente, natus
                et vel eligendi laboriosam odit eos temporibus impedit veritatis
                ut, illo deserunt illum voluptate quis beatae quod.
                Necessitatibus provident dicta consectetur labore!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                corrupti natus, eos quia recusandae voluptatem veniam modi
                officiis minima provident rem sint porro fuga quos tempora ea
                suscipit vero velit sed laudantium eaque necessitatibus maxime!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <span>Art.Design Blog Page</span>
      </footer>
    </div>
  );
}

export default App;

function Blog({ post }) {
  function getTime(timeString) {
    const date = new Date(timeString);
    return date.toLocaleDateString();
  }

  return (
    <div className="blog-item">
      <div className="blog-img">
        <img src={post.feature_image} alt="" />
      </div>
      <div className="blog-text">
        <span>{getTime(post.updated_at)}</span>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <a target="_blank" rel="noreferrer" href={`${post.url}`}>
          Read More
        </a>
      </div>
    </div>
  );
}
