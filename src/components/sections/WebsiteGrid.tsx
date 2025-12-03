"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Bookmark, ExternalLink } from "lucide-react";

interface Website {
  id: string;
  title: string;
  description: string;
  href: string;
  faviconUrl: string;
  category?: string;
  video: {
    webm: string;
    mp4: string;
  };
}

interface WebsiteGridProps {
  items: Website[];
  onItemClick?: (id: string) => void;
}

export default function WebsiteGrid({ items, onItemClick }: WebsiteGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-6">
      {items.map((item) => (
        <WebsiteCard key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
}

function WebsiteCard({ item, onClick }: { item: Website; onClick?: (id: string) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.(item.id);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleExternalLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(item.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group">
      {/* Card Preview - Just the image/video */}
      <motion.button
        onClick={handleClick}
        className="w-full block rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-200 border border-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="relative w-full aspect-[4/3] bg-gray-900 overflow-hidden">
          {!videoError ? (
            <video
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay={isHovered}
              onError={() => setVideoError(true)}
            >
              <source src={item.video.webm} type="video/webm" />
              <source src={item.video.mp4} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <img
                src={item.faviconUrl}
                alt={item.title}
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>
      </motion.button>

      {/* Title and Actions Row */}
      <div className="flex items-center justify-between mt-4 gap-3">
        <button 
          onClick={handleClick}
          className="flex items-center gap-2 text-left flex-1 min-w-0"
        >
          <h3 className="text-black truncate">
            {item.title}
          </h3>
          {item.category && (
            <>
              <span className="text-gray-400">·</span>
              <span className="text-gray-400 text-sm truncate">
                {item.category}
              </span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2 flex-shrink-0">
          <motion.button
            onClick={handleBookmark}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <Bookmark 
              className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
            />
          </motion.button>
          <motion.button
            onClick={handleExternalLink}
            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Open in new tab"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}