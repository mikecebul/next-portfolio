"use client";

import { Button } from "@/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";
import { Input } from "@/_components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "./ui/use-toast";
import { cn } from "@/_lib/utils";

interface ContactFormProps {
  className: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={cn("font-semibold text-xl text-center", className)}
        >
          Request A Call Back
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Let&apos;s Get In Touch</DialogTitle>
          <DialogDescription className="pb-8">
            Enter your contact information and I&apos;ll get back to you as soon
            as possible.
          </DialogDescription>
        </DialogHeader>
        <ContactUsForm onSubmitted={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Full name must be at least 3 characters.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Phone number must contain at least 10 characters.",
    })
    .max(14, {
      message: "Phone number must not exceed 14 charaters.",
    }),
  email: z.string().email(),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

interface ContactUsFormProps {
  onSubmitted: () => void;
}

export function ContactUsForm({ onSubmitted }: ContactUsFormProps) {
  const contactStatuses = {
    idle: "idle",
    loading: "loading",
    submitted: "submitted",
    error: "error",
  };

  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const [status, setStatus] = useState(contactStatuses.idle);

  const abortLongFetch = new AbortController();
  let abortTimeoutId;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Set the status to loading
    setStatus(contactStatuses.loading);
    // Set the timeout for fetch
    abortTimeoutId = setTimeout(() => abortLongFetch.abort(), 7000);
    // Fetch data
    try {
      const res = await fetch("/api/contact", {
        signal: abortLongFetch.signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Whoops! Error sending email.");
      }

      clearTimeout(abortTimeoutId);
      const data = await res.json();

      setStatus(contactStatuses.submitted);
      form.reset();
      wait().then(() => onSubmitted());
    } catch (err) {
      setStatus(contactStatuses.error);
      console.error(err);
    }
  }

  if (status === contactStatuses.error)
    toast({
      variant: "destructive",
      description:
        "Oops, there was an error sending your email. Please try again.",
    });
  if (status === contactStatuses.submitted)
    toast({ description: "Your message was sent successfully." });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="(xxx) xxx-xxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry Details</FormLabel>
              <FormControl>
                <Textarea placeholder="..." {...field} />
              </FormControl>
              <FormDescription>
                Interested in collaborating? I&apos;m eager to learn about your
                project and explore how we can work together.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={status === contactStatuses.loading}>
          {status === contactStatuses.loading ? "Sending..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
}
