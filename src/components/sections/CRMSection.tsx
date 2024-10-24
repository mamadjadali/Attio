import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function CRMSection() {
  const cardData = {
    avatarUrl: "/images/kaveh.jpg",
    review:
      "“In the digital realm, security isn't just a shield; it's the foundation upon which trust is built. Without it, every connection is a risk waiting to unfold.”",
    name: "Kaveh Vahidi",
    position: "Chief Executive Officer, REP",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="Coming Soon."
          description="we are working on somthing that blow your mind."
        />
      </div>

      <div className="w-full flex justify-center my-[64px]">
        <img
          src="/images/coming.svg"
          alt="crm image"
          className="w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)]"
        />
      </div>

      <div>
        <ReviewCard {...cardData} />
      </div>
    </section>
  );
}

export default CRMSection;
