import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/About";
import { ProjectsPreview } from "@/components/home/Projects";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
      <Process />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
