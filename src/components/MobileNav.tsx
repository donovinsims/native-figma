"use client";

import React from "react";
import { X, Menu } from "lucide-react";
import {
  Sparkles,
  Building2,
  BrainCircuit,
  Bitcoin,
  Palette,
  Cuboid,
  Code,
  ShoppingCart,
  Landmark,
  HardDrive,
  Megaphone,
  UserSquare,
  ListChecks,
  Users,
} from "lucide-react";

interface MobileNavTriggerProps {
  onClick: () => void;
}

export function MobileNavTrigger({ onClick }: MobileNavTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
      aria-label="Open menu"
    >
      <Menu className="w-5 h-5" />
    </button>
  );
}

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
}

const categories = [
  { href: "/", icon: Sparkles, text: "All" },
  { href: "/category/agency", icon: Building2, text: "Agency" },
  { href: "/category/ai", icon: BrainCircuit, text: "AI" },
  { href: "/category/crypto", icon: Bitcoin, text: "Crypto" },
  { href: "/category/design", icon: Palette, text: "Design" },
  { href: "/category/design-tools", icon: Cuboid, text: "Design Tools" },
  { href: "/category/developer-tools", icon: Code, text: "Developer Tools" },
  { href: "/category/e-commerce", icon: ShoppingCart, text: "E-Commerce" },
  { href: "/category/fintech", icon: Landmark, text: "Fintech" },
  { href: "/category/hardware", icon: HardDrive, text: "Hardware" },
  { href: "/category/marketing", icon: Megaphone, text: "Marketing" },
  { href: "/category/portfolios", icon: UserSquare, text: "Portfolios" },
  { href: "/category/productivity", icon: ListChecks, text: "Productivity" },
  { href: "/category/social", icon: Users, text: "Social" },
];

export function MobileNavOverlay({
  isOpen,
  onClose,
  onSubscribeClick,
  onSubmitClick,
}: MobileNavOverlayProps) {
  if (!isOpen) return null;

  const handleSubscribe = () => {
    onClose();
    onSubscribeClick?.();
  };

  const handleSubmit = () => {
    onClose();
    onSubmitClick?.();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 h-[67px]">
          <span className="uppercase">Menu</span>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-67px)] overflow-y-auto">
          <div className="flex-1 px-4 py-6">
            {/* Categories */}
            <div className="space-y-1">
              {categories.map((category, index) => (
                <a
                  key={category.text}
                  href={category.href}
                  onClick={onClose}
                  className="w-full flex gap-3 items-center px-3 py-3 rounded-lg text-black hover:bg-gray-100 transition-colors"
                >
                  <category.icon
                    className={`w-[14px] h-[14px] ${
                      index === 0 ? "text-black" : "text-gray-300"
                    }`}
                  />
                  <span className="text-sm">{category.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-100 p-4 space-y-2">
            <button
              onClick={handleSubmit}
              className="w-full min-h-[44px] flex items-center justify-center px-6 py-3 bg-[#fafafa] text-black rounded-xl border border-[#d1d1d1] hover:bg-gray-50 transition-colors text-sm"
            >
              Submit App
            </button>
            <button
              onClick={handleSubscribe}
              className="w-full min-h-[44px] flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors text-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
