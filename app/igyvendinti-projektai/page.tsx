"use client";
import { Button, Card, CardBody, CardHeader, CardFooter } from "@heroui/react";
import { ArrowRight, Building2, Check, ChevronRight, Star, Users } from "lucide-react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";

export default function IgyvendintiProjektai() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  const projects = [
    {
      id: 1,
      title: "Prabangūs vonios kambariai",
      description: "Įgyvendinome išskirtinius projektus su aukščiausios kokybės medžiagomis ir inovatyviu dizainu.",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-3.jpg.webp",
      category: "Vonios kambariai",
      year: "2024"
    },
    {
      id: 2,
      title: "Modernūs svetainės sprendimai",
      description: "Kūrybiški interjero sprendimai, derinantys funkcionalumą su estetika.",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-4.jpg.webp",
      category: "Interjero sprendimai",
      year: "2024"
    },
    {
      id: 3,
      title: "Erdvios virtuvės",
      description: "Prabangios virtuvės su unikaliomis detalių kombinacijomis ir rankų darbo elementais.",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-3.jpg.webp",
      category: "Virtuvės",
      year: "2023"
    },
    {
      id: 4,
      title: "Miegamųjų baldai",
      description: "Aukščiausios kokybės miegamojo baldai, sukuriantys harmoningą atmosferą.",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-4.jpg.webp",
      category: "Miegamieji",
      year: "2023"
    },
    {
      id: 5,
      title: "Biuro įranga",
      description: "Funkcionalūs ir stilingi biuro sprendimai verslui.",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-3.jpg.webp",
      category: "Biuro baldai",
      year: "2023"
    },
    {
      id: 6,
      title: "Įėjimo zonos",
      description: "Pirmą įspūdį kuriantys įėjimo zonos dizainai.",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-4.jpg.webp",
      category: "Įėjimo zonos",
      year: "2022"
    }
  ];

  const stats = [
    { icon: Building2, value: "250", label: "Įgyvendintų projektų" },
    { icon: Users, value: "180", label: "Patenkintų klientų" },
    { icon: Star, value: "15", label: "Metų patirties" },
    { icon: Check, value: "100", label: "Procentų kokybė" }
  ];

  const features = [
    "Individualus požiūris į kiekvieną projektą",
    "Aukščiausios kokybės medžiagos",
    "Patirtis su sudėtingais uždaviniais",
    "Laiku įgyvendinti terminai",
    "Ilgalaikė garantija",
    "Nemokama konsultacija"
  ];

  return (
    <div ref={containerRef}>
      <section className="min-h-screen relative overflow-hidden bg-background" data-hero-bg>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-tertiary/5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div data-hero-title>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-tertiary">Įgyvendinti</span>
                  <br />
                  <span 
                    className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent"
                    style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                  >
                    projektai
                  </span>
                </h1>
              </div>
              
              <p 
                className="text-xl md:text-2xl text-secondary-400 max-w-2xl leading-relaxed"
                data-hero-sub
              >
                Kiekvienas mūsų projektas – tai unikalus meno kūrinys, 
                sukurtas jūsų svajonei ir poreikiams.
              </p>

              <div className="flex flex-wrap gap-4" data-hero-sub>
                <Button
                  size="lg"
                  className="font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #d4462a, #3c140c)" }}
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Žiūrėti projektus
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Nemokama konsultacija
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-3xl blur-3xl" />
              <div className="relative">
                <img
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-3.jpg.webp"
                  alt="Armaris.lt įgyvendintas projektas"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-content1/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">250+</p>
                      <p className="text-sm text-secondary-400">Sėkmingų projektų</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16" data-reveal-heading>
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Mūsų darbai</span>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-tertiary"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Reikšmingiausi <span className="text-primary">projektai</span>
              </h2>
            </div>
            <p className="text-secondary-400 text-lg max-w-md">
              Kiekvienas projektas – tai unikalus iššūkis, kurį įveikiame su kūrybiškumu ir profesionalumu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 group overflow-hidden"
                data-hover-lift
                data-reveal
                isPressable
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="relative w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110 ${
                        index % 3 === 1 ? 'h-80' : 'h-72'
                      }`}
                      data-parallax
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-tertiary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <Button
                        size="sm"
                        className="bg-primary text-white"
                        endContent={<ChevronRight className="w-4 h-4" />}
                      >
                        Daugiau
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-secondary-400 text-sm">{project.year}</span>
                    <span className="w-1 h-1 bg-secondary-400 rounded-full" />
                    <span className="text-primary text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="text-sm font-medium">Žiūrėti projektą</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center" data-reveal>
            <Button
              size="lg"
              className="font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #d4462a, #3c140c)" }}
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Žiūrėti visus projektus
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tertiary via-tertiary/95 to-tertiary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-stagger>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500"
                data-reveal
                data-hover-lift
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-tertiary rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p 
                  className="text-5xl font-bold text-white mb-3"
                  data-counter={stat.value}
                >
                  {stat.value}+
                </p>
                <p className="text-secondary-300 text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative" data-reveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-3xl blur-2xl" />
                <img
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-4.jpg.webp"
                  alt="Armaris.lt komandos profesionalumas"
                  className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-tertiary p-8 rounded-2xl shadow-2xl">
                  <p className="text-white text-4xl font-bold">15+</p>
                  <p className="text-white/80 text-sm mt-1">Metų patirties</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12" data-reveal-heading>
              <div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Kodėl mes</span>
                <h2 
                  className="text-4xl md:text-5xl font-bold mt-4 text-tertiary"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  Kiekvienas projektas – <span className="text-primary">meistrystės</span> pavyzdys
                </h2>
              </div>

              <p className="text-xl text-secondary-400 leading-relaxed">
                Armaris.lt komanda siekia aukščiausios kokybės kiekviename projekte. 
                Mes deriname tradicines手艺 su moderniomis technologijomis, 
                kad sukurtume baldus, kurie tarnauja dešimtmečius.
              </p>

              <div className="grid sm:grid-cols-2 gap-4" data-reveal-stagger>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-content1/40 backdrop-blur-sm border border-white/5 rounded-xl hover:border-primary/20 transition-all duration-300"
                    data-reveal
                    data-hover-lift
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div data-reveal>
                <Button
                  size="lg"
                  className="font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #d4462a, #3c140c)" }}
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Susisiekti dabar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-reveal-heading>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Procesas</span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-tertiary"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Kaip vyksta <span className="text-primary">bendradarbiavimas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-stagger>
            {[
              { step: "01", title: "Konsultacija", desc: "Susipažįstame su jūsų poreikiais ir svajonėmis" },
              { step: "02", title: "Projektavimas", desc: "Kuriame unikalų dizainą atsižvelgdami į erdvę" },
              { step: "03", title: "Gamyba", desc: "Įgyvendiname projektą su aukščiausios kokybės medžiagomis" },
              { step: "04", title: "Pristatymas", desc: "Montuojame ir atiduodame pasiruošę naudoti" }
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 bg-content1/60 backdrop-blur-xl border border-white/10 rounded-3xl group hover:border-primary/30 transition-all duration-500"
                data-reveal
                data-hover-lift
              >
                <div className="absolute top-6 right-6 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-primary to-tertiary rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-tertiary via-tertiary/95 to-tertiary" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div data-reveal-heading>
                  <h2 
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                  >
                    Turite projektą? <br />
                    <span className="text-primary">Pradėkime pokalbį</span>
                  </h2>
                  <p className="text-secondary-300 text-lg leading-relaxed">
                    Susisiekite su mumis nemokamai konsultacijai. 
                    Aptarsime jūsų idėjas ir rasime geriausią sprendimą.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4" data-reveal>
                  <Button
                    size="lg"
                    className="font-semibold bg-white text-tertiary hover:bg-secondary-100 transition-colors"
                    endContent={<ArrowRight className="w-5 h-5" />}
                  >
                    Užsakyti konsultaciją
                  </Button>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="border-white text-white hover:bg-white/10"
                  >
                    +370 600 00000
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}