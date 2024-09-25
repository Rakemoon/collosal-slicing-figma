import Button from "#components/atoms/button";
import Navbar from "#components/organism/navbar";
import PricingCard from "#components/organism/pricing-card";

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
    </div>
}