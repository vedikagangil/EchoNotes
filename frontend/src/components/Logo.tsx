import React from "react";
import Image from "next/image";

interface LogoProps {
    isCollapsed: boolean;
}

const Logo = React.forwardRef<HTMLButtonElement, LogoProps>(({ isCollapsed }, ref) => {
  return (
    <>
      {isCollapsed ? (
        <button 
          ref={ref} 
          className="flex items-center justify-start mb-2 cursor-pointer bg-transparent border-none p-0 hover:opacity-80 transition-opacity"
          onClick={() => {
            // This does nothing when clicked - no popup will appear
            console.log("Logo clicked - popup disabled");
          }}
        >
          <Image src="/logo-collapsed.png" alt="EchoNotes Logo" width={40} height={32} />
        </button>
      ) : (
        <span className="text-lg text-center border rounded-full bg-blue-50 border-white font-semibold text-gray-700 mb-2 block items-center cursor-pointer hover:opacity-80 transition-opacity">
          <span>EchoNotes</span>
        </span>
      )}
    </>
  );
});

Logo.displayName = "Logo";

export default Logo;