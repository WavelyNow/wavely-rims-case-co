import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RacingBackground from "@/components/RacingBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Products & Customization",
      questions: [
        {
          q: "What materials do you use for cases?",
          a: "Our cases are made from premium materials: flexible TPU for impact protection, rigid polycarbonate for maximum durability, and soft-touch matte finish for a premium feel. All materials are tested for scratch and wear resistance."
        },
        {
          q: "How does the customization process work?",
          a: "Customization is simple: 1) Choose your phone model, 2) Select rim design (over 200 models), 3) Upload photos of your car or favorite images, 4) Add custom text (optional), 5) View live preview and confirm order. The entire process takes 2-3 minutes."
        },
        {
          q: "Can I upload any type of image?",
          a: "Yes! We accept JPG, PNG, and HEIC (iOS) formats. For optimal quality, we recommend images with minimum resolution of 1000x1000 pixels. Our team reviews every design before production and contacts you if adjustments are needed."
        },
        {
          q: "Is the rim design real 3D or just printed?",
          a: "Rims are created using advanced 3D printing technology, creating authentic tactile relief. It's not just a printed image - you can feel the texture and details of each rim. This is our difference from other custom cases."
        },
        {
          q: "How many phone models do you support?",
          a: "We support all popular iPhone models (iPhone 12-16 Series), Samsung Galaxy (S20-S24, Note), Google Pixel (6-8), and many others. The complete list is available in the customization configurator. If you don't find your model, contact us and we'll check availability."
        }
      ]
    },
    {
      category: "Orders & Payments",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept card payments (Visa, Mastercard, American Express), Google Pay, Apple Pay, and cash on delivery (available in Romania). All transactions are secured through Stripe, the world's largest payment processor."
        },
        {
          q: "Can I modify or cancel my order after placing it?",
          a: "You can cancel or modify your order within 2 hours of placement by contacting us urgently at orders@wavely.com or WhatsApp. After this period, the case enters custom production and cannot be modified."
        },
        {
          q: "Do I receive an invoice?",
          a: "Yes, all orders include an electronic invoice automatically sent via email after shipping. For company purchases, enter company details (tax ID, name) in the dedicated fields at checkout."
        },
        {
          q: "Do you have a discount code for first orders?",
          a: "Yes! Subscribe to our newsletter for 10% off your first order. We also have special promotions on the Giveaway page and referral programs that give you discounts for recommended friends."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Custom production takes 2-3 business days. After shipping, delivery in Romania takes 1-2 days (Fan Courier). International delivery to EU: 3-5 days. You receive automatic tracking via email and SMS when the package is shipped."
        },
        {
          q: "How much does shipping cost?",
          a: "Standard delivery in Romania: 15 lei. FREE shipping for orders over 150 lei. International delivery: 35 lei in EU, 50 lei outside EU. Final price is displayed at checkout before confirmation."
        },
        {
          q: "Do you deliver throughout the country?",
          a: "Yes, we deliver throughout Romania via Fan Courier, including small towns. For international deliveries, we cover the entire European Union and other selected countries (UK, Switzerland, USA, Canada)."
        },
        {
          q: "What happens if I'm not home for delivery?",
          a: "The courier will try to contact you by phone. If you're not available, the package will be stored at the Fan Courier office in your city, where you can pick it up within 7 days. You'll receive SMS with address and schedule."
        }
      ]
    },
    {
      category: "Returns & Warranties",
      questions: [
        {
          q: "Can I return the case if I don't like it?",
          a: "Yes! You have 14 days right of return according to European legislation. The case must be unused, in original packaging. Note: custom products can only be returned if they have manufacturing defects, not for design changes."
        },
        {
          q: "What warranty do cases have?",
          a: "We offer 12-month warranty for manufacturing defects: cracks, design peeling, discoloration. Warranty doesn't cover normal wear or damage caused by impact/falls. For issues, contact support@wavely.com with photos and problem description."
        },
        {
          q: "What do I do if the case arrives damaged?",
          a: "If the case arrives with visible defects or damage, contact us immediately (max 48h) at support@wavely.com with clear photos of the problem. We'll send free replacement or full refund, no shipping costs for you."
        },
        {
          q: "How does the return process work?",
          a: "1) Notify us by email that you want to return the product within 14 days, 2) Receive email with instructions and return address, 3) Ship the product (return shipping cost is customer's responsibility, except defects), 4) We check received product, 5) Process refund in 5-7 business days."
        }
      ]
    },
    {
      category: "Care & Durability",
      questions: [
        {
          q: "Are cases scratch-resistant?",
          a: "Yes, our materials are anti-scratch treated and tested for daily wear. The 3D design and print are protected with a transparent UV-resistant layer that prevents fading and surface scratches."
        },
        {
          q: "How do I clean the case without damaging the design?",
          a: "Clean the case with a soft damp cloth and mild soap. DO NOT use alcohol, acetone, or abrasive detergents that can damage the print. For persistent stains, use a soft brush. Let the case dry completely before remounting."
        },
        {
          q: "Does the design wear off over time?",
          a: "No! We use industrial-grade sublimation printing technology that penetrates the material, not just the surface. The design is covered with UV-protective finish that prevents fading even with prolonged sun exposure."
        },
        {
          q: "Does the case turn yellow over time?",
          a: "Our premium materials are anti-yellowing treated. Unlike cheap TPU cases that turn yellow in 2-3 months, Wavely cases maintain their original color for 12+ months with normal use."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0">
        <RacingBackground />
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-racing text-4xl md:text-6xl mb-6 text-white uppercase tracking-wider animate-fade-in animate-glitch-text">
            FAQ <span className="text-primary neon-glow-orange">Zone</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto animate-fade-in font-body">
            Everything you need to know about street-inspired armor
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-primary">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIdx) => (
                  <AccordionItem
                    key={qIdx}
                    value={`${idx}-${qIdx}`}
                    className="bg-card/50 backdrop-blur rounded-lg border border-border/40 px-6 shadow-card hover:shadow-premium transition-premium"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-smooth">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-card/30 backdrop-blur rounded-xl p-8 border border-border/40 animate-fade-in">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Didn't find the answer?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-8 bg-gradient-accent hover:shadow-glow transition-smooth"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
