import Button from "#components/atoms/button";
import Input from "#components/atoms/input";
import Label from "#components/atoms/label";
import PageDescription from "#components/atoms/page-description";
import PageTitle from "#components/atoms/page-title";
import Section from "#components/atoms/section";
import SectionBadge from "#components/atoms/section-badge";
import Select from "#components/molecules/select";
import Form from "#components/organism/form";
import Navbar from "#components/organism/navbar";

export default function QuotePage () {
    return <>
        <Section>
            <Section.Back isFirst />
            <Section.Front>
                <Navbar variant="naked" />
                <div className="flex w-fit my-auto gap-20">
                    <div className="w-fit flex flex-col gap-5 justify-center">
                        <SectionBadge>SEND QUOTE</SectionBadge>
                        <PageTitle>Tell us about your problem and how we can help</PageTitle>
                        <PageDescription>We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond.</PageDescription>
                        <Button className="w-fit" colorVariant="light" colorScheme="white">Ask Us</Button>
                    </div>
                    <div className="w-fit bg-light rounded-md py-5 px-2.5">
                        <Form className="gap-10">
                            <Form.Line>
                                <Form.Value>
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" id="name" />
                                </Form.Value>
                                <Form.Value>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" />
                                </Form.Value>
                            </Form.Line>
                            <Form.Line>
                                <Form.Value>
                                    <Label htmlFor="company">Company</Label>
                                    <Input type="text" id="company" />
                                </Form.Value>
                                <Form.Value>
                                    <Label htmlFor="company-size">Company Size</Label>
                                    <Select id="company-size"></Select>
                                </Form.Value>
                            </Form.Line>
                            <Form.Line>
                                <Form.Value>
                                    <Label>Tell Us Your Problem</Label>
                                    <textarea className="rounded-md bg-transparent border-white border border-opacity-10 outline-none p-2 resize-none" rows={5}></textarea>
                                </Form.Value>
                            </Form.Line>
                            <Form.Line>
                                <Form.Value>
                                    <Button>Send Quote</Button>
                                </Form.Value>
                            </Form.Line>
                        </Form>
                    </div>
                </div>
            </Section.Front>
        </Section>
    </>;
}