import Button from "#components/atoms/button";
import FigmaIcon from "#components/icons/figma";
import FeatureCard from "#components/molecules/feature-card";
import Callout from "#components/molecules/callout";
import Footer from "#components/organism/footer";
import Navbar from "#components/organism/navbar";
import PricingCard from "#components/organism/pricing-card";
import LogoSponsors from "#components/molecules/logo-sponsors";
import TestimonialCard from "#components/molecules/testimonial-card";
import TeamCard from "#components/molecules/team-card";
import BlogCard from "#components/molecules/blog-card";
import FaqAccordion from "#components/molecules/faq-accordion";
import PageDescription from "#components/atoms/page-description";
import CloudTag from "#components/atoms/cloud-tag";
import AuthorCard from "#components/organism/author-card";
import Comment from "#components/organism/comment";
import Form from "#components/organism/form";
import Label from "#components/atoms/label";
import Input from "#components/atoms/input";
import Select from "#components/molecules/select";

export default function Components() {
    return <div className="grid place-content-center min-h-screen bg-dark text-muted gap-4 p-2 max-w-full">
        <h1 className="text-4xl font-bold w-fit mx-auto pb-5">Components List</h1>
        <div className="p-2 border-dashed border-2 border-highlight gap-2 flex flex-wrap items-center w-fit">
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
                } />
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
        <TestimonialCard
            name="Name"
            company="Company">
            {"'This is a testimonial text'"}
        </TestimonialCard>
        <TeamCard name="Team Name" job="job" />
        <BlogCard
            title="SEO tricks that can increase the traffic of your website"
            summary="People have been using wrong SEO techniques on their websites."
            author={{
                name: "Jane Cooper",
                foot: "Mar 18 . 5 min read"
            }}
        />
        <FaqAccordion title="How is the payment system?">
            <PageDescription>If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.</PageDescription>
        </FaqAccordion>
        <div>
            <CloudTag>Figma</CloudTag>
        </div>

        <div>
            <AuthorCard
                name="Alex Berner"
                job="UI Designer"
                description="Night subdue their morning created every light earth very darkness they're you're deep female. Tree sixth divided greater, midst earth forth won't for moved."
                links={{
                    x: "https://x.com",
                    facebook: "https://facebook.com",
                    linkedin: "https://linkedin.com"
                }}
            />
            <Comment
                name="Robert Fox"
                date={new Date()}
                content="Moveth fish were living fruitful created from dry his one dry sea you're. It greater doesn't replenish replenish divide moveth. They're under itself without given a male light years fruit rule sea moveth."
            />
        </div>

        <div>
            <Form>
                <Form.Line>
                    <Form.Value>
                        <Label htmlFor="label">Label</Label>
                        <Input type="text" id="label" />
                    </Form.Value>  
                    <Form.Value>
                        <Label>Company Size</Label>
                        <Select>
                            <Select.Option>Mouh</Select.Option>
                        </Select>
                    </Form.Value>  
                </Form.Line>
                <Form.Line>
                    <Form.Value>
                        <Label>Tell Us Your Problem</Label>
                        <textarea className="rounded-md bg-transparent border-white border border-opacity-10 outline-none p-2"></textarea>
                    </Form.Value>
                </Form.Line>
                <Form.Line>
                    <Form.Value>
                        <Select>
                            <Select.Option>Technology</Select.Option>
                        </Select>
                    </Form.Value>
                </Form.Line>
            </Form>
        </div>
    </div>
}
