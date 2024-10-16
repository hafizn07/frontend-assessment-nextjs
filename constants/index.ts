import { Facility } from "@/types";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "About Us" },
  { href: "/", key: "how_we_help", label: "How We Help" },
  { href: "/", key: "pricing", label: "Pricing" },
  { href: "/", key: "portfolios ", label: "Portfolios " },
  { href: "/", key: "testimonials", label: "Testimonials" },
  { href: "/", key: "insights", label: "Insights" },
];

// FACILITIES
export const FACILITIES_DATA: Facility[] = [
  {
    id: 2,
    title: "Consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. ",
    image: "/images/meeting.jpeg",
  },
  {
    id: 3,
    title: "Consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. ",
    image: "/images/insideoffice.jpeg",
  },
  {
    id: 1,
    title: "Consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. ",
    image: "/images/topview.jpeg",
  },
  {
    id: 4,
    title: "Consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. ",
    image: "/images/sciencelab.jpeg",
  },
];

// STATS
export const STATS = [
  { id: 1, label: "Years of Success", value: 8, hasPlus: false },
  { id: 2, label: "Members", value: 200, hasPlus: true },
  { id: 3, label: "All Over The USA", value: 155, hasPlus: true },
  { id: 4, label: "Satisfied Clients", value: 200000, hasPlus: false },
];

// SERVICES
export const SERVICE_DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.",
  },
];
