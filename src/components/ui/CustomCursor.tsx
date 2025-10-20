// "use client";

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const updateHoverState = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       setIsHovering(
//         target.tagName === 'BUTTON' || 
//         target.tagName === 'A' || 
//         target.closest('button') || 
//         target.closest('a')
//       );
//     };

//     window.addEventListener('mousemove', updateMousePosition);
//     window.addEventListener('mouseover', updateHoverState);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       window.removeEventListener('mouseover', updateHoverState);
//     };
//   }, []);

//   return (
//     <>
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-50"
//         animate={{
//           x: mousePosition.x - 6,
//           y: mousePosition.y - 6,
//           scale: isHovering ? 1.5 : 1
//         }}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//       >
//         <div className="w-3 h-3 bg-black rounded-full" />
//       </motion.div>
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-50"
//         animate={{
//           x: mousePosition.x - 16,
//           y: mousePosition.y - 16,
//           scale: isHovering ? 1.5 : 1
//         }}
//         transition={{ type: "spring", stiffness: 400, damping: 28, delay: 0.03 }}
//       >
//         <div className="w-8 h-8 border border-black rounded-full opacity-50" />
//       </motion.div>
//     </>
//   );
// }