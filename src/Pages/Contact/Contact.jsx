import  { useState } from "react";
import './Contact.css'
import PageTransition from "../../Components/PageTransition/PageTransition";
const Contact=()=> {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate API call
      console.log("Form Data:", form);

      // Replace this with real API endpoint
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
   <PageTransition>
     <div className="contact">
    

      {/* Contact Section */}
      <section className="data">
        <div className="info">
          {/* Contact Info */}
          <div>
            <h2>Get in Touch</h2>
            <p>
              Have questions about products, orders, or anything else? Our team is ready to help.
            </p>

            <div className="contecting">
              <p><strong>Email:</strong> support@orader.net</p>
              <p><strong>Phone:</strong> +44 123 456 789</p>
              <p><strong>Address:</strong> London, United Kingdom</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label >Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div >
              <label >Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

     

    
    </div>
   </PageTransition>
  );
}
export default Contact