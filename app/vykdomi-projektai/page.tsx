"use client";
import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";

export default function VykdomiProjektaiPage() {
  return (
    <div>
      <section className="py-24 px-6 bg-content1">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">Vykdomi projektai</h1>
          <p className="text-xl text-default-500 mb-8">Armaris.lt</p>
          <Button as={Link} href="/contact" color="primary" size="lg" radius="full">
            Contact Us
          </Button>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Vykdomi projektai</h2>
          <p className="text-default-500 leading-relaxed max-w-3xl">
            Professional services by Armaris.lt.
          </p>
        </div>
      </section>
    </div>
  );
}