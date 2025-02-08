import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Starter pack for personal use. Get started with the basics.",
    buttonText: "Start Free Trial",
    benefitList: [
      "1 team member",
      "Upto 2 pages",
      "Community support",
      "Dashboard access",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 45,
    description:
      "45$ per month for all basic feature access and DSA sheets access.",
    buttonText: "Get starterd",
    benefitList: [
      "4 team member",
      "Upto 6 pages",
      "Dashboard access",
      "DSA sheets access",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 120,
    description:
      "120$ per month for access to all features and benefits.",
    buttonText: "Contact US",
    benefitList: [
      "10 team member",
      "Upto 10 pages",
      "Dashboard + DSA access",
      "AI assistance",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container px-24 mx-auto py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Start at full Speed!
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-indigo-500 mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};