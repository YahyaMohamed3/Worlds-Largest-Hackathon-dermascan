import { cn } from "../../lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-secondary-400', className)}
    >
      <rect width="32" height="32" rx="8" fill="currentColor"/>
      <path d="M10.5 17.5C10.5 18.8807 9.38071 20 8 20C6.61929 20 5.5 18.8807 5.5 17.5C5.5 16.1193 6.61929 15 8 15C9.38071 15 10.5 16.1193 10.5 17.5Z" fill="white"/>
      <path d="M18.5 17.5C18.5 18.8807 17.3807 20 16 20C14.6193 20 13.5 18.8807 13.5 17.5C13.5 16.1193 14.6193 15 16 15C17.3807 15 18.5 16.1193 18.5 17.5Z" fill="white"/>
      <path d="M26.5 17.5C26.5 18.8807 25.3807 20 24 20C22.6193 20 21.5 18.8807 21.5 17.5C21.5 16.1193 22.6193 15 24 15C25.3807 15 26.5 16.1193 26.5 17.5Z" fill="white"/>
      <path d="M9 12.5C9 13.8807 7.88071 15 6.5 15C5.11929 15 4 13.8807 4 12.5C4 11.1193 5.11929 10 6.5 10C7.88071 10 9 11.1193 9 12.5Z" fill="white"/>
      <path d="M28 12.5C28 13.8807 26.8807 15 25.5 15C24.1193 15 23 13.8807 23 12.5C23 11.1193 24.1193 10 25.5 10C26.8807 10 28 11.1193 28 12.5Z" fill="white"/>
      <path d="M22 9.5C22 10.8807 20.8807 12 19.5 12C18.1193 12 17 10.8807 17 9.5C17 8.11929 18.1193 7 19.5 7C20.8807 7 22 8.11929 22 9.5Z" fill="white"/>
      <path d="M15 9.5C15 10.8807 13.8807 12 12.5 12C11.1193 12 10 10.8807 10 9.5C10 8.11929 11.1193 7 12.5 7C13.8807 7 15 8.11929 15 9.5Z" fill="white"/>
      
      {/* Add subtle glow effect */}
      <circle cx="16" cy="16" r="14" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
    </svg>
  );
}