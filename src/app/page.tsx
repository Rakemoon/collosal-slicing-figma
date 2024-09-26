import Button from "#components/atoms/button";
import FigmaIcon from "#components/icons/figma";
import { FeatureCard } from "#components/molecules/feature-card";
import LogoSponsors from "#components/molecules/logo-sponsors";
import Navbar from "#components/organism/navbar";
import Image from "next/image";

export default function Home() {
  return <main className="h-fit bg-dark min-h-screen min-w-screen max-w-full text-muted relative overflow-hidden">
    <section className="relative">
      <div className="rounded-full h-[780px] w-[780px] bg-[#6016FC] absolute -bottom-[200px] -right-[200px] animate-pulse"></div>
      <div className="rounded-full h-[780px] w-[780px] bg-green absolute -top-[100px] left-[200px] animate-pulse"></div>
      <div className="rounded-full h-[780px] w-[780px] bg-[#FCA016] absolute top-[100px] -left-[200px] animate-pulse"></div>
      <div className="rounded-full h-[780px] w-[780px] bg-[#FC165B] absolute -top-[200px] -right-[200px] animate-pulse"></div>
      <div className="h-screen px-32 py-5 flex flex-col items-center gap-5 backdrop-blur-lg bg-dark bg-opacity-90">
        <Navbar variant="naked" className="px-20" />
        <div className="max-w-[37rem] text-center flex flex-col gap-5 mt-auto">
          <h1 className="text-green text-base font-semibold">CLIENT-DEVELOPMENT DRIVEN</h1>
          <h2 className="text-4xl font-bold">We Design. We Develop. We Ship. In The Same Day.</h2>
          <p className="text-white text-opacity-60 text-base font-medium mx-10">
            We are committed to not making clients wait. We will deliver the work as quickly as possible. Even on the same day. Even so, we do not reduce the quality of our work.
          </p>
          <div className="flex justify-center gap-5 h-fit">
            <Button>Send Quote</Button>
            <Button colorVariant="light" colorScheme="white">Learn More</Button>
          </div>
        </div>
        <div className="flex gap-5 mx-20">
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
        <LogoSponsors className="mt-auto">
          <Image
            src="/assets/sponsors.svg"
            alt="logo"
            width={771}
            height={39} />
        </LogoSponsors>
      </div>
    </section>
    <section className="h-screen px-32 py-5 flex flex-col items-center gap-5">
      halo
    </section>
  </main>;
}
