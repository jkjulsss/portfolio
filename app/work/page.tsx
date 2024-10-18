"use client";

import EmploymentHistory, {
  EmploymentProps,
} from "@/components/employment-history";
const employments: EmploymentProps[] = [];

export default function Work() {
  return (
    <div className="min-h-screen">
      <EmploymentHistory employments={employments} />
    </div>
  );
}
