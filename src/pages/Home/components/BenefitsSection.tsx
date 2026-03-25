import { Sparkles, Palette, Layers, FileText } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Turns Collections into Premium Publications",
      description:
        "Transform jewellery collections into curated catalogues and lookbooks that feel editorial and aspirational, making each piece part of a compelling story rather than just a list of products."
    },
    {
      icon: Palette,
      title: "Consistent Brand Identity Across Documents",
      description:
        "Maintain a strong and recognizable brand look using templates, styles, and palettes so every catalogue, brochure, and line sheet feels cohesive and professional."
    },
    {
      icon: Layers,
      title: "Streamlined Catalogue & Brochure Creation",
      description:
        "Use reusable layouts and structured templates to quickly update collections, pricing, and content without redesigning from scratch, saving time and effort."
    },
    {
      icon: FileText,
      title: "Clear Communication for Buyers & Partners",
      description:
        "Present product visuals, specifications, and pricing in a structured way that helps buyers make faster decisions and supports smoother business interactions."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-600">
          Benefits of REACH Artvex
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Create powerful catalogues, lookbooks, and sales documents that elevate your jewellery brand.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-35 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-500 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;