import { Calendar, MapPin, Heart } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from 'figma:asset/78aea43267429e05d7a0e4a65b256b8ae7acaa6e.png';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Coppia felice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/50" />
            <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
            <div className="h-px w-12 bg-white/50" />
          </div>

          {/* Save the Date */}
          <div className="space-y-2">
            <p className="tracking-[0.3em] uppercase text-rose-200">
              Salva la data
            </p>
          </div>

          {/* Names */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl text-white">
              Marco
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-white/50" />
              <span className="text-3xl">&</span>
              <div className="h-px w-16 bg-white/50" />
            </div>
            <h1 className="text-6xl md:text-8xl text-white">
              Sofia
            </h1>
          </div>

          {/* Event Details */}
          <div className="space-y-6 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-rose-300" />
                <span className="tracking-wide">15 Giugno 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-rose-300" />
                <span className="tracking-wide">Como, Italia</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-white text-rose-900 hover:bg-rose-50 tracking-wider px-8 shadow-xl"
              >
                Conferma Presenza
              </Button>
            </div>
          </div>

          {/* Countdown or Additional Info */}
          <div className="pt-12">
            <p className="text-rose-100 tracking-wide">
              Celebreremo insieme il nostro amore
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
