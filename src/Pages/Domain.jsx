import { useState } from "react";
import DomainLayout from "../Shared/DomainLayout";

const Domain = () => {
  const [step, setStep] = useState(1);
  const [domain, setDomain] = useState("demo domain");
  return (
    <div className="point pt-[56px] pb-[42px] px-[60px] mt-[80px] mb-[109px] bg-white max-w-[703px] w-full mx-auto rounded-[10px]">
      {step === 1 && (
        <DomainLayout
        setDomain={setDomain}
          title=" What is your Domain?"
          label=" Type domain name"
          placeholder="Domain name"
          type="text"
          step={step}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <DomainLayout
          domain= {domain }
          title=" What is your Email?"
          label="Type Email Address"
          placeholder="Email name"
          type="email"
          step={step}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <DomainLayout
          title=" What is your Password?"
          label="Type your  Password"
          placeholder="Enter password"
          type="password"
          step={step}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default Domain;
