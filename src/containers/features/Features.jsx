import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Scalability and Data Security',
    text: 'Seamlessly expand or shrink your resources as your business evolves. Scale to meet demand without disruption.Fortify your data with military-grade encryption. Trust that your sensitive information is shielded from any threat.',
  },
  {
    title: 'Global Accessibility and Cost Efficiency:',
    text: 'Access your applications and data from anywhere in the world. Unleash global collaboration and productivity.Pay only for what you use, saving costs on infrastructure. Budget-friendly cloud services that align with your needs.',
  },
  {
    title: 'Automated Backups and Managed Services',
    text: 'Rest easy with automated backups. Your critical data is safeguarded against unexpected events, ensuring business continuity.Let us handle the complexity. Focus on innovation as we manage updates, patches, and maintenance for you.',
  },
  {
    title: 'Elasticity and High Availability',
    text: 'Adapt to fluctuating workloads effortlessly. Resources scale up or down to meet demand, optimizing performance.Experience uninterrupted service with high availability architecture. Minimize downtime and keep your operations running.',
  },
];

const Features = () => (
  <div className="__features section__padding" id="features">
    <div className="__features-heading">
      <h1 className="gradient__text">Encryption Redefined! Your Digital Fortress, Forged with Trust, Innovation, and Reliability</h1>
      <p>Features </p>
    </div>
    <div className="__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;