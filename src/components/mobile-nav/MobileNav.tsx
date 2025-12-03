"use client";

import React, { useState } from "react";
import { X, Menu, Search, Paintbrush, Code, ListChecks, Shield, Zap, MessageSquare, Wrench, Sparkles, ArrowUpRight, Mail } from "lucide-react";

interface MobileNavTriggerProps {
  onClick: () => void;
}

export function MobileNavTrigger({ onClick }: MobileNavTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label="Open menu"
    >
      <Menu className="w-6 h-6 text-gray-900" />
    </button>
  );
}

interface Category {
  icon: React.ElementType;
  label: string;
  href: string;
}

const categories: Category[] = [
  { icon: Sparkles, label: "All", href: "/" },
  { icon: Paintbrush, label: "Design", href: "/category/design" },
  { icon: Code, label: "Development", href: "/category/development" },
  { icon: ListChecks, label: "Productivity", href: "/category/productivity" },
  { icon: Shield, label: "Security", href: "/category/security" },
  { icon: Zap, label: "Automation", href: "/category/automation" },
  { icon: MessageSquare, label: "Communication", href: "/category/communication" },
  { icon: Wrench, label: "Utilities", href: "/category/utilities" },
];

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
  onLoginClick?: () => void;
}

export function MobileNavOverlay({
  isOpen,
  onClose,
  onSubscribeClick,
  onSubmitClick,
  onLoginClick,
}: MobileNavOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  if (!isOpen) return null;

  const handleSubscribe = () => {
    onClose();
    onSubscribeClick?.();
  };

  const handleSubmit = () => {
    onClose();
    onSubmitClick?.();
  };

  const handleLogin = () => {
    onClose();
    onLoginClick?.();
  };

  const handleCategoryClick = (label: string) => {
    setActiveCategory(label);
    // In a real app, this would navigate to the category
    setTimeout(() => onClose(), 200);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute top-0 right-0 w-full max-w-lg h-full bg-white shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-[6px]">
            <span className="text-lg">SEE</span>
            <span className="text-lg">+</span>
            <span className="text-lg">SAW</span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for apps, categories..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            />
          </div>
        </div>

        {/* Sign In Button */}
        <div className="px-4 pb-3">
          <button 
            onClick={handleLogin}
            className="w-full py-3 rounded-lg border border-gray-300 bg-white text-black hover:bg-gray-50 transition-colors text-sm"
          >
            Sign in
          </button>
        </div>

        {/* Subscribe Button */}
        <div className="px-4 pb-4">
          <button
            onClick={handleSubscribe}
            className="w-full py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors text-sm"
          >
            Subscribe
          </button>
        </div>

        {/* Categories */}
        <div className="px-4 pb-4">
          <nav className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => handleCategoryClick(category.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeCategory === category.label
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="text-sm">{category.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Section */}
        <div className="px-4 pb-6 space-y-3 border-t border-gray-100 pt-6">
          {/* Sponsor Us */}
          <a
            href="https://tally.so/r/wLP5VG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <span className="text-sm text-gray-700">Sponsor us</span>
            <ArrowUpRight className="w-4 h-4 text-gray-400" />
          </a>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg border border-gray-300 bg-white text-black hover:bg-gray-50 transition-colors text-sm"
          >
            Submit
          </button>

          {/* Email */}
          <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50">
            <span className="text-sm text-gray-600">hi@seesaw.website</span>
            <Mail className="w-4 h-4 text-gray-400" />
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-400 pt-2">
            © 2025 SEESAW Studios
          </p>
        </div>
      </div>
    </div>
  );
}