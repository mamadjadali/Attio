"use client";

import FeatureCard from "../cards/FeatureCard";
import CustomStyledHeader from "../common/CustomStyledHeader";

function MoreFeaturesSection() {
  const features = [
    {
      iconUrl: "/section/Network Structure.svg",
      title: "Network Structure",
      description: "The Network Structure service offered by REP is designed to provide a stable and efficient network that can handle the demands of modern business. We offers a range of solutions, including network design, implementation, and maintenance, to ensure that your network is always up and running. we offer ongoing maintenance and support for your network",
      detail: `Network design:
        Rep's team of experts can help you design a network that is tailored to your specific needs. They will take into account factors such as the size of your business, the number of employees, the type of applications used, and the level of security required to create a customized network architecture.
        Network implementation:

        Once the network design is finalized, we can help you implement the network, ensuring that all the necessary equipment and software are installed and configured correctly. They will also test the network to ensure that it is functioning properly and that all the devices are communicating with each other.
        Network maintenance:

        REP offers ongoing maintenance and support for your network, including regular updates, patches, and security checks. They can also provide troubleshooting and problem resolution services to ensure that your network is always running smoothly.`,
    },
    {
      iconUrl: "/section/CCTV.svg",
      title: "CCTV",
      description:
        "The CCTV (Closed Circuit Television) solutions offered by us are designed to help businesses monitor their premises and protect against theft, vandalism, and other security threats. we offer a range of CCTV solutions that can be tailored to your specific needs, whether you require a small system for a single location or a large-scale solution for multiple sites.",
      detail: `CCTV design:
            Rep can help you design a CCTV system that is tailored to your specific needs. We will take into account factors such as the size and layout of your premises, the number of cameras required, and the level of security required to create a customized CCTV solution.
          CCTV installation:
          Once the CCTV design is finalized, Rep can help you install the CCTV system, ensuring that all the cameras are installed in the correct locations and that the wiring and other components are properly installed. We will also test the system to ensure that it is functioning properly and that all the cameras are capturing clear and accurate footage.
          CCTV maintenance:
          We offer ongoing maintenance and support for your CCTV system, including regular updates, patches, and security checks. They can also provide troubleshooting and problem resolution services to ensure that your CCTV system is always running smoothly.
          CCTV monitoring:
          REP can also provide CCTV monitoring services, allowing you to outsource the monitoring of your CCTV system to trained professionals. This can help ensure that any security threats are detected and dealt with quickly and efficiently, even outside of business hours.`,
    },
    {
      iconUrl: "/section/Data Center.svg",
      title: "Data Center",
      description: "The Data Center solutions offered by REP are designed to provide businesses with a scalable and secure infrastructure for hosting their critical data and applications. Rep's team of experts can help you design and implement a data center that meets your specific needs, whether you require a small server room or a large-scale data center.",
      detail: `Data center design:
        Rep can help you design a data center that is tailored to your specific needs. We will take into account factors such as the size of your business, the number of users, the type of applications used, and the level of security required to create a customized data center design.
        Data center implementation:
        Once the data center design is finalized, Rep can help you implement the data center, ensuring that all the necessary equipment and software are installed and configured correctly. We will also test the data center to ensure that it is functioning properly and that all the devices are communicating with each other.
        Data center maintenance:
        Rep offers ongoing maintenance and support for your data center, including regular updates, patches, and security checks. We can also provide troubleshooting and problem resolution services to ensure that your data center is always running smoothly.
        Data center security:
        Rep can also help you with data center security, ensuring that your data is protected against unauthorized access and other security threats. We can help you with physical security measures such as access control, video surveillance, and intrusion detection systems, as well as network security measures such as firewalls, intrusion detection and prevention, and VPN solutions.`,
    },
    {
      iconUrl: "/section/Voip.svg",
      title: "VoIP",
      description: "The VoIP Voice over Internet Protocol) solutions offered by REP are designed to provide businesses with a cost-effective and flexible phone system that can improve communication and collaboration. Rep's team of experts can help you design and implement a VoIP system that meets your specific needs, whether you require a small system for a single location or a large-scale solution for multiple sites.Additionally, The different types of equipment and software are available.",
      detail: `VoIP design:
        Rep can help you design a VoIP system that is tailored to your specific needs. We will take into account factors such as the size of your business, the number of employees, the type of applications used, and the level of security required to create a customized VoIP solution
        VoIP implementation:
        Once the VoIP design is finalized, Rep can help you implement the VoIP system, ensuring that all the necessary equipment and software are installed and configured correctly. We will also test the system to ensure that it is functioning properly and that all the devices are communicating with each other.
        VoIP maintenance:
        Rep offers ongoing maintenance and support for your VoIP system, including regular updates, patches, and security checks. We can also provide troubleshooting and problem resolution services to ensure that your VoIP system is always running smoothly.
        VoIP features:
        Rep's VoIP solutions offer a range of features to improve communication and collaboration, such as call forwarding, voicemail, conference calling, and mobile integration. They can help you choose the features that are most relevant to your business needs.
        VoIP cost savings:
        VoIP solutions can be more cost effective than traditional phone systems, as they can use existing network infrastructure and can be scaled up or down as needed. Rep can help you calculate the cost savings of switching to a VoIP system and can provide recommendations on how to optimize your VoIP system to achieve maximum cost savings.
        Additionally, The different types of equipment and software are available, such as IP phones, soft phones, and PBX systems. Rep can help you select the right equipment and software for your VoIP.`,
    },
    {
      iconUrl: "/section/Virtualization.svg",
      title: "Virtualization",
      description: "The Virtualization solutions offered by Rep are designed to provide businesses with an efficient and flexible IT infrastructure that can reduce costs and improve productivity. Rep's team of experts can help you design and implement a virtualization solution that meets your specific needs, whether you require a small system for a single location or a large scale solution for multiple sites.",
      detail: `Virtualization design:
        Rep can help you design a virtualization solution that is tailored to your specific needs. We will take into account factors such as the size of your business, the number of users, the type of applications used, and the level of security required to create a customized virtualization solution.
        Virtualization implementation:
        Once the virtualization design is finalized, We can help you implement the virtualization solution, ensuring that all the necessary equipment and software are installed and configured correctly, also test the system to ensure that it is functioning properly and that all the virtual machines are communicating with each other.
        Virtualization maintenance:
        Rep offers ongoing maintenance and support for your virtualization solution, including regular updates, patches, and security checks, also can provide troubleshooting and problem resolution services to ensure that your virtualization solution is always running smoothly.
        Virtualization benefits:
        Virtualization solutions can offer a range of benefits, such as reduced hardware costs, improved application performance, and increased scalability. Rep can help you calculate the benefits of switching to a virtualization solution and can provide recommendations on how to optimize your virtualization solution to achieve maximum benefits.
        Virtualization technologies:
        virtualization solutions utilize a range of technologies, such as server virtualization, desktop virtualization, and application virtualization. We can help you choose the technologies that are most relevant to your business needs.`,
    },
    {
      iconUrl: "/section/RoutingandSwitching.svg",
      title: "Routing and Switching",
      description: "The Routing and Switching solutions offered by us are designed to provide businesses with a reliable and efficient network infrastructure that can help improve communication and collaboration. Rep's team of experts can help you design and implement a routing and switching solution that meets your specific needs, whether you require a small system for a single location or a large-scale solution for multiple sites.",
      detail: `Routing and Switching implementation:
        Once the routing and switching design is finalized, Rep can help you implement the routing and switching solution, ensuring that all the necessary equipment and software are installed and configured correctly. We will also test the system to ensure that it is functioning properly and that all the devices are communicating with each other.
        Routing and Switching maintenance:
        Rep offers ongoing maintenance and support for your routing and switching solution, including regular updates, patches, and security checks. we can also provide troubleshooting and problem resolution services to ensure that your routing and switching solution is always running smoothly.
        Routing and Switching features:
        routing and switching solutions offer a range of features to improve communication and collaboration, such as VLANs, QoS, and routing protocols, we can help you choose the features that are most relevant to your business needs.
        Routing and Switching security:
        Rep can also help you with routing and switching security, ensuring that your network is protected against unauthorized access and other security threats. we can help you with network security measures such as firewalls, intrusion detection and prevention, and VPN solutions.`,
    },
  ];
  return (
    <section id="network" className="bg-[#232529] px-4 md:px-[94px] py-[116px]">
      <div>
        <CustomStyledHeader
          titleColored="Networking"
          titleUnColored="Solutions"
          description="We offer a range of security solutions to ensure that you can always reach your data."
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

export default MoreFeaturesSection;