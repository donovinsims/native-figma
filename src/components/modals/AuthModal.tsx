"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handlePhone = () => {
    toast.success("Phone authentication coming soon!");
  };

  const handleEmail = () => {
    toast.success("Email authentication coming soon!");
  };

  const handleGoogle = () => {
    toast.success("Google authentication coming soon!");
  };

  const handleTwitter = () => {
    toast.success("Twitter authentication coming soon!");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-[420px] overflow-hidden relative"
            >
              <div className="relative p-8">
                {/* Sparkle Icon */}
                <div className="absolute top-8 left-8">
                  <Sparkles className="w-8 h-8 text-gray-900" fill="currentColor" />
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>

                {/* Content */}
                <div className="mt-12">
                  <h2 className="text-3xl text-black mb-3">
                    Get Started
                  </h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    Register for events, subscribe to calendars and manage events you're going to.
                  </p>

                  {/* Primary CTA - Phone */}
                  <button
                    onClick={handlePhone}
                    className="w-full py-4 rounded-2xl bg-black text-white hover:bg-gray-800 transition-colors mb-3"
                  >
                    Continue with Phone
                  </button>

                  {/* Secondary CTA - Email */}
                  <button
                    onClick={handleEmail}
                    className="w-full py-4 rounded-2xl bg-gray-100 text-black hover:bg-gray-200 transition-colors mb-4"
                  >
                    Continue with Email
                  </button>

                  {/* Social Login Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Twitter Button */}
                    <button
                      onClick={handleTwitter}
                      className="flex items-center justify-center py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>

                    {/* Google Button */}
                    <button
                      onClick={handleGoogle}
                      className="flex items-center justify-center py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
