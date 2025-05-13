
import PageLayout from "../components/layout/PageLayout";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Benefits from "../components/home/Benefits";
import CTA from "../components/home/CTA";

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </PageLayout>
  );
};

export default Index;
