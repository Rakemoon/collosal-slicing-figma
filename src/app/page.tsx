import Button from "#components/atoms/button";
import Sphere from "#components/atoms/circle";
import PageDescription from "#components/atoms/page-description";
import PageTitle from "#components/atoms/page-title";
import Section from "#components/atoms/section";
import SectionBadge from "#components/atoms/section-badge";
import FigmaIcon from "#components/icons/figma";
import { FeatureCard } from "#components/molecules/feature-card";
import LogoSponsors from "#components/molecules/logo-sponsors";
import Navbar from "#components/organism/navbar";
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
          className="absolute top-[400px] left-[400px]"/>
        <Sphere
          color="#FCA016"
          width="300px"
          height="300px"
          className="absolute top-[200px] left-[200px]"/>
      </Section.Back>
      <Section.Front>
        <div className="flex gap-5 w-fit h-fit m-auto items-center relative">
          <div className="bg-light h-40 w-32 absolute top-5 left-5 rounded-md p-5 text-white text-opacity-60 shadow-md hover:-translate-y-2 transition-transform">
            Lorem ipsum dolor
          </div>
          <div className="bg-light h-40 w-32 absolute bottom-20 left-52 rounded-md p-5 text-white text-opacity-60 shadow-md hover:-translate-y-2 transition-transform">
            Sit amet
          </div>
          <div className="bg-light h-24 w-32 absolute bottom-5 left-10 rounded-md p-5 text-white text-opacity-60 shadow-md hover:-translate-y-2 transition-transform">
            flap flap flap
          </div>
          <div className="w-1/3 grid grid-cols-10 grid-rows-10 flex-shrink-0 aspect-square rounded-[30%] overflow-hidden">
            {Array.from({ length: 100 }).map((_, index) => <div key={index} className="border-light border hover:bg-light"></div>)}
          </div>
          <div className="flex gap-5 flex-col">
            <SectionBadge>How We Work?</SectionBadge>
            <PageTitle>Everything is well planned, well designed and developed wholeheartedly</PageTitle>
            <PageDescription>Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.</PageDescription>
          </div>
        </div>
      </Section.Front>
    </Section>
  </main>;
}
