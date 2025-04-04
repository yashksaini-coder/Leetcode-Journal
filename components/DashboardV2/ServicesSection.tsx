import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum Coming {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: Coming;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Problem Solving",
    description:
      "Enhance your problem-solving skills with a variety of coding challenges.",
    pro: Coming.NO,
  },
  {
    title: "Interview Preparation",
    description:
      "Get ready for your technical interviews with curated questions and solutions.",
    pro: Coming.YES,
  },
  {
    title: "Progress Tracking",
    description: "Track your progress and see how you improve over time.",
    pro: Coming.NO,
  },
  {
    title: "Community Support",
    description: "Join a community of fellow coders and get support.",
    pro: Coming.NO,
  },
  {
    title: "AI Assistance",
    description:
      "Get personalized recommendations and insights to help you grow.",
    pro: Coming.YES,
  },
  {
    title: "Code Review",
    description: "Get feedback on your code to improve your skills.",
    pro: Coming.YES,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto px-3 py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-indigo-500 text-center font-bold mb-4">
        Track your coding journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We have a simple goal to showcase your LeetCode DSA journey in the greater UI way.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={Coming.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              Coming
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
