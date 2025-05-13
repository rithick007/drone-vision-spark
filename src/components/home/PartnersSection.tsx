
import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: "Frequentis",
      logo: "https://placehold.co/200x80/2a2a2a/808080?text=FREQUENTIS"
    },
    {
      name: "HCU",
      logo: "https://placehold.co/200x80/2a2a2a/808080?text=HCU"
    },
    {
      name: "Intel",
      logo: "https://placehold.co/200x80/2a2a2a/808080?text=INTEL"
    },
    {
      name: "Lagardere",
      logo: "https://placehold.co/200x80/2a2a2a/808080?text=LAGARDERE"
    },
    {
      name: "Leica",
      logo: "https://placehold.co/200x80/2a2a2a/808080?text=LEICA"
    },
    {
      name: "Telespazio",
      logo: "https://placehold.co/200x80/2a2a2a/808080?text=TELESPAZIO"
    },
    {
      name: "Liebherr",
      logo: "https://placehold.co/200x80/2a2a2a/808080?text=LIEBHERR"
    }
  ];

  return (
    <section className="partners-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 tracking-wide">TRUSTED BY</h2>
        <div className="partners-container">
          {partners.map((partner, index) => (
            <img 
              key={index}
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="partner-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
