import React from "react";
import "./services.css";

export default function Services() {
  const services = [
    {
      heading: "MANUFACTURING",
      content: `  Starting with the first phase, i.e. Manufacturing, we uphold our
            unwavering dedication to quality. We meticulously source materials
            from esteemed units in Tirupur, renowned for their superior
            quality fabrics knitted with utmost care. Through efficient and
            seamless manufacturing processes, we breathe life into our
            captivating taglines and relatable contexts, transforming them
            into tangible products that resonate with our customers. For us, a
            piece of clothing is more than just fabric, it's a reflection of
            our commitment to quality and customer happiness. We prioritize
            affordability every step of the way, guaranteeing prompt delivery
            of our tees. It isn't solely about our products, it's about the
            many customers who trust our production methods`,
        image:"https://www.vecteezy.com/blog/wp-content/uploads/2021/08/what-is-a-vector-file-1200x514.jpg"
    },
    {
      heading: "DESIGN",
      content: `  The second aspect is Design At InstiBuzz, our products go beyond mere fashion- they embody the vibrant essence of college life, capturing its lively emotions and memorable moments. Our designers carefully blend the spirit of campus life with modern fashion trends. Moreover, we extend our design services to various campus organizations such as clubs, societies, and event committees. By understanding their unique visions and themes, we tailor- make t-shirts that perfectly align with their identity and purpose. By infusing stylish aesthetics with the essence of campus experiences, our t-shirts serve as wearable expressions of student life.`,
        image:"https://www.vecteezy.com/blog/wp-content/uploads/2021/08/what-is-a-vector-file-1200x514.jpg"
    },
    {
      heading: "VISIBILITY",
      content: `  Lastly comes Visibility. We actively support insti clubs and societies by helping them market their events. This involves leveraging our website and social media platforms to boost visibility and engagement. By highlighting these events and our partnerships with them to our broad audience within the institution, we amplify the exposure of their events, thus expanding their outreach within our communities.`,
        image:"https://www.vecteezy.com/blog/wp-content/uploads/2021/08/what-is-a-vector-file-1200x514.jpg"
    },
    {
      heading: "SALES",
      content: `  The second aspect is Design At InstiBuzz, our products go beyond mere fashion- they embody the vibrant essence of college life, capturing its lively emotions and memorable moments. Our designers carefully blend the spirit of campus life with modern fashion trends. Moreover, we extend our design services to various campus organizations such as clubs, societies, and event committees. By understanding their unique visions and themes, we tailor- make t-shirts that perfectly align with their identity and purpose. By infusing stylish aesthetics with the essence of campus experiences, our t-shirts serve as wearable expressions of student life.`,
        image:"https://www.vecteezy.com/blog/wp-content/uploads/2021/08/what-is-a-vector-file-1200x514.jpg"
    },
  ];
  return (
    <div className="services-container">
      <div className="header">
        <h2>Our Services</h2>
        <p>
          At InstiBuzz, our commitment extends beyond the mere creation of the
          final product,we deeply value the entire journet from
          conceptualization to delivvery, ensuring ecvellence in every step.
        </p>
      </div>
      <div className="services">
        {services.map((service,index) => {
          return (
            <div className={"service"}>
              <div className="image">

                <img className="vector" src={service.image} alt="Vector here"></img>
              </div>
              <div className="content">
                <h2>{service.heading}</h2>
                <p>{service.content}</p>
              </div>
            </div>
          );
        })}
        <button className="contact-us-btn">Contact Us</button>
      </div>
    </div>
  );
}
