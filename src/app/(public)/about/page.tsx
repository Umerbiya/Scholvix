"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Globe, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Iman U",
    role: "COO & Brand Strategist",
    focus:
      "Business operations, brand positioning, and user growth. Iman oversees the day-to-day organizational workflows and ensures that the platform’s vision aligns with market demands, focusing on delivering a premium experience to every client.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Umer Biya",
    role: "Lead Software Architect",
    focus:
      "Core engineering and technical innovation. Umer is responsible for the full-stack development of the Scholvix platform, ensuring high performance, security, and the seamless integration of modern web technologies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah Chen",
    role: "Partnerships Lead",
    focus:
      "Client relations and strategic growth. Sarah leads the effort in bringing Scholvix to new markets and ensure that our partners and users have the operational support they need to succeed.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-b-[4rem]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20 mb-8">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Students.</span><br />
              Always 100% Free.
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Scholvix was created with one simple belief: financial constraints should never stand in the way of a brilliant mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Democratizing Global Education.</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Navigating the world of international scholarships is incredibly complex. Between scattered deadlines, hidden requirements, and predatory consulting agencies charging thousands of dollars just for basic advice, the system is fundamentally broken.
              </p>
              <p>
                We built Scholvix to fix this. We are a passionate team dedicated to organizing the world's fully-funded opportunities into one sleek, highly intuitive platform.
              </p>
              <p className="font-bold text-foreground">
                We don't charge subscription fees. We don't hide premium features behind paywalls. Every guide, timeline, and scholarship detail on this platform is completely free to access.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-border/50"
          >
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Students collaborating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
              <p className="text-white font-medium text-lg text-center">
                "Empowering the next generation of global leaders, one scholarship at a time."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Student-First", desc: "Every feature we build is designed solely to make the application journey easier for you." },
            { icon: Globe, title: "Global Access", desc: "We source opportunities across the globe, ensuring there are paths for students from every nationality." },
            { icon: ShieldCheck, title: "No Paywalls", desc: "Access to life-changing educational opportunities should be a human right, not a luxury." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/40 backdrop-blur-sm border border-border/50 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 px-4 rounded-full bg-primary/10 text-primary font-semibold mb-4 text-sm">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            The Minds Behind Scholvix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated group of innovators working to make global education accessible for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2rem] p-6 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Avatar Container */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-background shadow-lg group-hover:scale-105 transition-transform duration-500 flex items-center justify-center bg-primary/10">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-5xl font-extrabold text-primary select-none">
                    {member.name ? member.name.charAt(0).toUpperCase() : "?"}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.focus}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}