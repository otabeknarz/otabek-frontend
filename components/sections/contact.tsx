"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Me
              </h2>
              <p className="mt-4 text-muted-foreground">
                Have a project in mind? Let's get in touch.
              </p>
            </motion.div>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="grid gap-6">
                  {/* Phone Contact */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        +998 88 088 59 98
                      </p>
                    </div>
                  </div>
                  
                  {/* Email Contact */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Email</h3>
                      <a
                        href="mailto:otabeknarz@gmail.com"
                        className="text-sm text-primary hover:underline"
                      >
                        otabeknarz@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* LinkedIn */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/otabek-narz-12197631a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Otabek Narz
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to new opportunities and collaborations. Feel free to reach out through any of the contact methods listed.
                  </p>
                  <div className="flex gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <a
                        href="https://linkedin.com/in/otabeknarz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <a
                        href="mailto:otabeknarz@gmail.com"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
