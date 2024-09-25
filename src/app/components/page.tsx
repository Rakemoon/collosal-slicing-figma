import Button from "#components/atoms/button";
import FigmaIcon from "#components/icons/figma";
import { FeatureCard } from "#components/molecules/feature-card";
import Callout from "#components/molecules/callout";
import Footer from "#components/organism/footer";
import Navbar from "#components/organism/navbar";
import PricingCard from "#components/organism/pricing-card";
import LogoSponsors from "#components/molecules/logo-sponsors";

export default function Components() {
    return <div className="grid place-content-center min-h-screen bg-dark text-muted gap-4 p-2">
        <h1 className="text-4xl font-bold w-fit mx-auto pb-5">Components List</h1>
        <div className="p-2 border-dashed border-2 border-highlight gap-2 flex flex-wrap items-center">
            <Button
                colorScheme="primary"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                colorScheme="primary"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                colorScheme="primary"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
            <Button
                rounded
                colorScheme="primary"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                rounded
                colorScheme="primary"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                rounded
                colorScheme="primary"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
            <Button
                colorScheme="white"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                colorScheme="white"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                colorScheme="white"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
            <Button
                rounded
                colorScheme="white"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                rounded
                colorScheme="white"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                rounded
                colorScheme="white"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                colorScheme="primary"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                colorScheme="primary"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                colorScheme="primary"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                rounded
                colorScheme="primary"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                rounded
                colorScheme="primary"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                rounded
                colorScheme="primary"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                colorScheme="white"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                colorScheme="white"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                colorScheme="white"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                rounded
                colorScheme="white"
                colorVariant="solid"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                rounded
                colorScheme="white"
                colorVariant="light"
                className="w-fit h-fit">Button</Button>
            <Button
                size="sm"
                rounded
                colorScheme="white"
                colorVariant="outline"
                className="w-fit h-fit">Button</Button>
        </div>

        <div className="p-2 border-dashed border-2 border-highlight grid gap-2">
            <Navbar variant="naked" />
            <Navbar variant="highlight" />
        </div>

        <div className="gap-2 grid grid-cols-5 p-2 border-dashed border-2 border-highlight">
            <PricingCard className="bg-blue-400" />
            <PricingCard className="bg-rose-400" />
            <PricingCard className="bg-purple-400" />
            <PricingCard className="bg-slate-900" />
            <PricingCard className="bg-cyan-900" />
        </div>

        <div className="p-2 border-dashed border-2 border-highlight grid gap-2">
            <Footer
                list={
                    [
                        {
                            title: "Services",
                            items: [
                                {
                                    name: "Web Development",
                                    href: "#"
                                },
                                {
                                    name: "App Development",
                                    href: "#"
                                },
                                {
                                    name: "UI Design",
                                    href: "#"
                                },
                                {
                                    name: "Consultation",
                                    href: "#"
                                },
                                {
                                    name: "Maintenance",
                                    href: "#"
                                },
                            ]
                        },
                        {
                            title: "Company",
                            items: [
                                {
                                    name: "About",
                                    href: "#"
                                },
                                {
                                    name: "Contact",
                                    href: "#"
                                },
                                {
                                    name: "Send Quote",
                                    href: "#"
                                },
                                {
                                    name: "Privacy Policy",
                                    href: "#"
                                },
                                {
                                    name: "Term of Service",
                                    href: "#"
                                },
                                {
                                    name: "Jobs",
                                    href: "#"
                                },
                            ]
                        },
                        {
                            title: "Resources",
                            items: [
                                {
                                    name: "Support",
                                    href: "#"
                                },
                                {
                                    name: "Documentation",
                                    href: "#"
                                },
                                {
                                    name: "License",
                                    href: "#"
                                },
                                {
                                    name: "Sitemap",
                                    href: "#"
                                },
                            ]
                        },
                    ]
                }/>
        </div>
        <Callout message="We've prepared everything, it's time for you to tell the problem">
            <Button>Send Quote</Button>
            <Button colorVariant="light">Ask Us</Button>
        </Callout>
        <div className="grid grid-cols-3 w-fit gap-5">
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
            <FeatureCard
                title="Feature Title"
                icon={<FigmaIcon />}>
                    Feature Description
            </FeatureCard>
        </div>
        <LogoSponsors>
            hahah
        </LogoSponsors>
    </div>
}