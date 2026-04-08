"use client";
import { Button, Card, CardBody, CardHeader, CardFooter, Input, Textarea, Divider, Link, Chip } from "@heroui/react";
import { useRef } from "react";
import { useHeroAnimation, useScrollReveal, useMicroInteractions } from "@/hooks/useGsapAnimations";

export default function NamuProjektai() {
  const containerRef = useRef<HTMLDivElement>(null);
  useHeroAnimation(containerRef);
  useScrollReveal(containerRef);
  useMicroInteractions(containerRef);

  const projects = [
    {
      id: 1,
      title: "Modernus Medinis Namas",
      area: "120 m²",
      bedrooms: 3,
      floors: 2,
      price: "€85,000",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp"
    },
    {
      id: 2,
      title: "Klasikinis Brick Namas",
      area: "180 m²",
      bedrooms: 4,
      floors: 2,
      price: "€120,000",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-6.jpg.webp"
    },
    {
      id: 3,
      title: "Minimalistinė Vila",
      area: "200 m²",
      bedrooms: 5,
      floors: 3,
      price: "€145,000",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp"
    },
    {
      id: 4,
      title: "Eko Kotedžas",
      area: "95 m²",
      bedrooms: 2,
      floors: 1,
      price: "€65,000",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-6.jpg.webp"
    },
    {
      id: 5,
      title: "Prabangus Dvibutis",
      area: "150 m²",
      bedrooms: 3,
      floors: 2,
      price: "€98,000",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp"
    },
    {
      id: 6,
      title: "Šeimos Namas Premium",
      area: "220 m²",
      bedrooms: 5,
      floors: 2,
      price: "€165,000",
      image: "https://armaris.lt/wp-content/uploads/2020/07/gallery-6.jpg.webp"
    }
  ];

  const features = [
    { icon: "Building2", title: "Individualus Dizainas", desc: "Kiekvienas projektas pritaikomas pagal jūsų poreikius ir skonį" },
    { icon: "Check", title: " kokybės Garantija", desc: "Naudojame tik aukščiausios kokybės medžiagas" },
    { icon: "Users", title: "Profesionali Komanda", desc: "15 metų patirtis statybų srityje" },
    { icon: "Clock", title: "Laiku Atlikti Darbai", desc: "Įsipareigojame laikytis numatytų terminų" }
  ];

  return (
    <div ref={containerRef}>
      <section className="relative min-h-screen bg-background overflow-hidden" data-hero-bg>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-tertiary/20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2" data-hero-sub>
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Namų projektai
                </span>
              </div>
              
              <h1 
                className="font-bold leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
                data-hero-title
              >
                <span className="block text-foreground">Jūsų svajonių</span>
                <span className="block bg-gradient-to-r from-primary via-primary-400 to-tertiary bg-clip-text text-transparent">
                  Namo Projektai
                </span>
              </h1>
              
              <p 
                className="text-lg text-default-600 max-w-xl leading-relaxed"
                data-hero-sub
              >
                Atraskite mūsų ekskliuzyvius namų projektus, sukurtus šiuolaikiškai šeimai. 
                Kiekvienas projektas derina funkcionalumą su estetika, užtikrinant jums 
                namus, kuriuose norėsis gyventi amžinai.
              </p>
              
              <div className="flex flex-wrap gap-4" data-hero-sub>
                <Button
                  size="lg"
                  className="font-semibold text-white shadow-lg shadow-primary/30"
                  style={{ background: 'linear-gradient(135deg, #d4462a, #3c140c)' }}
                  endContent={→}
                >
                  Žiūrėti Projektus
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-secondary text-secondary hover:bg-secondary/10"
                >
                  Nemokama Konsultacija
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative" data-hero-sub>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl" />
                <img
                  src="https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp"
                  alt="Modernus namo projektas"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                  data-parallax
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-content1/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center">
                      →
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">250+</p>
                      <p className="text-sm text-default-500">Baigtų projektų</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      <section className="py-24 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
                Mūsų Projektai
              </span>
              <h2 
                className="font-bold text-foreground"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                data-reveal-heading
              >
                Populiariausi Namų <span className="text-primary">Projektai</span>
              </h2>
            </div>
            <p className="text-default-600 max-w-md">
              Kiekvienas mūsų projektas yra unikalus, sukurtas atsižvelgiant į šiuolaikinių šeimų poreikius 
              ir modernaus gyvenimo standartus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 group"
                data-hover-lift
                isPressable
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      data-parallax
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Chip 
                        className="bg-tertiary text-white border-0"
                        variant="flat"
                      >
                        Naujas
                      </Chip>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex-col items-start p-6 gap-4">
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-default-500">
                      <span className="flex items-center gap-1">
                        →
                        {project.area}
                      </span>
                      <span className="flex items-center gap-1">
                        →
                        {project.bedrooms} Kamb.
                      </span>
                      <span className="flex items-center gap-1">
                        →
                        {project.floors} Aukšt.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full pt-4 border-t border-white/10">
                    <div>
                      <p className="text-sm text-default-500">Nuo</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                        {project.price}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="light"
                      className="text-primary"
                      endContent={→}
                    >
                      Detaliau
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden" data-reveal>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-reveal-heading>
            <h2 
              className="font-bold text-foreground mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Kodėl rinktis <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Armaris.lt</span>?
            </h2>
            <p className="text-default-600 max-w-2xl mx-auto">
              Mes ne tik projektuojame namus – mes kuriamе svajones. Mūsų komanda lydės jus kiekviename žingsnyje, 
              nuo idėjos iki rakto įteikimo ceremonijos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-stagger>
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-content1/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                data-hover-lift
              >
                <CardBody className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg shadow-primary/20">
                    →
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-default-500 leading-relaxed">{feature.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-content2" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5" data-reveal-heading>
              <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
                Statistika
              </span>
              <h2 
                className="font-bold text-foreground mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}
              >
                Skaičiai, kurie kalba <span className="text-primary">už mus</span>
              </h2>
              <p className="text-default-600 mb-8 leading-relaxed">
                Per 15 veiklos metų įgyvendinome šimtus projektų. Kiekvienas iš jų – tai istorija, 
                kurią dalinamės su mūsų klientais.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-6" data-reveal-stagger>
              <Card className="bg-content1/60 backdrop-blur-xl border border-primary/20" data-hover-lift>
                <CardBody className="p-8 text-center">
                  <p 
                    className="text-5xl font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent mb-2"
                    data-counter="250"
                  >
                    0
                  </p>
                  <p className="text-default-500 font-medium">Baigti Projektai</p>
                </CardBody>
              </Card>
              
              <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                <CardBody className="p-8 text-center">
                  <p 
                    className="text-5xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent mb-2"
                    data-counter="15"
                  >
                    0
                  </p>
                  <p className="text-default-500 font-medium">Metų Patirtis</p>
                </CardBody>
              </Card>
              
              <Card className="bg-content1/60 backdrop-blur-xl border border-white/10" data-hover-lift>
                <CardBody className="p-8 text-center">
                  <p 
                    className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                    data-counter="98"
                  >
                    0
                  </p>
                  <p className="text-default-500 font-medium">% Tenkinantys Klientai</p>
                </CardBody>
              </Card>
              
              <Card className="bg-content1/60 backdrop-blur-xl border border-tertiary/20" data-hover-lift>
                <CardBody className="p-8 text-center">
                  <p 
                    className="text-5xl font-bold bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent mb-2"
                    data-counter="40"
                  >
                    0
                  </p>
                  <p className="text-default-500 font-medium">Professionalų Komanda</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal-heading>
            <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Galerija
            </span>
            <h2 
              className="font-bold text-foreground mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Mūsų Darbai <span className="text-primary">Gyvai</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal-stagger>
            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src="https://armaris.lt/wp-content/uploads/2020/07/gallery-5.jpg.webp"
                alt="Namų projektų galerija - pavyzdys 1"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                data-parallax
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Modernus Bokštelinis Namas</h3>
                  <p className="text-white/80 text-sm"> Vilnius, 2024</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src="https://armaris.lt/wp-content/uploads/2020/07/gallery-6.jpg.webp"
                alt="Namų projektų galerija - pavyzdys 2"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                data-parallax
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Klasikinis Šeimos Namas</h3>
                  <p className="text-white/80 text-sm"> Kaunas, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" data-reveal>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-400 to-tertiary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-white" data-reveal-heading>
              <h2 
                className="font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Pasiruošę pradėti savo namo projektą?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Susisiekite su mumis jau šiandien ir gaukite nemokamą konsultaciją. 
                Mūsų specialistai padės jums išsirinkti idealų projektą arba sukurti 
                individualų sprendimą pagal jūsų poreikius.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary font-semibold shadow-xl"
                  endContent={→}
                >
                  Skambinti Dabar
                </Button>
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-white text-white hover:bg-white/10"
                  endContent={→}
                >
                  Rašyti Laišką
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-5" data-reveal>
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardBody className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Susisiekite Su Mumis</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        →
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Telefonas</p>
                        <p className="text-white font-medium">+370 600 00000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        →
                      </div>
                      <div>
                        <p className="text-sm text-white/70">El. paštas</p>
                        <p className="text-white font-medium">info@armaris.lt</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                        →
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Adresas</p>
                        <p className="text-white font-medium">Vilnius, Lietuva</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-content1" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal-heading>
            <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
              Kontaktai
            </span>
            <h2 
              className="font-bold text-foreground mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Turite Klausimų? <span className="text-primary">Parašykite Mums</span>
            </h2>
            <p className="text-default-600 max-w-xl mx-auto">
              Užpildykite žemiau esančią formą ir mes susisieksime su jumis per 24 valandas
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto" data-reveal>
            <Card className="bg-content2/60 backdrop-blur-xl border border-white/10">
              <CardBody className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="Vardas"
                    placeholder="Įveskite savo vardą"
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-transparent",
                      label: "text-foreground"
                    }}
                  />
                  <Input
                    label="El. paštas"
                    placeholder="jusu@pastas.lt"
                    type="email"
                    variant="bordered"
                    classNames={{
                      inputWrapper: "border-default-300 focus-within:border-primary bg-transparent",
                      label: "text-foreground"
                    }}
                  />
                </div>
                <Input
                  label="Tema"
                  placeholder="Namų projektai, konsultacija..."
                  variant="bordered"
                  classNames={{
                    inputWrapper: "border-default-300 focus-within:border-primary bg-transparent",
                    label: "text-foreground"
                  }}
                  className="mb-6"
                />
                <Textarea
                  label="Žinutė"
                  placeholder="Aprašykite savo projektą arba klausimą..."
                  variant="bordered"
                  classNames={{
                    inputWrapper: "border-default-300 focus-within:border-primary bg-transparent",
                    label: "text-foreground"
                  }}
                  className="mb-6"
                />
                <Button
                  size="lg"
                  className="w-full font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #d4462a, #3c140c)' }}
                  endContent={→}
                >
                  Siųsti Užklausą
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-t border-white/5" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center">
                →
              </div>
              <span className="text-xl font-bold text-foreground">Armaris.lt</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-default-500">
              <Link href="#" className="hover:text-primary transition-colors">Namų Projektai</Link>
              <Link href="#" className="hover:text-primary transition-colors">Statybos</Link>
              <Link href="#" className="hover:text-primary transition-colors">Interjero Dizainas</Link>
              <Link href="#" className="hover:text-primary transition-colors">Kontaktai</Link>
            </div>
            
            <p className="text-sm text-default-500">
              © 2024 Armaris.lt. Visos teisės saugomos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}