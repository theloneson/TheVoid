export default function About() {
  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
            About <span className="text-cosmic">The Void</span>
          </h1>
          <p className="text-xl text-muted font-heading max-w-3xl mx-auto leading-relaxed">
            We exist in the space between conformity and rebellion, crafting premium pieces 
            for those who refuse to blend into the ordinary.
          </p>
        </div>

        {/* Story Section */}
        <div className="prose prose-lg max-w-none mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Our Origin Story
              </h2>
              <p className="text-muted font-body leading-relaxed mb-4">
                The Void was born from a simple question: What if clothing could be more than fabric? 
                What if it could be a statement, a rebellion, a cosmic journey into the unknown?
              </p>
              <p className="text-muted font-body leading-relaxed">
                Founded by dreamers and rebels, we create pieces that speak to the outlaws of tomorrow. 
                Every thread is woven with intention, every design challenges the status quo.
              </p>
            </div>
            <div className="bg-gradient-cosmic rounded-xl p-8 text-center">
              <div className="text-4xl font-display font-bold text-white mb-2">∞</div>
              <p className="text-white/80 font-heading">
                Infinite possibilities for those who dare to dream
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 bg-surface/50 rounded-xl p-8">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Our Values
              </h3>
              <ul className="space-y-3 text-muted font-body">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-void-primary rounded-full mr-3"></div>
                  Quality over quantity, always
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-void-primary rounded-full mr-3"></div>
                  Sustainability in every decision
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-void-primary rounded-full mr-3"></div>
                  Authentic self-expression
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-void-primary rounded-full mr-3"></div>
                  Community over competition
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Why We Create
              </h2>
              <p className="text-muted font-body leading-relaxed mb-4">
                Fashion has the power to transform not just how we look, but how we feel and who we become. 
                We design for the moments when you need to feel invincible, when you're stepping into the unknown.
              </p>
              <p className="text-muted font-body leading-relaxed">
                Our pieces are armor for the soul, uniforms for the unconventional, 
                and talismans for those brave enough to create their own path.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-cosmic rounded-xl p-12 text-white">
          <h2 className="text-3xl font-display font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl font-heading leading-relaxed max-w-3xl mx-auto">
            To empower the fearless, inspire the dreamers, and create a community of outlaws 
            who choose authenticity over acceptance. We're not just making clothes—we're 
            crafting identities for the cosmic rebels of tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}