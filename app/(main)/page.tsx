import BlogSection from "@/components/blog-section"
import Contact from "@/components/contact"
import ExperienceSection from "@/components/experience-section"
import Intro from "@/components/intro"
import SkillSection from "@/components/skill-section"

export default function Home() {
  return (
    <>
      <section className="container md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Intro />
        <div className="mb-20 flex flex-col items-center space-y-40">
          <BlogSection />
          <SkillSection />
          <ExperienceSection />
          <Contact />
        </div>
      </section>
    </>
  )
}
