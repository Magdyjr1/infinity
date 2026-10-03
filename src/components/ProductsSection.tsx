import React, { useState, useMemo } from 'react';
import { Search, X, Check, ArrowRight, ArrowLeft, ArrowUpRight, MessageCircle, Phone, Package, Filter, ShieldCheck } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../data/infinityData';
import { SafeImage } from './SafeImage';

type CategoryType = 'All' | 'Mechanical Anchors' | 'Nylon Plugs' | 'Chemical Anchoring' | 'Fire Fighting Supports' | 'Threaded Hardware';

interface ProductsSectionProps {
  previewMode?: boolean;
  onNavigate?: (page: 'home' | 'products' | 'projects' | 'certificates') => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  previewMode = false,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories: { label: CategoryType; count: number }[] = [
    { label: 'All', count: PRODUCTS_DATA.length },
    { label: 'Mechanical Anchors', count: PRODUCTS_DATA.filter((p) => p.category === 'Mechanical Anchors').length },
    { label: 'Nylon Plugs', count: PRODUCTS_DATA.filter((p) => p.category === 'Nylon Plugs').length },
    { label: 'Chemical Anchoring', count: PRODUCTS_DATA.filter((p) => p.category === 'Chemical Anchoring').length },
    { label: 'Fire Fighting Supports', count: PRODUCTS_DATA.filter((p) => p.category === 'Fire Fighting Supports').length },
    { label: 'Threaded Hardware', count: PRODUCTS_DATA.filter((p) => p.category === 'Threaded Hardware').length },
  ];

  // In preview mode: strictly show 4 representative flagship items (Pictures 14 to 17)
  const displayProducts = useMemo(() => {
    if (previewMode) {
      return PRODUCTS_DATA.slice(0, 4);
    }

    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        (product.specifications.standard && product.specifications.standard.toLowerCase().includes(q)) ||
        (product.specifications.material && product.specifications.material.toLowerCase().includes(q)) ||
        (product.specifications.sizeRange && product.specifications.sizeRange.toLowerCase().includes(q)) ||
        `img ${product.imageNumber}`.includes(q) ||
        `${product.imageNumber}.jpg`.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [previewMode, activeCategory, searchQuery]);

  const getWhatsAppProductUrl = (item: ProductItem) => {
    const text = `Hello INFINITY team, I am inquiring about product: ${item.name} (Picture ${item.imageNumber}.jpg - ${item.category}). Please provide technical specs and pricing.`;
    return `https://wa.me/201000100869?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="products"
      className={`bg-white border-b border-slate-100 ${
        previewMode ? 'py-16 lg:py-24' : 'pt-28 pb-20 lg:pt-32 lg:pb-28'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subpage Breadcrumb Navigation when not in preview mode */}
        {!previewMode && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <button
                onClick={() => onNavigate?.('home')}
                className="hover:text-[#002D54] font-medium flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <span>/</span>
              <span className="font-semibold text-[#002D54]">Products Catalog</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-mono text-[10px]">
                36 Items
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate?.('projects')}
                className="text-xs text-slate-600 hover:text-[#002D54] px-2.5 py-1 rounded bg-slate-50 border border-slate-200 cursor-pointer"
              >
                View Projects (20) →
              </button>
              <button
                onClick={() => onNavigate?.('certificates')}
                className="text-xs text-slate-600 hover:text-[#002D54] px-2.5 py-1 rounded bg-slate-50 border border-slate-200 cursor-pointer"
              >
                View Certificates (11) →
              </button>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#002D54] uppercase">
                {previewMode ? 'Product Portfolio' : 'Industrial Catalog • Images 14 to 49'}
              </span>
              <span className="bg-sky-100 text-[#002D54] text-[10px] font-bold px-2 py-0.5 rounded-full">
                {previewMode ? 'Featured Products' : 'All 36 Products'}
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#002D54] tracking-tight">
              {previewMode ? 'Fixing Solutions' : 'Complete Products Catalog'}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {previewMode
                ? 'A representative sample of our certified heavy-duty anchoring systems and fixation hardware engineered for mega construction in Egypt.'
                : 'Complete range of heavy-duty mechanical anchors, chemical anchoring systems, nylon plugs, threaded fasteners, and UL/FM fire fighting pipe supports.'}
            </p>
          </div>

          {previewMode ? (
            <button
              onClick={() => onNavigate?.('products')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002D54] hover:bg-[#00172e] text-white text-xs font-semibold rounded-xs shadow-sm transition-all cursor-pointer group self-start md:self-auto"
            >
              <span>View All 36 Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 border border-slate-200 rounded-xs self-start md:self-auto">
              Showing <span className="font-bold text-[#002D54]">{displayProducts.length}</span> of 36 Products
            </div>
          )}
        </div>

        {/* Search & Category Filter (Subpage Mode) */}
        {!previewMode && (
          <div className="bg-slate-50 p-4 border border-slate-200 rounded-sm mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Instant Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by product name, DIN standard, size..."
                  className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xs text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#002D54]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Quick Helper */}
              <div className="text-xs text-slate-500 hidden sm:block">
                Click any product to view full technical sheet & WhatsApp inquiry
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xs whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat.label
                      ? 'bg-[#002D54] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 text-[10px] font-mono ${activeCategory === cat.label ? 'text-white/80' : 'text-slate-400'}`}>
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid: 4 items on Home, full grid on Subpage */}
        {displayProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-sm">
            <p className="text-slate-500 text-sm font-medium">No products found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#002D54] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {displayProducts.map((product) => (
              <div
                key={product.imageNumber}
                onClick={() => setSelectedProduct(product)}
                className="group bg-white border border-slate-200 hover:border-[#002D54] transition-all rounded-sm flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-md"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                    <SafeImage
                      imageNumber={product.imageNumber}
                      alt={product.name}
                      category={product.category}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Image Number Label */}
                    <span className="absolute top-2 left-2 text-[10px] font-mono font-medium px-2 py-0.5 bg-white/90 border border-slate-200 text-slate-700 rounded-xs">
                      #{product.imageNumber}
                    </span>

                    {/* Quick Category badge */}
                    <span className="absolute top-2 right-2 text-[10px] font-medium px-2 py-0.5 bg-[#002D54]/10 text-[#002D54] rounded-xs">
                      {product.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#002D54] transition-colors line-clamp-2 min-h-[2.75rem]">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Technical Specs Summary */}
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                      {product.specifications.standard && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Standard:</span>
                          <span className="font-mono font-semibold text-slate-800">{product.specifications.standard}</span>
                        </div>
                      )}
                      {product.specifications.sizeRange && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Sizes:</span>
                          <span className="font-mono text-slate-800">{product.specifications.sizeRange}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-4 pb-4 pt-1 flex items-center justify-between gap-2 border-t border-slate-100/60 bg-slate-50/50">
                  <span className="text-[11px] font-medium text-[#002D54] group-hover:underline flex items-center gap-1">
                    <span>Specifications</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>

                  <a
                    href={getWhatsAppProductUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-xs border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Preview Mode Bottom CTA banner */}
        {previewMode && (
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                Looking for Specific Anchors, Hangers, or Chemical Systems?
              </h3>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Browse our complete catalog of 36 products (Images 14 to 49) categorized across Mechanical Anchors, Nylon Plugs, Chemical Fixing, and Fire Fighting Supports.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.('products')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002D54] hover:bg-[#00172e] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-sm transition-all whitespace-nowrap cursor-pointer group"
            >
              <span>Explore All 36 Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Subpage Mode Bottom Navigation */}
        {!previewMode && (
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onNavigate?.('home')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#002D54] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate?.('projects')}
                className="text-xs font-semibold text-[#002D54] hover:underline cursor-pointer"
              >
                Next: View Mega Projects (20) →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Technical Specification Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-sm max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-5 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Picture #{selectedProduct.imageNumber} • {selectedProduct.category}
                </span>
                <h3 className="font-heading font-black text-xl text-[#002D54]">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xs hover:bg-slate-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Product Image */}
              <div className="aspect-[16/9] bg-slate-50 border border-slate-200 rounded-xs p-4 flex items-center justify-center">
                <SafeImage
                  imageNumber={selectedProduct.imageNumber}
                  alt={selectedProduct.name}
                  category={selectedProduct.category}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Description & Application
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProduct.description}
                </p>
                {selectedProduct.specifications.applications && (
                  <p className="text-xs text-slate-500 mt-2">
                    <strong className="text-slate-700">Suitable for:</strong> {selectedProduct.specifications.applications}
                  </p>
                )}
              </div>

              {/* Specs Grid */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#002D54] mb-3">
                  Technical Specifications
                </h4>
                <dl className="grid grid-cols-2 gap-3 text-xs">
                  {selectedProduct.specifications.standard && (
                    <div>
                      <dt className="text-slate-400">Standard / Norm:</dt>
                      <dd className="font-mono font-semibold text-slate-800">{selectedProduct.specifications.standard}</dd>
                    </div>
                  )}
                  {selectedProduct.specifications.material && (
                    <div>
                      <dt className="text-slate-400">Material:</dt>
                      <dd className="font-medium text-slate-800">{selectedProduct.specifications.material}</dd>
                    </div>
                  )}
                  {selectedProduct.specifications.coating && (
                    <div>
                      <dt className="text-slate-400">Coating / Protection:</dt>
                      <dd className="font-medium text-slate-800">{selectedProduct.specifications.coating}</dd>
                    </div>
                  )}
                  {selectedProduct.specifications.sizeRange && (
                    <div>
                      <dt className="text-slate-400">Size Range:</dt>
                      <dd className="font-mono font-semibold text-slate-800">{selectedProduct.specifications.sizeRange}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Approvals */}
              {selectedProduct.specifications.approvals && selectedProduct.specifications.approvals.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Certifications & Approvals
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.specifications.approvals.map((appr) => (
                      <span
                        key={appr}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-sky-50 text-[#002D54] border border-sky-200 rounded-xs text-xs font-semibold"
                      >
                        <Check className="w-3 h-3 text-sky-600" />
                        {appr}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer: Direct WhatsApp / Call */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Technical submittals available upon request.
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:+201000100869`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xs hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={getWhatsAppProductUrl(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
