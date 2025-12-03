"use client";

import React, { useState } from "react";
import { Share2, ExternalLink, Bookmark, Check } from "lucide-react";
import { toast } from "sonner@2.0.3";
import HeaderNavigation from "../sections/HeaderNavigation";

interface AppDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  platforms: string[];
  pricing: string;
  developer: string;
  lastUpdated: string;
  websiteUrl: string;
  faviconUrl: string;
  previewImage: string;
  about: string;
  features: string[];
  relatedApps?: RelatedApp[];
}

interface RelatedApp {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  href: string;
}

interface AppDetailPageProps {
  app: AppDetail;
  onBack: () => void;
  onNavigateToApp?: (appId: string) => void;
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
}

export default function AppDetailPage({ app, onBack, onNavigateToApp, onSubscribeClick, onSubmitClick }: AppDetailPageProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? "Removed from bookmarks" : "Added to bookmarks");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: app.title,
          text: app.description,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      // Fallback to copying link
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderNavigation 
        onSubscribeClick={onSubscribeClick}
        onSubmitClick={onSubmitClick}
      />

      {/* Main Content */}
      <main className="pt-[67px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          {/* Breadcrumbs & Share */}
          <div className="flex items-center justify-between mb-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <button onClick={onBack} className="hover:text-gray-900 transition-colors">
                Home
              </button>
              <span>›</span>
              <button onClick={onBack} className="hover:text-gray-900 transition-colors">
                {app.category}
              </button>
              <span>›</span>
              <span className="text-gray-900">{app.title}</span>
            </nav>
            <button
              onClick={handleShare}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5 text-gray-900" />
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Left Column - Preview & Content */}
            <div className="space-y-8">
              {/* Preview Image */}
              <div className="relative w-full aspect-[16/10] bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={app.previewImage}
                  alt={app.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = app.faviconUrl;
                    e.currentTarget.className = "w-full h-full object-contain p-16";
                  }}
                />
              </div>

              {/* About Section */}
              <section>
                <h2 className="text-2xl text-black mb-4">
                  About {app.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {app.about}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  This is a demo description for {app.title}. It represents the kind of content you would find on the detail page. Ideally this would come from a database or CMS.
                </p>
              </section>

              {/* Key Features */}
              {app.features && app.features.length > 0 && (
                <section>
                  <h2 className="text-2xl text-black mb-6">
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Related Apps */}
              {app.relatedApps && app.relatedApps.length > 0 && (
                <section className="pb-12">
                  <h2 className="text-2xl text-black mb-6">
                    Related Apps
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {app.relatedApps.map((relatedApp) => (
                      <button
                        key={relatedApp.id}
                        onClick={() => onNavigateToApp?.(relatedApp.id)}
                        className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-200 hover:shadow-md text-left"
                      >
                        <div className="relative w-full aspect-video bg-gray-100">
                          <img
                            src={relatedApp.previewImage}
                            alt={relatedApp.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-black mb-1">
                            {relatedApp.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {relatedApp.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:sticky lg:top-[91px] lg:self-start">
              <div className="space-y-4">
                {/* Title & Description */}
                <div>
                  <h1 className="text-4xl text-black mb-2 tracking-tight">
                    {app.title}
                  </h1>
                  <p className="text-gray-500">
                    {app.description}
                  </p>
                </div>

                {/* Visit Website Button */}
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-gray-300 bg-white text-black hover:bg-gray-50 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Bookmark Button */}
                <button
                  onClick={handleBookmark}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                >
                  <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                </button>

                {/* App Information Card */}
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h3 className="text-black mb-4">
                    App Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Category</span>
                      <span className="text-black text-sm">{app.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Platforms</span>
                      <span className="text-black text-sm">{app.platforms.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Pricing</span>
                      <span className="text-black text-sm">{app.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Last Updated</span>
                      <span className="text-black text-sm">{app.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}