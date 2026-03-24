export default function WhyChooseUs() {
  const features = [
    {
      title: "Best Price Guarantee",
      description: "We ensure you get the best deals with no hidden fees.",
      icon: "💸", // You can replace with Lucide icons or proper SVGs
    },
    {
      title: "24/7 Customer Support",
      description: "Reach out any time—our travel experts are here to help.",
      icon: "🎧",
    },
    {
      title: "Easy Booking Process",
      description: "Quick, user-friendly booking process for a seamless experience.",
      icon: "📱",
    },
    {
      title: "Customize Exclusive Deals",
      description: "Sign up and get access to special discounts and offers.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center mb-12">
        <h3 className="text-[#004E89] font-bold text-lg mb-2">Why Choose Us</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
          We Offer Best <br /> Services
        </h2>
      </div>

      {/* Decorative Oranges backdrops */}
      <div className="absolute top-[50%] left-[20%] w-32 h-32 bg-[#FF6D38] rounded-tl-[40px] rounded-br-[40px] -z-10 opacity-90"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#0ba5c9] text-white rounded-[40px] p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 relative z-10"
          >
            <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
              {feature.icon}
            </div>
            <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
            <p className="text-sm text-blue-50 leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Plus decorations */ }
      <div className="absolute top-10 right-10 text-gray-200 grid grid-cols-5 gap-2 opacity-50 hidden lg:grid">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="text-xl">+</span>
        ))}
      </div>
    </section>
  );
}
