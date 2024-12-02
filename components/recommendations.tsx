"use client";

import { Card, Avatar } from "@nextui-org/react";

type TestimonialProps = {
  name: string;
  title: string;
  avatarUrl: string;
  message: string;
};

const TestimonialCard = ({
  name,
  title,
  avatarUrl,
  message,
}: TestimonialProps) => {
  return (
    <Card className="bg-background text-black p-6 max-w-sm">
      <div className="flex items-center mb-4">
        <Avatar className="mr-4" size="lg" src={avatarUrl} />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
      <p className="">{message}</p>
    </Card>
  );
};

type TestimonialsProps = {
  testimonials: TestimonialProps[];
};

export default function Recommendations({ testimonials }: TestimonialsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 py-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            avatarUrl={testimonial.avatarUrl}
            message={testimonial.message}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>
    </div>
  );
}
