"use client";

import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Eye,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Bar Units: The Art of Entertaining",
    description:
      "Discover how bespoke bar units transform evenings into curated experiences of refined hosting.",
    excerpt:
      "Soft-lit storage solutions crafted for intimate gatherings where every detail contributes to the ambiance...",
    image: "/bar-unit.jpg",
    date: "Mar 15, 2024",
    readTime: "5 min",
    category: "Entertainment",
    views: "2.4k",
    featured: true,
    gradient: "from-amber-500/10 to-amber-100",
  },
  {
    id: 2,
    title: "Vanity: Spa-Like Serenity",
    description:
      "Elevate daily rituals with moisture-safe elegance designed for tranquil mornings.",
    excerpt:
      "Transform your bathroom into a personal sanctuary with vanity designs that blend functionality...",
    image: "/vanity.jpg",
    date: "Mar 10, 2024",
    readTime: "4 min",
    category: "Wellness",
    views: "1.8k",
    featured: false,
    gradient: "from-blue-500/10 to-blue-100",
  },
  {
    id: 3,
    title: "Bed Design: Sanctuary of Sleep",
    description:
      "Grounded comfort inspired by slow living principles for optimal rest and rejuvenation.",
    excerpt:
      "The bedroom is more than a place to sleep—it's a sanctuary. Discover how thoughtful design...",
    image: "/bed.jpg",
    date: "Mar 5, 2024",
    readTime: "6 min",
    category: "Wellness",
    views: "3.2k",
    featured: true,
    gradient: "from-violet-500/10 to-violet-100",
  },
  {
    id: 4,
    title: "TV Units: Minimalist Harmony",
    description:
      "Clean profiles that allow your living space to breathe while maintaining sophisticated style.",
    excerpt:
      "In the age of minimalist living, entertainment units should complement rather than dominate...",
    image: "/tv-unit.jpg",
    date: "Feb 28, 2024",
    readTime: "3 min",
    category: "Living Spaces",
    views: "1.5k",
    featured: false,
    gradient: "from-emerald-500/10 to-emerald-100",
  },
  {
    id: 5,
    title: "Home Temples: Spiritual Design",
    description:
      "Subtle spirituality woven into modern homes through restrained, warm design principles.",
    excerpt:
      "Creating spaces for spiritual practice requires a delicate balance of reverence and integration...",
    image: "/temple.jpg",
    date: "Feb 20, 2024",
    readTime: "5 min",
    category: "Spiritual",
    views: "2.1k",
    featured: false,
    gradient: "from-rose-500/10 to-rose-100",
  },
  {
    id: 6,
    title: "Modular Innovation 2024",
    description:
      "The future of smart storage that adapts to evolving lifestyles with intelligent design.",
    excerpt:
      "As urban living spaces shrink, modular solutions become increasingly sophisticated...",
    image: "/storage.jpg",
    date: "Feb 15, 2024",
    readTime: "4 min",
    category: "Innovation",
    views: "2.7k",
    featured: true,
    gradient: "from-indigo-500/10 to-indigo-100",
  },
  {
    id: 7,
    title: "Bar Units: The Art of Entertaining",
    description:
      "Discover how bespoke bar units transform evenings into curated experiences of refined hosting.",
    excerpt:
      "Soft-lit storage solutions crafted for intimate gatherings where every detail contributes to the ambiance...",
    image: "/bar-unit.jpg",
    date: "Mar 15, 2024",
    readTime: "5 min",
    category: "Entertainment",
    views: "2.4k",
    featured: true,
    gradient: "from-amber-500/10 to-amber-100",
  },
  {
    id: 8,
    title: "Bar Units: The Art of Entertaining",
    description:
      "Discover how bespoke bar units transform evenings into curated experiences of refined hosting.",
    excerpt:
      "Soft-lit storage solutions crafted for intimate gatherings where every detail contributes to the ambiance...",
    image: "/bar-unit.jpg",
    date: "Mar 15, 2024",
    readTime: "5 min",
    category: "Entertainment",
    views: "2.4k",
    featured: true,
    gradient: "from-amber-500/10 to-amber-100",
  },
  {
    id: 9,
    title: "Bar Units: The Art of Entertaining",
    description:
      "Discover how bespoke bar units transform evenings into curated experiences of refined hosting.",
    excerpt:
      "Soft-lit storage solutions crafted for intimate gatherings where every detail contributes to the ambiance...",
    image: "/bar-unit.jpg",
    date: "Mar 15, 2024",
    readTime: "5 min",
    category: "Entertainment",
    views: "2.4k",
    featured: true,
    gradient: "from-amber-500/10 to-amber-100",
  },
  {
    id: 10,
    title: "Bar Units: The Art of Entertaining",
    description:
      "Discover how bespoke bar units transform evenings into curated experiences of refined hosting.",
    excerpt:
      "Soft-lit storage solutions crafted for intimate gatherings where every detail contributes to the ambiance...",
    image: "/bar-unit.jpg",
    date: "Mar 15, 2024",
    readTime: "5 min",
    category: "Entertainment",
    views: "2.4k",
    featured: true,
    gradient: "from-amber-500/10 to-amber-100",
  },
];

export function BlogsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerView = 3; // Number of items visible at once
  const cardWidth = 384; // w-96 in pixels (384px)

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.max(0, prev - 1);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = filteredPosts.length - itemsPerView;
      const newIndex = Math.min(maxIndex, prev + 1);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * (cardWidth + 32); // card width + gap
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle drag for touch devices
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle scroll event to update current index
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth + 32));
      setCurrentIndex(newIndex);
    }
  };

  // Auto-scroll for infinite carousel effect (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= filteredPosts.length - itemsPerView) {
        setCurrentIndex(0);
        scrollToIndex(0);
      } else {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, filteredPosts.length]);

  return (
    <section
      id="blogs"
      className="relative py-24 bg-gradient-to-b from-white via-primary-50/5 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 text-primary-800 mb-8">
            <Sparkles className="h-5 w-5 text-gold-500 animate-pulse" />
            <span className="text-sm font-medium tracking-widest uppercase">
              DESIGN JOURNAL
            </span>
            <Sparkles className="h-5 w-5 text-gold-500 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            Design{" "}
            <span className="font-serif italic text-primary-800">Insights</span>
          </h2>

          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Explore curated perspectives on interior design and meaningful spaces
          </p>
        </div>

        {/* Categories */}
        <div className=" hidden md:flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Wellness", "Entertainment", "Living Spaces", "Innovation", "Spiritual"].map(
            (category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentIndex(0);
                  scrollToIndex(0);
                }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                  ? "bg-primary-800 text-white shadow-lg shadow-primary-800/30"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:bg-primary-50/30"
                  }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl shadow-black/10 border border-gray-200 hover:bg-white hover:border-primary-300 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6 text-primary-800" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= filteredPosts.length - itemsPerView}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl shadow-black/10 border border-gray-200 hover:bg-white hover:border-primary-300 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6 text-primary-800" />
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth gap-8 pb-12"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
          >
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="flex-none w-full md:w-96 transform transition-all duration-500 hover:-translate-y-2"
              >
                <article className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium text-primary-800 border border-primary-200">
                        <TrendingUp className="h-3 w-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-sm px-4 py-2 text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        {post.views}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-primary-800 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Excerpt */}
                    <div className="mb-8">
                      <p className="text-gray-500 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/blogs/${post.id}`}
                      className="group/btn inline-flex items-center gap-3 text-primary-800 font-medium hover:gap-4 transition-all"
                    >
                      <span className="relative">
                        Read Full Article
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-800 to-gold-500 transition-all group-hover/btn:w-full" />
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-800/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </article>
              </div>
            ))}
          </div>

          {/* Scroll Indicators (Dots) */}
          {filteredPosts.length > itemsPerView && (
            <div className="flex justify-center items-center gap-3 mt-8">
              {Array.from(
                { length: filteredPosts.length - itemsPerView + 1 },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      scrollToIndex(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex
                      ? "w-8 bg-gradient-to-r from-primary-800 to-gold-500"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                )
              )}
            </div>
          )}

          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-center items-center gap-8 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-primary-800" />
            </button>
            <span className="text-sm text-gray-600">
              {currentIndex + 1} / {Math.max(1, filteredPosts.length - itemsPerView + 1)}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex >= filteredPosts.length - itemsPerView}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="h-6 w-6 text-primary-800" />
            </button>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-primary-800 px-8 py-4 text-primary-800 font-medium hover:bg-primary-800 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All Articles</span>
            <BookOpen className="h-5 w-5 transition-transform group-hover:rotate-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}