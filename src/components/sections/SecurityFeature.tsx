"use client";

import FeatureCard from "../cards/FeatureCard";
import CustomStyledHeader from "../common/CustomStyledHeader";

function SecurityFeaturesSection() {
  const features = [
    {
      iconUrl: "/images/f_1.png",
      title: "Firewalls",
      description: "The Firewall solutions offered by Rep are designed to provide businesses with a secure network infrastructure that can protect against unauthorized access and other security threats. Rep's team of experts can help you design and implement a firewall solution that meets your specific needs, whether you require a small system for a single location or a large-scale solution for multiple sites.Additionally we can also provide installation and configuration services to ensure that everything is set up correctly.",
      detail: `Firewall design:
        We can help you design a firewall solution that is tailored to your specific needs. Team will take into account factors such as the size of your business, the number of users, the type of applications used, and the level of security required to create a customized firewall solution.
        Firewall implementation:
        Once the firewall design is finalized, we can help you implement the firewall solution, ensuring that all the necessary equipment and software are installed and configured correctly. also we test the system to ensure that it is functioning properly and that all the devices are communicating with each other.
        Firewall maintenance:
        ongoing maintenance and support for your firewall solution, including regular updates, patches, and security checks. we can also provide troubleshooting and problem resolution services to ensure that your firewall solution is always running smoothly.
        Firewall features:
        Firewall solutions offer a range of features to improve network security, such as intrusion detection and prevention, VPN solutions, and content filtering. we can help you choose the features that are most relevant to your business needs.
        Firewall security:
        we going to help you with firewall security, ensuring that your network is protected against unauthorized access and other security threats. we can help you with physical security measures such as access control and video surveillance, as well as network security measures such as firewalls, intrusion detection and prevention, and VPN solutions.

        Additionally, The different types of firewall equipment and software available, such as hardware firewalls, software firewalls, and unified threat management UTM solutions. REP can help you select the right equipment and software for your network, and they can also provide installation and configuration services to ensure that everything is set up correctly.`,
    },
    {
      iconUrl: "/images/f_2.png",
      title: "Intrusion Detection and Prevention",
      description:
        "Intrusion Detection and Prevention IDP solutions offered by Rep are designed to provide businesses with an additional layer of security to protect against cyber attacks. IDP involves monitoring network traffic for signs of suspicious activity and taking action to prevent the attack from succeeding. Rep's team of experts can help you design and implement an IDP solution that meets your specific needs, whether you require a small system for a single location or a large-scale solution for multiple sites.",
      detail: `Detection:
        IDP solutions can detect a wide range of cyber threats, including viruses, malware, botnets, and other types of cyber attacks. We use advanced algorithms and machine learning techniques to analyze network traffic and identify patterns of suspicious behavior.
        Prevention:
        Once a threat is detected, IDP solutions can take action to prevent the attack from succeeding. This may involve blocking the malicious traffic, quarantining infected devices, or alerting security personnel to investigate further.
        Customization:
        Our team of experts can customize the IDP solution to meet your specific needs, taking into account factors such as the size of your business, the number of users, the type of applications used, and the level of security required. This ensures that the solution is tailored to your unique environment and provides the best possible protection against cyber threats.
        Monitoring:
        IDP solutions provide real-time monitoring of network traffic, allowing security personnel to quickly respond to any potential threats. We can also generate reports and alerts to keep you informed of the security status of your network.
        Maintenance and support:
        Rep offers ongoing maintenance and support for your IDP solution, including regular updates, patches, and security checks. We can also provide troubleshooting and problem resolution services to ensure that your IDP solution is always running smoothly.

        Overall, Rep's IDP solutions are designed to provide businesses with an additional layer of security to protect against cyber attacks. By customizing the IDP solution, implementing it properly, and providing ongoing maintenance and support, Our experts can help ensure that your network is always secure, which can help increase the efficiency and productivity of your business.`,
    },
    {
      iconUrl: "/images/f_3.png",
      title: "VPN Solutions",
      description: "Virtual Private Network VPN solutions offered by Us are designed to provide businesses with a secure and encrypted connection between remote workers and the company's network. With a VPN, employees can securely access company resources from anywhere in the world, which can help improve productivity and collaboration. Rep's team of experts can help you design and implement a VPN solution that meets your specific needs, whether you require a small system for a single location or a large-scale solution for multiple sites.",
      detail: `Security:
        VPN solutions use advanced encryption techniques to ensure that all data transmitted over the VPN is secure and protected from unauthorized access. We provide additional security measures such as twofactor authentication and intrusion detection and prevention.
        Accessibility:
        Rep's VPN solutions provide employees with secure and easy access to company resources from anywhere in the world. This can help improve productivity and collaboration, as employees can work from home or while traveling without compromising security.
        Customization:
        Our team of experts can customize the VPN solution to meet your specific needs, taking into account factors such as the size of your business, the number of users, the type of applications used, and the level of security required. This ensures that the solution is tailored to your unique environment and provides the best possible access and security.
        Monitoring:
        We provide real-time monitoring of VPN traffic, allowing security personnel to quickly respond to any potential threats. Our experts generate reports and alerts to keep you informed of the security status of your VPN.
        Maintenance and support:
        ongoing maintenance and support for your VPN solution, including regular updates, patches, and security checks. We also provide troubleshooting and problem resolution services to ensure that your VPN solution is always running smoothly.`,
    },
    {
      iconUrl: "/images/f_4.png",
      title: "Infrastructure and Physical Security",
      description: "Infrastructure and Physical Security are two important areas that Rep focuses on to provide a comprehensive solution for businesses. Infrastructure security refers to the protection of the network components, such as servers, routers, switches, and firewalls, from cyber threats. Physical security, on the other hand, refers to the protection of the physical assets, such as buildings, equipment, and personnel, from unauthorized access and other security threats.",
      detail: `Rep's team of experts can help you design and implement a customized infrastructure and physical security solution that meets your specific needs. This may include a range of measures such as access control, surveillance, and alarm systems, as well as network security measures such as firewalls, intrusion detection and prevention, and VPN solutions.
        By customizing the infrastructure and physical security solution, implementing it properly, and providing ongoing maintenance and support, Rep can help ensure that your network and physical assets are always secure. This can help increase the efficiency and productivity of your business by providing a secure environment for employees to work in.

        Overall, Rep's infrastructure and physical security solutions are designed to provide businesses with a comprehensive solution for protecting their network components and physical assets from security threats.`,
    },
    {
      iconUrl: "/images/f_5.png",
      title: "Availability and Resiliency",
      description: "Availability and Resiliency are areas that we focuse on to provide a comprehensive solution for businesses. Availability refers to the ability of a system or service to remain operational and accessible to users, even in the event of hardware or software failures or other disruptions. Resiliency, on the other hand, refers to the ability of a system or service to quickly recover from disruptions and resume normal operations.",
      detail: `Our team of experts can help you design and implement an availability and resiliency solution that meets your specific needs. This may include measures such as redundant hardware, backup and recovery systems, and failover mechanisms. By customizing the availability and resiliency solution, implementing it properly, and providing ongoing maintenance and support, Rep can help ensure that your systems and services are always available and resilient.
        Overall, Rep's availability and resiliency solutions are designed to provide businesses with a comprehensive solution for maintaining the availability and resiliency of their systems and services. This can help increase the efficiency and productivity of your business by ensuring that your systems and services are always available and able to quickly recover from disruptions.`,
    },
    {
      iconUrl: "/images/f_6.png",
      title: "Cloud Security",
      description: "Our Cloud Security Service is designed to provide businesses with a robust and scalable solution to protect their cloud-based infrastructure and data. With an increasing shift towards cloud computing, security risks also evolve, and our service aims to stay ahead of those threats by offering comprehensive protection.",
      detail: `We provide various setup options tailored to your business needs, including fully managed security services, custom security architecture design, and integration with existing cloud environments. Our expert team will guide you through the deployment process, implementing advanced threat detection, data encryption, identity management, and compliance monitoring to ensure that your cloud environment remains secure. Whether you're looking to secure a single cloud platform or a complex multi-cloud setup, our Cloud Security Service is equipped to meet your specific requirements and ensure business continuity.`,
    },
  ];
  return (
    <section className="bg-[#232529] px-4 md:px-[94px] py-[116px]">
      <div>
        <CustomStyledHeader
          titleColored="Security"
          titleUnColored="Solutions"
          description="We offer a range of security solutions to ensure that your network and data are always secure."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[64px]">
        {features.map((item, index) => (
          <FeatureCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default SecurityFeaturesSection;