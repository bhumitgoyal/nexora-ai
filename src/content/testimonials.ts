export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  gradient: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Didn't think AI could handle our inbound calls properly but customers actually thank the voice agent now. We went from missing a bunch of calls to zero dropped leads, and our team stopped firefighting every morning.",
    name: "Ravi Sharma",
    role: "Operations Manager",
    company: "Southwest Gases",
    initials: "RS",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "Our members are 60-plus and half of them aren't great with apps. The bot Nuvero built is patient, speaks their language, and never makes them feel dumb. We got feedback saying 'it actually listens' that's not easy to achieve.",
    name: "Anil Rastogi",
    role: "Head of Member Experience",
    company: "GoHappy Club",
    initials: "AR",
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    quote:
      "Our sales team was spending half their time chasing cold leads manually. Now the system finds them, qualifies them, and follows up automatically. We just close. Conversion rate's up and nobody's complaining.",
    name: "Greg Patterson",
    role: "Owner",
    company: "Welders Supply USA",
    initials: "GP",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    quote:
      "Running four client campaigns used to mean four people pulling reports every Monday. Now it all runs on its own and I genuinely get my weekends back. Clients haven't noticed which is the point.",
    name: "Rehan Khan",
    role: "Founder",
    company: "Marketrz Agency",
    initials: "RK",
    gradient: "from-fuchsia-500 to-violet-500",
  },
  {
    quote:
      "Response time on customer chats dropped from hours to seconds after Nuvero set up the AI assistant. Bookings went up, support load went down. Our team now only handles the stuff that actually needs a human.",
    name: "Rajesh Goyal",
    role: "Co-Founder",
    company: "CarBuddy Delhi",
    initials: "RG",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote:
      "Instagram is where our customers talk to us and we just couldn't keep up. Now every comment gets a reply in our exact tone within seconds. Repeat purchases went up didn't expect an automation to actually move that number.",
    name: "Shreya Bhatia",
    role: "Brand Manager",
    company: "Velocity Watches",
    initials: "SB",
    gradient: "from-rose-500 to-pink-400",
  },
];
