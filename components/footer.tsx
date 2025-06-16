"use client"

import * as React from "react"
import Link from "next/link"
import { Linkedin, MessageSquare } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="font-bold text-xl mb-2">
            Otabek<span className="text-primary">.me</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Otabek Narz. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            href="https://linkedin.com/in/otabek-narz-12197631a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link 
            href="https://t.me/otabek_narz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
