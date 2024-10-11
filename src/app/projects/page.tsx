import PageTitle from "#components/atoms/page-title";
import Section from "#components/atoms/section";
import SectionBadge from "#components/atoms/section-badge";
import Select from "#components/molecules/select";
import ProjectCard from "#components/organism/project-card";

export default function ProjectsPage() {
    return <>
        <Section>
            <Section.Back isFirst />
            <Section.Front isFirst navSelected="Projects">
                <div className="flex flex-col gap-5">
                    <div className="flex py-10 items-center justify-between border-b-2 border-light max-md:flex-col max-md:items-start gap-5">
                        <div className="w-1/2 max-md:w-full">
                            <SectionBadge>PROJECTS</SectionBadge>
                            <PageTitle>We have completed many amazing projects that you will not believe</PageTitle>
                        </div>
                        <div className="w-fit">
                            <Select>
                                <option>Technology</option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center py-5">
                        <ProjectCard
                            title="The Mobile App Landing Page"
                            description="A landing page for mobile app"
                            detail="Detail"
                        />
                        <ProjectCard
                            title="The Mobile App Landing Page"
                            description="A landing page for mobile app"
                            detail="Detail"
                        />
                        <ProjectCard
                            title="The Mobile App Landing Page"
                            description="A landing page for mobile app"
                            detail="Detail"
                        />
                        <ProjectCard
                            title="The Mobile App Landing Page"
                            description="A landing page for mobile app"
                            detail="Detail"
                        />
                    </div>
                </div>
            </Section.Front>
        </Section>
    </>;
}
