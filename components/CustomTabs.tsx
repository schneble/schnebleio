// // CustomTabs.tsx
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const CustomTabs: React.FC<CustomTabsProps> = ({ projects, renderProjectOverview, renderProjectFeatures }) => {
//   const [selectedTab, setSelectedTab] = useState<string>(projects[0].title);
//   const tabListRef = useRef<HTMLDivElement>(null);

//   const scrollTabList = (direction: 'left' | 'right') => {
//     if (tabListRef.current) {
//       const scrollAmount = tabListRef.current.clientWidth * 0.5;
//       tabListRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const updateButtonVisibility = () => {
//       if (tabListRef.current) {
//         const scrollLeft = tabListRef.current.scrollLeft;
//         const isAtStart = scrollLeft === 0;
//         const isAtEnd = scrollLeft + tabListRef.current.clientWidth >= tabListRef.current.scrollWidth - 1;

//         const leftButton = document.querySelector('.scroll-left') as HTMLElement;
//         const rightButton = document.querySelector('.scroll-right') as HTMLElement;

//         if (leftButton && rightButton) {
//           leftButton.style.display = isAtStart ? 'none' : 'block';
//           rightButton.style.display = isAtEnd ? 'none' : 'block';
//         }
//       }
//     };

//     if (tabListRef.current) {
//       const observer = new ResizeObserver(updateButtonVisibility);
//       observer.observe(tabListRef.current);
//       tabListRef.current.addEventListener('scroll', updateButtonVisibility);
//       return () => {
//         observer.disconnect();
//         tabListRef.current?.removeEventListener('scroll', updateButtonVisibility);
//       };
//     }
//   }, []);

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <h2 className="text-surf7 mt-8 mb-3 text-sm font-light tracking-tight">
//         A few recent works
//       </h2>
//       <div className="relative">
//         <button
//           onClick={() => scrollTabList('left')}
//           className="scroll-left absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-xai-bg text-surface50 hover:bg-surface950/50 rounded-full p-2"
//         >
//           <ChevronLeftIcon className="h-6 w-6" />
//         </button>
//         <button
//           onClick={() => scrollTabList('right')}
//           className="scroll-right absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-xai-bg text-surface50 hover:bg-surface950/50 rounded-full p-2"
//         >
//           <ChevronRightIcon className="h-6 w-6" />
//         </button>

//         <div
//           ref={tabListRef}
//           className="flex gap-2 w-full overflow-x-auto no-scrollbar pb-2"
//         >
//           {projects.map((project) => (
//             <button
//               key={project.title}
//               onClick={() => setSelectedTab(project.title)}
//               className={`backdrop-blur-xl font-mono tracking-tight font-medium subpixel-antialiased rounded-lg px-3 py-2 cursor-pointer transition-colors duration-200 ${
//                 selectedTab === project.title ? 'bg-surface950/50 text-black' : 'bg-xai-bg text-x400'
//               }`}
//             >
//               {project.title}
//             </button>
//           ))}
//         </div>

//         <AnimatePresence mode="wait">
//           {projects.map((project) =>
//             selectedTab === project.title && (
//               <motion.div
//                 key={project.title}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="relative bg-xai-bg mt-6 space-y-1 sm:space-y-4 rounded-lg p-2"
//                 exit={{ opacity: 0, y: -10 }}
//                 initial={{ opacity: 0, y: 10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {renderProjectOverview(project)}
//                 {renderProjectFeatures(project)}
//               </motion.div>
//             )
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default CustomTabs;
