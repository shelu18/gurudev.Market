import React from "react";
import marketBanner from "../assets/market_banner.png";
import vishnuImg from "../assets/owners/vishnu.jpg";
import devendraImg from "../assets/owners/devendra.jpg";
import shailendraImg from "../assets/owners/shailendra.jpg";
import OwnerCard from "../components/OwnerCard/OwnerCard";
import "../styles/AboutUs.css";

const owners = [
  {
    name: "Vishnu Parihar",
    title: "Founder",
    desc: "Visionary developer behind Gurudev Market. Passionate about rural business growth and creating new opportunities for entrepreneurs.",
    image: vishnuImg,
  },
  {
    name: "Devendra Parihar",
    title: "Co-Founder",
    desc: "Strategist and business expert. Ensures seamless marketplace operations and drives expansion.",
    image: devendraImg,
  },
  {
    name: "Shailendra Parihar",
    title: "Manager",
    desc: "Market manager and community builder focused on supporting tenants, maintaining facilities, and promoting the spirit of collaboration.",
    image: shailendraImg,
  },
];

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <img src={marketBanner} alt="Gurudev Market" className="aboutus-banner" />
      <h1>About Gurudev Market</h1>
      <p className="aboutus-desc">
        Gurudev Market stands as the landmark commercial hub on the highway near Depalpur, providing versatile shop rental options for entrepreneurs in both rural and urban domains. Our mission is to foster growth, opportunity, and progress by offering world-class facilities—modern shops, clean restrooms, drinking water, and a secure environment—all in one place. <br /><br />
        We’re proud to be led by a dynamic family team that brings innovation, reliability, and genuine care to every tenant and customer. Meet our owners:
      </p>
      <section className="owners-section">
        {owners.map((owner, idx) => (
          <OwnerCard
            key={owner.name}
            image={owner.image}
            name={owner.name}
            title={owner.title}
            desc={owner.desc}
            left={idx % 2 === 0}
          />
        ))}
      </section>
    </div>
  );
}
