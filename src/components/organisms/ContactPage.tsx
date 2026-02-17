import Title from "../atoms/Title";
import Text from "../atoms/Text";

const ContactPage = () => {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>About Section </Title>
      <Text size="md">
        This section represents the Hero Section of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Moawed Mohamed 
      </Text>
    </div>
  );
};

export default ContactPage;
