"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  index: number
}

export function ProjectCard({ title, description, tags, liveUrl, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-primary/20">{title}</div>
          </div>
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {liveUrl && liveUrl !== "#" && (
            <Button asChild size="sm" variant="default">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {githubUrl && githubUrl !== "#" && (
            <Button asChild size="sm" variant="outline">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
