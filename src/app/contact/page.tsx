import Button from "#components/atoms/button";
import Input from "#components/atoms/input";
import Label from "#components/atoms/label";
import PageTitle from "#components/atoms/page-title";
import Section from "#components/atoms/section";
import SectionBadge from "#components/atoms/section-badge";
import MailIcon from "#components/icons/mail";
import PhoneCallIcon from "#components/icons/phone-call";
import { ListIcon } from "#components/molecules/icon-card";
import Form from "#components/organism/form";

export default function ContactPage() {
    return <>
        <Section>
            <Section.Back isFirst />
            <Section.Front isFirst>
                <div className="flex flex-row gap-20 items-center my-auto justify-between max-md:flex-col">
                    <div className="flex flex-col gap-5">
                        <SectionBadge>CONTACT</SectionBadge>
                        <PageTitle>We love receiving messages from you, we are waiting for it.</PageTitle>

                        <ListIcon
                            icon={<PhoneCallIcon />}
                            keyVal="Phone"
                            value="+62 1234 8921"
                            className="mt-10"
                        />
                        <ListIcon
                            icon={<MailIcon />}
                            keyVal="Email"
                            value="support@collosal.tld"
                        />
                    </div>
                    <div className="w-fit h-fit bg-light rounded-md py-5 px-2.5 max-md:w-full">
                        <Form>
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
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input type="text" id="subject" />
                                </Form.Value>
                            </Form.Line>
                            <Form.Line>
                                <Form.Value>
                                    <Label htmlFor="message">Message</Label>
                                    <textarea className="rounded-md bg-transparent border-white border border-opacity-10 outline-none p-2 resize-none" rows={5} id="message"></textarea>
                                </Form.Value>
                            </Form.Line>
                            <Form.Line>
                                <Form.Value>
                                    <Button>Send Message</Button>
                                </Form.Value>
                            </Form.Line>
                        </Form>
                    </div>
                </div>
            </Section.Front>
        </Section>
    </>;
}