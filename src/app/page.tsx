import Button from "#components/atoms/button";
import Sphere from "#components/atoms/circle";
import PageDescription from "#components/atoms/page-description";
import PageTitle from "#components/atoms/page-title";
import Section from "#components/atoms/section";
import SectionBadge from "#components/atoms/section-badge";
import FigmaIcon from "#components/icons/figma";
import FeatureCard from "#components/molecules/feature-card";
import LogoSponsors from "#components/molecules/logo-sponsors";
import Navbar from "#components/organism/navbar";
import PricingCard from "#components/organism/pricing-card";
import ProjectCard from "#components/organism/project-card";
import Image from "next/image";

export default function Home() {
  return <main className="h-fit bg-dark min-h-screen min-w-screen max-w-full text-muted relative overflow-hidden">
    <Section>
      <Section.Back>
        <Sphere
          color="#16FCD2"
          width="780px"
          height="780px"
          className="absolute -top-[100px] left-[200px]"/>
        <Sphere
          color="#FCA016"
          width="780px"
          height="780px"
          className="absolute top-[100px] -left-[200px]"/>
        <Sphere
          color="#FC165B"
          width="780px"
          height="780px"
          className="absolute -top-[200px] -right-[200px]"/>
      </Section.Back>
      <Section.Front>
        <Navbar variant="naked" />
        <div className="max-w-[37rem] text-center flex flex-col gap-5 mt-auto">
          <SectionBadge>CLIENT-DEVELOPMENT DRIVEN</SectionBadge>
          <PageTitle>We Design. We Develop. We Ship. In The Same Day.</PageTitle>
          <PageDescription className="mx-10">
            We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.
          </PageDescription>
          <div className="flex justify-center gap-5 h-fit">
            <Button>Send Quote</Button>
            <Button colorVariant="light" colorScheme="white">Learn More</Button>
          </div>
        </div>
        <div className="flex gap-5">
          <FeatureCard
            icon={<FigmaIcon />}
            title="Design">
              The project interface will be designed first, our favorite tool is Figma.
            </FeatureCard>
          <FeatureCard
            icon={<FigmaIcon />}
            title="Design">
              The project interface will be designed first, our favorite tool is Figma.
            </FeatureCard>
          <FeatureCard
            icon={<FigmaIcon />}
            title="Design">
              The project interface will be designed first, our favorite tool is Figma.
            </FeatureCard>
        </div>
        <LogoSponsors className="mt-auto w-full">
          <Image
            src="/assets/sponsors.svg"
            alt="logo"
            width={771}
            height={39} />
        </LogoSponsors>
      </Section.Front>
    </Section>
    <Section>
      <Section.Back>
        <Sphere
          color="#16FCD2"
          width="200px"
          height="200px"
          className="absolute top-[200px] left-[400px]"/>
        <Sphere
          color="#FCA016"
          width="300px"
          height="300px"
          className="absolute top-[80px] left-[200px]"/>
        <Sphere
          color="#FC165B"
          width="300px"
          height="300px"
          className="absolute bottom-[200px] right-[200px]"/>
        <Sphere
          color="#6016FC"
          width="200px"
          height="200px"
          className="absolute bottom-[100px] right-[400px]"/>
      </Section.Back>
      <Section.Front>
        <div className="flex gap-5 w-fit h-fit m-auto items-center relative">
          <div className="bg-light h-40 w-32 absolute top-5 left-5 rounded-md p-5 text-white text-opacity-60 shadow-md hover:-translate-y-2 transition-transform">
          </div>
          <div className="bg-light h-40 w-32 absolute bottom-20 left-52 rounded-md p-5 text-white text-opacity-60 shadow-md hover:-translate-y-2 transition-transform">
          </div>
          <div className="bg-light h-24 w-32 absolute bottom-5 left-10 rounded-md p-5 text-white text-opacity-60 shadow-md hover:-translate-y-2 transition-transform">
          </div>
          <div
            className="w-1/3 flex-shrink-0 aspect-square rounded-[30%] overflow-hidden"
            style={
              {
                background: `
                  repeating-linear-gradient(
                    to right,
                    transparent 0 2rem,
                    #fff1 2rem 2.1rem
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    transparent 0 2rem,
                    #fff1 2rem 2.1rem
                  )
                `
              }
            }>
          </div>
          <div className="flex gap-5 flex-col">
            <SectionBadge>How We Work?</SectionBadge>
            <PageTitle>Everything is well planned, well designed and developed wholeheartedly</PageTitle>
            <PageDescription>Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</PageDescription>
          </div>
        </div>
        <div className="flex gap-5 w-fit h-fit m-auto items-center">
          <div className="flex gap-5 flex-col w-2/4">
            <SectionBadge>Our Team</SectionBadge>
            <PageTitle>We{"'"}re a team of designers, engineers and analysts</PageTitle>
            <PageDescription>Our team consists of many creative people. We are committed to maintaining quality work as well as speed. These creative people work together to create maximum work results.</PageDescription>
            <Button colorScheme="white" colorVariant="light" className="w-fit">See Our Team</Button>
          </div>
          <div className="flex-grow h-full relative">
            <div className="absolute bottom-0 left-0 border-dashed border-4 w-56 aspect-square border-white border-opacity-5 rounded-lg"></div>
            <div className="absolute top-0 left-10 rounded-lg bg-light aspect-video h-56 hover:-translate-y-5 transition-transform gap-1 flex p-5">
              <div className="rounded-md aspect-square w-2 bg-yellow-400 h-fit"></div>
              <div className="rounded-md aspect-square w-2 bg-red h-fit"></div>
              <div className="rounded-md aspect-square w-2 bg-green h-fit"></div>
            </div>
            <div className="absolute right-5 top-0 bottom-0 w-56 bg-carddark aspect-square m-auto rounded-lg border-2 border-white border-opacity-5 h-fit hover:-translate-y-5 transition-transform">
            </div>
          </div>
        </div>
      </Section.Front>
    </Section>
    <Section>
      <Section.Back>
        <Sphere
          color="#6016FC"
          width="200px"
          height="200px"
          className="absolute bottom-[100px] right-[400px]"/>
      </Section.Back>
      <Section.Front className="flex flex-col justify-center gap-5">
        <SectionBadge>Projects</SectionBadge>
        <PageTitle className="text-center">We have completed many amazing projects that you will not believe</PageTitle>
        <div className="grid grid-cols-2 gap-5">
          <ProjectCard
            title="The Mobile App Landing Page"
            description="A Landing page for mobile app"
            detail="Detail"
          />
          <ProjectCard
            title="The Desktop App Landing Page"
            description="A Landing page for desktop app"
            detail="Detail"
          />
        </div>
      </Section.Front>
    </Section>
    <Section>
      <Section.Back />
      <Section.Front className="grid place-content-center">
        <div className="flex flex-col items-center gap-10 bg-highlight rounded-lg p-20">
          <SectionBadge>Get Started</SectionBadge>
          <PageTitle className="text-center">What do you need ? Choose a service that can help you</PageTitle>
          <div className="grid grid-cols-3 gap-5">
            <PricingCard
              className="bg-[#3F2379]"
              name="UI Design"
              price={1200}
              features={["10 design pages", "Well-documented", "4 revisions", "$100/additional page"]}
            />
            <PricingCard
              className="bg-[#233679]"
              name="Development"
              price={5000}
              features={["Web & Mobile", "Well-documented", "8 revisions", "$1000/additional feature"]}
            />
            <PricingCard
              className="bg-[#792366]"
              name="Maintenance"
              price={3000}
              features={["Daily Backup", "3 hours of maintenance", "Including fixing", "$50/additional hour"]}
            />
          </div>
        </div>
      </Section.Front>
    </Section>
  </main>;
}
