import React from "react";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

export default function FAQSection() {
  return (
    <>
      <div className="ds-bg p-7 flex justify-center flex-col items-center">
        <Title>FAQ Section </Title>
        <Text size="md">
          This section represents the Hero Section of the website.
        </Text>
        <Text size="md" className="text-green-400">
          created by : Karim soliman
        </Text>
      </div>
    </>
  );
}
