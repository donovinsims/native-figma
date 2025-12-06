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
    <div className="flex flex-col gap-2">
      {/* Card Preview */}
      <motion.button
        onClick={handleClick}
        className="relative w-full block overflow-hidden hover:opacity-90 transition-opacity duration-200"
        style={{
          background: 'black',
          borderRadius: '6px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="relative w-full aspect-[333/225]">
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
          {/* Border overlay */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-lg border border-gray-200"
          />
        </div>
      </motion.button>

      {/* Actions - Name, Category, Bookmark, and External Link */}
      <div className="flex items-center justify-between">
        {/* Name & Category */}
        <button 
          onClick={handleClick}
          className="flex items-center gap-1 text-left flex-1 min-w-0"
        >
          <div style={{
            color: '#151515',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px'
          }}>
            {item.title}
          </div>
          {item.category && (
            <>
              <div style={{
                opacity: 0.5,
                color: '#151515',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '16px'
              }}>
                ·
              </div>
              <div style={{
                opacity: 0.5,
                color: '#151515',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '16px'
              }} className="truncate">
                {item.category}
              </div>
            </>
          )}
        </button>

        {/* Bookmark and External Icons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Bookmark Icon */}
          <motion.button
            onClick={handleBookmark}
            className="w-6 h-6 flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
            style={{ opacity: 0.5 }}
          >
            <Bookmark 
              className={`w-4 h-4 text-black ${isBookmarked ? "fill-current" : ""}`}
            />
          </motion.button>

          {/* External Link Icon */}
          <motion.button
            onClick={handleExternalLink}
            className="w-6 h-6 flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Open in new tab"
            style={{ opacity: 0.5 }}
          >
            <ExternalLink className="w-4 h-4 text-black" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}