"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Work_Sans, Syne } from "next/font/google";
import { toast } from "sonner";

const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Name and Email are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          telegram: formData.telegram,
        }),
      });

      const data = await res.json();
      if (data.status === "success") {
        toast.success("Submission successful!");
        setFormData({ name: "", email: "", telegram: "" });
      } else {
        toast.error("Submission failed. Try again later.");
      }
    } catch {
      toast.error("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="w-full max-w-md bg-black border-neutral-800 rounded-3xl p-0">
      <CardHeader className="px-8 pt-8 pb-2">
        <CardTitle className={`text-2xl text-white font-semibold ${syne.className}`}>
          Contact Us
        </CardTitle>
        <CardDescription className={`text-white text-sm ${worksans.className}`}>
          Have a question or need assistance?
          <br />
          Reach out to us.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-8 pb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className={`text-white text-sm font-semibold ${syne.className}`}>
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border-white/80 text-white rounded-xl h-12 focus-visible:ring-white/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={`text-white text-sm font-semibold ${syne.className}`}>
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border-white/80 text-white rounded-xl h-12 focus-visible:ring-white/50"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="telegram"
              className={`text-white text-sm font-semibold ${syne.className}`}
            >
              Telegram / Discord
            </Label>
            <Input
              id="telegram"
              name="telegram"
              type="text"
              value={formData.telegram}
              onChange={handleChange}
              className="bg-transparent border-white/80 text-white rounded-xl h-12 focus-visible:ring-white/50"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className={`w-full h-12 bg-gradient-to-b from-[#DDEDFF] to-[#445CA0] hover:from-blue-300 hover:to-indigo-300 text-black font-bold rounded-xl text-[1rem]/[0.9] ${syne.className}`}
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
