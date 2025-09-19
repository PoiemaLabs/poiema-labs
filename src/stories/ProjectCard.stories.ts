import { Card, type CardProps } from "../components/projects/card.tsx";

export default {
  component: Card,
}

export const Default = {
  args: {
    title: "Parking Portal",
    description: "This is a description",
    icon: "/src/assets/blog-placeholder-3.jpg",
  } satisfies CardProps,
}
