"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  return (
    <div ref={containerRef}>
      <section data-hero-bg className="relative min-h-screen overflow-hidden" style={{ backgroundImage: "url('https://armaris.lt/wp-content/uploads/2020/05/home-1-rev-img-2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-primary/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 flex items-center min-h-screen">
          <div className="max-w-3xl">
            <div className="mb-6" data-reveal>
              <Chip className="bg-tertiary/20 text-tertiary border border-tertiary/30 px-4 py-2" size="sm">
                Premium interjero sprendimai
              </Chip>
            </div>
            <h1 data-hero-title className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-foreground">Kurdami erdves</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-400 to-tertiary bg-clip-text text-transparent">
                įkvepiame gyvenimą
              </span>
            </h1>
            <p data-hero-sub className="text-xl md:text-2xl text-default-500 mb-10 max-w-xl">
              Armaris.lt — profesionalūs baldų gamybos ir interjero dizaino sprendimai jūsų svajonių namams
            </p>
            <div data-hero-sub className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="text-white font-semibold px-8 py-4 text-lg"
                style={{ background: "linear-gradient(135deg, #d4462a, #3c140c)" }}
                endContent={"→"}
              >
                Nemokama konsultacija
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
              >
                Peržiūrėti darbus
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 px-6 bg-content1/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative" data-reveal>
              <div className="relative z-10">
                <img
                  src="https://armaris.lt/wp-content/uploads/2020/05/home-1-rev-img-1.png"
                  alt="Armaris.lt interjero dizaino pavyzdys"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  data-parallax
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 z-20 w-48 h-48 rounded-2xl overflow-hidden border-4 border-content1 shadow-xl" data-hover-lift>
                <img
                  src="https://armaris.lt/wp-content/uploads/2020/06/90564160_234420907948244_3547620218874363904_n-768x432.jpg.webp"
                  alt="Armaris.lt baldų gamybos procesas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-tertiary rounded-2xl opacity-20 blur-xl" />
            </div>
            <div data-reveal>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Apie mus</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight" data-reveal-heading>
                <span className="text-foreground">30 metų patirties</span>
                <br />
                <span className="text-secondary">baldų pramonėje</span>
              </h2>
              <p className="text-default-500 text-lg mb-8 leading-relaxed">
                Nuo 1994 metų Armaris.lt kuria aukščiausios kokybės baldus ir interjero sprendimus. Mūsų komanda
                derina tradicinius amato principus su šiuolaikinėmis technologijomis, kad kiekvienas projektas
                taptų unikaliu kūriniu.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                  <CardBody className="p-6">
                    →
                    <h3 className="text-2xl font-bold text-foreground">500+</h3>
                    <p className="text-default-500">Įgyvendintų projektų</p>
                  </CardBody>
                </Card>
                <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                  <CardBody className="p-6">
                    →
                    <h3 className="text-2xl font-bold text-foreground">15</h3>
                    <p className="text-default-500">Patyrusių meistrų</p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-reveal>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Paslaugos</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6" data-reveal-heading>
              Ką mes siūlome
            </h2>
            <p className="text-default-500 text-xl max-w-2xl mx-auto">
              Pilna interjero sprendimų programa — nuo projektavimo iki galutinės įrangos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center mb-6">
                  →
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Interjero dizainas</h3>
                <p className="text-default-500 mb-6 leading-relaxed">
                  Kūrybiški ir funkcini sprendimai, atitinkantys jūsų gyvenimo būdą bei estetinius pageidavimus.
                  3D vizualizacijos prieš pradedant gamybą.
                </p>
                <Link className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                  Sužinoti daugiau →
                </Link>
              </CardBody>
            </Card>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center mb-6">
                  →
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Baldų gamyba</h3>
                <p className="text-default-500 mb-6 leading-relaxed">
                  Pagal užsakymą pagaminti baldai iš aukščiausios kokybės medžiagų. Virtuvės, baldai, vonios
                  kambario įranga ir kiti pritaikyti sprendimai.
                </p>
                <Link className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                  Sužinoti daugiau →
                </Link>
              </CardBody>
            </Card>
            <Card className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300" data-hover-lift>
              <CardBody className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tertiary to-primary flex items-center justify-center mb-6">
                  →
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Matavimas ir montavimas</h3>
                <p className="text-default-500 mb-6 leading-relaxed">
                  Nemokamas matavimas vietoje ir profesionalus montavimas. Užtikriname tikslumą ir kokybę
                  kiekviename įgyvendinimo etape.
                </p>
                <Link className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                  Sužinoti daugiau →
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-tertiary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-reveal-stagger>
            <div className="text-center" data-reveal>
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2" data-counter="250">
                250+
              </h3>
              <p className="text-secondary font-medium">Laimingų klientų</p>
            </div>
            <div className="text-center" data-reveal>
              <h3 className="text-5xl md:text-6xl font-bold text-secondary mb-2" data-counter="30">
                30+
              </h3>
              <p className="text-secondary font-medium">Metų patirties</p>
            </div>
            <div className="text-center" data-reveal>
              <h3 className="text-5xl md:text-6xl font-bold text-tertiary mb-2" data-counter="500">
                500+
              </h3>
              <p className="text-secondary font-medium">Projektų</p>
            </div>
            <div className="text-center" data-reveal>
              <h3 className="text-5xl md:text-6xl font-bold text-primary mb-2" data-counter="100">
                100%
              </h3>
              <p className="text-secondary font-medium"> kokybės garantija</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-reveal>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6" data-reveal-heading>
              Mūsų darbai
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-stagger>
            {[
              "https://armaris.lt/wp-content/uploads/2020/07/gallery-1.jpg.webp",
              "https://armaris.lt/wp-content/uploads/2020/07/gallery-2.jpg.webp",
              "https://armaris.lt/wp-content/uploads/2020/07/gallery-3.jpg.webp",
              "https://armaris.lt/wp-content/uploads/2020/07/gallery-4.jpg.webp",
              "https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp",
              "https://armaris.lt/wp-content/uploads/2020/07/gallery-6.jpg.webp",
            ].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl" data-hover-lift data-reveal>
                <img
                  src={src}
                  alt={`Armaris.lt projekto nuotrauka ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Chip className="bg-primary text-white text-xs mb-2" size="sm">
                    Interjero dizainas
                  </Chip>
                  <h4 className="text-white font-bold text-lg">Projektas {index + 1}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #d4462a 0%, #3c140c 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10" data-reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pasiruošę pradėti projektą?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Susisiekite su mumis jau šiandien ir gaukite nemokamą konsultaciją dėl jūsų interjero sprendimų.
            Kiekviena detalė svarbi kuriant jūsų svajonių erdvę.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary font-semibold px-10 py-6 text-lg"
              style={{ background: "#ffffff" }}
            >
              →
              Skambinti dabar
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-white text-white hover:bg-white/20 px-10 py-6 text-lg"
            >
              →
              Rašyti el. laišką
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-content1/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div data-reveal>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Susisiekite</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6" data-reveal-heading>
                Turite klausimų?
              </h2>
              <p className="text-default-500 text-lg mb-8">
                Užpildykite formą ir mūsų komanda susisieks su jumis per 24 valandas. Konsultacija visada nemokama.
              </p>
              <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                <CardBody className="p-8">
                  <div className="space-y-6">
                    <Input
                      label="Jūsų vardas"
                      placeholder="Įveskite vardą"
                      variant="bordered"
                      classNames={{ inputWrapper: "border-default-300 focus-within:border-primary" }}
                    />
                    <Input
                      label="El. paštas"
                      placeholder="jums@pvz.lt"
                      type="email"
                      variant="bordered"
                      classNames={{ inputWrapper: "border-default-300 focus-within:border-primary" }}
                    />
                    <Input
                      label="Telefono numeris"
                      placeholder="+370 6XX XXXXX"
                      type="tel"
                      variant="bordered"
                      classNames={{ inputWrapper: "border-default-300 focus-within:border-primary" }}
                    />
                    <Textarea
                      label="Jūsų žinutė"
                      placeholder="Aprašykite savo projektą..."
                      variant="bordered"
                      classNames={{ inputWrapper: "border-default-300 focus-within:border-primary" }}
                    />
                    <Button
                      size="lg"
                      className="w-full text-white font-semibold py-4 text-lg"
                      style={{ background: "linear-gradient(135deg, #d4462a, #3c140c)" }}
                    >
                      Siųsti užklausą
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div data-reveal>
              <div className="space-y-8">
                <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                  <CardBody className="p-8 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center flex-shrink-0">
                      →
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Adresas</h3>
                      <p className="text-default-500">Verkių g. 31B, Vilnius, Lietuva</p>
                    </div>
                  </CardBody>
                </Card>
                <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                  <CardBody className="p-8 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center flex-shrink-0">
                      →
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Telefonas</h3>
                      <p className="text-default-500">+370 5 270 0055</p>
                    </div>
                  </CardBody>
                </Card>
                <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                  <CardBody className="p-8 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tertiary to-primary flex items-center justify-center flex-shrink-0">
                      →
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">El. paštas</h3>
                      <p className="text-default-500">info@armaris.lt</p>
                    </div>
                  </CardBody>
                </Card>
                <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                  <CardBody className="p-8 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      →
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Darbo laikas</h3>
                      <p className="text-default-500">I - V: 8:00 - 17:00</p>
                      <p className="text-default-500">VI: Pagal susitarimą</p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <section className="py-16 px-6 bg-tertiary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8" data-reveal>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Armaris.lt</h3>
              <p className="text-white/60">Jūsų interjero partneris nuo 1994 metų</p>
            </div>
            <div className="flex gap-4">
              <Chip className="bg-white/10 text-white border border-white/20" data-hover-lift>
                →
                30 metų patirties
              </Chip>
              <Chip className="bg-white/10 text-white border border-white/20" data-hover-lift>
                →
                Kokybės garantija
              </Chip>
              <Chip className="bg-white/10 text-white border border-white/20" data-hover-lift>
                →
                500+ projektų
              </Chip>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}