import React from 'react';
import Feature from '../../components/feature/Feature';
import './wclix.css';

const WCLIX = () => (
  <div className="clix__whatclix section__margin" id="wclix">
    <div className="clix__whatclix-feature">
      <Feature title="What is CLIX" text="Our modern cloud services company offers a suite of advanced features designed to elevate your business. Leveraging cutting-edge technology such as containerization, microservices, and AI-driven analytics, we ensure seamless scalability, enhanced security, and real-time insights for optimal performance and growth." />
    </div>
    <div className="clix__whatclix-heading">
      <h1 className="gradient__text">Cloud Empowerment for Your Digital Voyage Ahead.</h1>
      <p>Explore the Services</p>
    </div>
    <div className="clix__whatclix-container">
      <Feature title="24/7 Customer Support" text="Our 24/7 customer support is your safety net, ensuring swift solutions to any technical hurdles. Never worry about downtime again – we're here around the clock to keep your business running smoothly." />
      <Feature title="Security and Compliance Services" text="Safeguard your data with military-grade encryption and industry-leading security measures." />
      <Feature title="Migration Support" text="Seamless migration, zero headaches. Our migration experts guide you through the process, ensuring a smooth transition to the cloud. Elevate your business without the disruption." />
    </div>
  </div>
);

export default WCLIX;