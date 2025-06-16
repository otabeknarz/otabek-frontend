"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Database, 
  Code, 
  Smartphone, 
  Server, 
  Layers, 
  Cpu, 
  Globe, 
  PenTool 
} from "lucide-react"

export function AboutSection() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: "Python, Django, Django Rest Framework, FastAPI, WebSockets, Aiogram, Redis, PostgreSQL, AsyncIO, Threading, Multiprocessing"
    },
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: "React.js, Next.js, Tailwind, Shadcn UI, Auth systems, WebSocket UIs, Beautiful admin panels and templates"
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      skills: "React Native (CRUD apps, functional mobile UI)"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h2>
          <div className="mx-auto max-w-[700px]">
            <p className="text-muted-foreground">
              I'm a full-stack software engineer experienced in building scalable backend systems, 
              real-time apps, and modern frontend interfaces. I'm currently a student at ALWIUT and 
              I've worked on multiple large-scale projects using Django, FastAPI, React, and more.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{category.skills}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
