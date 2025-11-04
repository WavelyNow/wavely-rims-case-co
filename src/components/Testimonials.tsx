import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    car: "BMW M4",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    quote: "The quality is incredible! Everyone asks where I got my case. The rim detail is so realistic."
  },
  {
    id: 2,
    name: "Sophia Chen",
    car: "Audi RS5",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    quote: "Perfect way to showcase my car passion. The customization process was super easy and fun!"
  },
  {
    id: 3,
    name: "Tyler Rodriguez",
    car: "Mustang GT500",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    quote: "Best phone case I've ever owned. Premium materials, amazing design, and fast shipping."
  },
  {
    id: 4,
    name: "Emily Watson",
    car: "Porsche 911",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    quote: "My car photo looks stunning on the case. It's like having a mini version of my Porsche!"
  },
  {
    id: 5,
    name: "Chris Martinez",
    car: "Tesla Model 3",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    rating: 5,
    quote: "Unique design that stands out. The 3D rim adds such a premium touch. Worth every penny!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            What Our <span className="bg-gradient-accent bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied car enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-card/50 backdrop-blur rounded-xl p-8 border border-border/40 shadow-card hover:shadow-premium transition-premium animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 text-base leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-semibold font-poppins">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
