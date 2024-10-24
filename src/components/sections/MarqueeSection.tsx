"use client";

import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  const logosGoingToLeft = [
    "/images/gitlab.svg",
    "/images/cisco.svg",
    "/images/cloudflare.svg",
    "/images/docker.svg",
    "/images/k8s.svg",
    "/images/fortinet.svg",
  ];
  const logosGoingToRight = [
    "/images/MikroTik.svg",
    "/images/zabbix.svg",
    "/images/wireguard.svg",
    "/images/terraform.svg",
    "/images/pfsense.svg",
  ];
  return (
    <section>
      {/* TOP SIDE */}
      <Marquee
        direction="left"
        gradient
        autoFill
        speed={20}
        pauseOnHover
        pauseOnClick
      >
        {logosGoingToLeft.map((item, index) => (
          <div key={index} className="mr-[89px]">
            <img src={item} alt="logo" />
          </div>
        ))}
      </Marquee>

      {/* BOTTOM SIDE */}
      <Marquee
        direction="right"
        className="mt-8"
        gradient
        autoFill
        speed={20}
        pauseOnHover
        pauseOnClick
      >
        {logosGoingToRight.map((item, index) => (
          <div key={index} className="mr-[89px]">
            <img src={item} alt="logo" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export default MarqueeSection;
