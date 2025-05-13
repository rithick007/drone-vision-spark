
import PageLayout from "../components/layout/PageLayout";
import TechExplanation from "../components/about/TechExplanation";
import OptimizationProcess from "../components/about/OptimizationProcess";
import CTA from "../components/home/CTA";

const About = () => {
  return (
    <PageLayout>
      <TechExplanation />
      <OptimizationProcess />
      <CTA />
    </PageLayout>
  );
};

export default About;
