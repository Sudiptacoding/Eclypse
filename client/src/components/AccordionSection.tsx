import Accordion from "../common/Accordian";

function AccordionSection() {
  return (
    <div className="p-6  bg-black text-xl">
      <Accordion
        title="Size & Fit"
        content={
          <p className="text-white">
            You can return any item within 30 days of purchase, provided it is
            in original condition.
          </p>
        }
      />

      <Accordion
        title="Delicery & Returns"
        content={
          <p className="text-white">
            Shipping usually takes 5-7 business days, depending on your
            location.
          </p>
        }
      />
      <Accordion
        title="How This Was Made"
        content={
          <p className="text-white">
            Shipping usually takes 5-7 business days, depending on your
            location.
          </p>
        }
      />
    </div>
  );
}

export default AccordionSection;
