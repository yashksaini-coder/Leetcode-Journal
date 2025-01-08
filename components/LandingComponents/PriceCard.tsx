'use client'

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import LandingEmerlandButton from "./LandingEmerlandButton";

export interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  classname?: string;
}

export default function PricingCard({
  title,
  description,
  price,
  features,
  classname
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
    >
      <Card className={`${classname} rounded-2xl h-full flex flex-col justify-between`}>
        <CardHeader>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="dark:text-emerald-600 text-emerald-950 text-xl font-semibold"
          >
            {title}
          </motion.h1>
        </CardHeader>

        <CardContent>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 flex flex-col items-start justify-center"
          >
            <div>
              {price !== "Free" && (
                <p className="text-sm text-neutral-900 dark:text-neutral-200">
                  pause or cancel anytime
                </p>
              )}
              <h1 className="text-4xl font-bold pb-4">{price}</h1>
            </div>
            <p className="description text-xs text-secondary-foreground/90">{description}</p>
          </motion.div>
          <motion.ul className="space-y-1">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-2 text-sm"
              >
                <img src="/PricingTick.svg" alt="" /> <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
        <CardFooter>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {price !== "Free" ? (
              <LandingEmerlandButton>Buy Now</LandingEmerlandButton>
            ) : (
              <LandingEmerlandButton>Start Free Trial</LandingEmerlandButton>
            )}
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
