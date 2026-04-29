import './About.css'
import image from '../../assets/img/about-page.png'
import PageTransition from '../../Components/PageTransition/PageTransition'
const About=()=> {
  const features=[
              {
                title: "Fast Delivery",
                desc: "Get your orders delivered quickly and efficiently."
              },
              {
                title: "Secure Payments",
                desc: "Your transactions are safe with our encrypted systems."
              },
              {
                title: "Quality Products",
                desc: "We offer only the best products from trusted suppliers."
              }
            ]
  return (
   <PageTransition>
     <div className="about">
      {/* Content Section */}
      <section className="content">
        <div className="data">
          <div>
            <h2 >Who We Are</h2>
            <p>
              ORADER.NET is a modern e-commerce platform designed to bring you the best products from around the world. We focus on quality, affordability, and customer satisfaction.
              Our mission is to simplify online shopping while ensuring a secure and enjoyable experience for every customer.
            </p>
          </div>

          <div className="image">
            <img
              src={image}
              alt="Ecommerce"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="data">
          <h2>Why Choose Us</h2>

          <div className="boxes">
            {features.map((item, index) => (
              <div key={index} className="box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
   </PageTransition>
  );
}
export default About;