"use client";

import { useState, useEffect } from "react";
import { useModal } from "./hooks/useModal";
import HeaderNavigation from "./components/sections/HeaderNavigation";
import SidebarNavigation from "./components/sections/SidebarNavigation";
import HeroHeader from "./components/sections/HeroHeader";
import WebsiteGrid from "./components/sections/WebsiteGrid";
import AppDetailPage from "./components/app-detail/AppDetailPage";
import AppDetailBottomSheet from "./components/app-detail/AppDetailBottomSheet";
import { SubscribeModal } from "./components/modals/SubscribeModal";
import { SubmitAppModal } from "./components/modals/SubmitAppModal";
import { LoginModal } from "./components/modals/LoginModal";
import { SignupModal } from "./components/modals/SignupModal";
import { Toaster } from "./components/ui/sonner";
import { websitesData, appDetailsData } from "./data/appsData";

export default function App() {
  const subscribeModal = useModal();
  const submitModal = useModal();
  const loginModal = useModal();
  const signupModal = useModal();
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAppClick = (appId: string) => {
    setSelectedAppId(appId);
    if (!isMobile) {
      // Scroll to top only on desktop
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToList = () => {
    setSelectedAppId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseBottomSheet = () => {
    setSelectedAppId(null);
  };

  // Get the selected app details
  const selectedApp = selectedAppId ? appDetailsData[selectedAppId] : null;

  // Show detail page on desktop if an app is selected
  if (selectedApp && !isMobile) {
    return (
      <>
        <AppDetailPage 
          app={selectedApp} 
          onBack={handleBackToList}
          onNavigateToApp={handleAppClick}
          onSubscribeClick={subscribeModal.open}
          onSubmitClick={submitModal.open}
        />
        <SubscribeModal isOpen={subscribeModal.isOpen} onClose={subscribeModal.close} />
        <SubmitAppModal isOpen={submitModal.isOpen} onClose={submitModal.close} />
        <LoginModal 
          isOpen={loginModal.isOpen} 
          onClose={loginModal.close}
          onSwitchToSignup={signupModal.open}
        />
        <SignupModal 
          isOpen={signupModal.isOpen} 
          onClose={signupModal.close}
          onSwitchToLogin={loginModal.open}
        />
        <Toaster position="bottom-center" />
      </>
    );
  }

  // Show main list view with bottom sheet on mobile
  return (
    <div className="relative min-h-screen bg-white">
      <HeaderNavigation 
        onSubscribeClick={subscribeModal.open}
        onSubmitClick={submitModal.open}
        onLoginClick={loginModal.open}
      />
      
      <div className="flex pt-[67px]">
        <SidebarNavigation onSubmitClick={submitModal.open} />
        
        <main className="flex-1 sm:ml-[250px]">
          <div className="mx-auto px-3 sm:px-5 py-4 sm:py-8">
            <HeroHeader onSubscribeClick={subscribeModal.open} />
            
            <WebsiteGrid items={websitesData} onItemClick={handleAppClick} />
          </div>
        </main>
      </div>

      {/* Modals */}
      <SubscribeModal isOpen={subscribeModal.isOpen} onClose={subscribeModal.close} />
      <SubmitAppModal isOpen={submitModal.isOpen} onClose={submitModal.close} />
      <LoginModal 
        isOpen={loginModal.isOpen} 
        onClose={loginModal.close}
        onSwitchToSignup={signupModal.open}
      />
      <SignupModal 
        isOpen={signupModal.isOpen} 
        onClose={signupModal.close}
        onSwitchToLogin={loginModal.open}
      />
      
      {/* Bottom Sheet for Mobile */}
      <AppDetailBottomSheet
        app={selectedApp}
        isOpen={!!selectedApp && isMobile}
        onClose={handleCloseBottomSheet}
        onNavigateToApp={handleAppClick}
      />
      
      {/* Toast notifications */}
      <Toaster position="bottom-center" />
    </div>
  );
}