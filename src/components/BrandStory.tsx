export function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Decorative Element */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-void-primary to-transparent w-24"></div>
            <div className="mx-4 w-2 h-2 bg-void-primary rounded-full animate-cosmic-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-void-primary to-transparent w-24"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6">
            Built for the Outlaws of Tomorrow
          </h2>
          
          <p className="text-lg text-muted font-heading leading-relaxed">
            The Void exists in the space between conformity and rebellion. We craft premium pieces 
            for those who refuse to blend in, who choose to walk their own path through the cosmic 
            unknown. Every thread is woven with intention, every design speaks to the fearless.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-void-primary mb-1">100%</div>
            <div className="text-sm text-muted font-heading">Premium Cotton</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-void-primary mb-1">LIMITED</div>
            <div className="text-sm text-muted font-heading">Edition Drops</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-void-primary mb-1">COSMIC</div>
            <div className="text-sm text-muted font-heading">Inspired Design</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-void-primary mb-1">OUTLAW</div>
            <div className="text-sm text-muted font-heading">Mentality</div>
          </div>
        </div>
      </div>
    </section>
  );
}