"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip } from "@heroui/react";
import { IconName } from "lucide-react";
import { useRef } from "react";
// Removed unavailable import: @/hooks/useGsapAnimations

export default function KontaktaiPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-tertiary/5" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-tertiary/10 blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-3xl">
            <Chip 
              className="mb-6 bg-tertiary/20 text-tertiary border border-tertiary/30"
              data-reveal
            >
              Susisiekite su mumis
            </Chip>
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
              data-hero-title
            >
              Kontaktai
            </h1>
            <p 
              className="text-xl md:text-2xl text-default-600 max-w-xl leading-relaxed"
              data-hero-sub
            >
              Turite klausimų? Susisiekite su mumis ir mes mielai padėsime įgyvendinti jūsų vizijas.
            </p>
          </div>
        </div>

        <div 
          className="absolute right-12 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-primary to-tertiary hidden lg:block"
          data-hero-sub
        />
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7" data-reveal>
              <Card 
                className="bg-content1/60 backdrop-blur-xl border border-white/10 shadow-2xl"
                data-hover-lift
              >
                <CardHeader className="pb-0">
                  <h2 className="text-3xl font-semibold text-foreground">
                    Parašykite mums
                  </h2>
                  <p className="text-default-500 mt-2">
                    Užpildykite formą ir mes su jumis susisieksime artimiausiu metu
                  </p>
                </CardHeader>
                <CardBody className="pt-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        type="text"
                        label="Vardas"
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-all duration-300"
                        }}
                      />
                      <Input
                        type="email"
                        label="El. paštas"
                        variant="bordered"
                        classNames={{
                          inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-all duration-300"
                        }}
                      />
                    </div>
                    <Input
                      type="tel"
                      label="Telefonas"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-all duration-300"
                      }}
                    />
                    <Textarea
                      label="Žinutė"
                      variant="bordered"
                      minRows={4}
                      classNames={{
                        inputWrapper: "border-default-300 focus-within:border-primary bg-content2/50 transition-all duration-300"
                      }}
                    />
                    <Button
                      size="lg"
                      type="submit"
                      className="w-full text-white font-semibold"
                      style={{ background: "linear-gradient(135deg, #d4462a, #3c140b)" }}
                      startContent={<span className="text-lg">→</span>}
                    >
                      Siųsti žinutę
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div data-reveal>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Kiti kontaktai
                </h3>
              </div>

              <Card 
                className="bg-content1/60 backdrop-blur-xl border border-white/10"
                data-hover-lift
                data-reveal
              >
                <CardBody className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/20 border border-secondary/30">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-default-500 mb-1">El. paštas</p>
                      <p className="text-foreground font-medium">info@armaris.lt</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/20 border border-secondary/30">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-default-500 mb-1">Telefonas</p>
                      <p className="text-foreground font-medium">+370 600 00000</p>
                    </div>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/20 border border-secondary/30">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-default-500 mb-1">Darbo laikas</p>
                      <p className="text-foreground font-medium">I - V: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Decorative Card */}
              <Card 
                className="bg-gradient-to-br from-primary/20 to-tertiary/20 border border-primary/30 backdrop-blur-xl"
                data-hover-lift
                data-reveal
              >
                <CardBody className="text-center py-8">
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Armaris.lt
                  </h4>
                  <p className="text-default-500 text-sm">
                    Kokybiški baldai jūsų namams nuo 2010 metų
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-content1/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-reveal-stagger>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-bold text-primary" data-counter="14">
                14+
              </p>
              <p className="text-default-500 mt-2">Metų patirtis</p>
            </div>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-bold text-secondary" data-counter="500">
                500+
              </p>
              <p className="text-default-500 mt-2">Įvykdytų projektų</p>
            </div>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-bold text-tertiary" data-counter="300">
                300+
              </p>
              <p className="text-default-500 mt-2">Laimingų klientų</p>
            </div>
            <div className="text-center" data-reveal>
              <p className="text-4xl md:text-5xl font-bold text-primary" data-counter="100">
                100%
              </p>
              <p className="text-default-500 mt-2"> Kokybės garantija</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-tertiary/10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-tertiary" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center" data-reveal>
          <h2 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            data-reveal-heading
          >
            Pasiruošę pradėti projektą?
          </h2>
          <p className="text-xl text-default-600 mb-10 max-w-2xl mx-auto">
            Susisiekite su mumis jau šiandien ir gaukite nemokamą konsultaciją dėl jūsų būsimų baldų.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-white font-semibold px-8"
              style={{ background: "linear-gradient(135deg, #d4462a, #3c140b)" }}
              startContent={<Phone className="w-5 h-5" />}
            >
              PasSkambinti
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-secondary text-secondary hover:bg-secondary/10"
              startContent={<Mail className="w-5 h-5" />}
            >
              Parašyti el. laišką
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Gradient Accent */}
      <div className="h-2 bg-gradient-to-r from-primary via-tertiary to-secondary" />
    </div>
  );
}