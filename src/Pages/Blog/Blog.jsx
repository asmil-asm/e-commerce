import './Blog.css'
import { useState } from 'react';
import blog1 from '../../assets/img/blog1.jfif'
import blog2 from '../../assets/img/blog2.jfif'
import blog3 from '../../assets/img/blog3.jpg'
import PageTransition from '../../Components/PageTransition/PageTransition';
const Blog=()=> {
  const posts = [
  {
    title: "Top 10 Must-Have Gadgets in 2026",
    excerpt: "Discover the latest tech products that are trending this year and worth adding to your collection.",
    full: "From AI-powered assistants to smart home devices, 2026 is packed with innovation. Explore cutting-edge gadgets designed to simplify your life and boost productivity. Whether you're a tech enthusiast or casual buyer, these products are worth checking out.",
    image: blog1
  },
  {
    title: "How to Shop Smart Online",
    excerpt: "Learn tips and tricks to save money and avoid scams while shopping online.",
    full: "Always compare prices, read reviews, and verify seller credibility. Use secure payment methods and avoid deals that seem too good to be true. Smart shopping ensures you get the best value while staying protected.",
    image: blog2
  },
  {
    title: "Fashion Trends You Shouldn’t Miss",
    excerpt: "Stay ahead with the latest fashion styles and seasonal must-haves.",
    full: "This season brings bold colors, sustainable fabrics, and minimalist designs. Stay trendy while expressing your personal style with pieces that stand out and last longer.",
    image: blog3
  }
];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleReadMore = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <PageTransition>
     <div className="blog">

      {/* Blog Grid */}
      <section className="blog-grid">
<h2>Latest news, tips, and trends from our e-commerce world.</h2>

        <div className="boxes">
          {posts.map((post, index) => (
            <div
              key={index}
              className="box"
            >
              <img
                src={post.image}
                alt={post.title}
              />

              <div className="text">
                <h2>
                  {post.title}
                </h2>

                <p className={`${openIndex ===index ?'line-clamp-none':'line-clamp-1'}`}>
                  {openIndex === index ? post.full : post.excerpt}
                </p>

                <button
                  onClick={() => toggleReadMore(index)}
                >
                  {openIndex === index ? "Show Less ←" : "Read More →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
     
    </div>
   </PageTransition>
  );
}
export default Blog