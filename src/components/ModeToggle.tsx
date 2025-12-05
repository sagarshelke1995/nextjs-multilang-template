
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Make sure theme is loaded BEFORE rendering icons
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent mismatch — render nothing on SSR
    return (
      <button className="h-4 w-4 opacity-0 pointer-events-none" aria-hidden />
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "light" ? "dark" : "light")
      }
      size="icon"
      className="cursor-pointer bg-card h-4 w-4"
      variant="outline"
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}


// "use client";

// import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";

// export function ModeToggle() {
//   const { resolvedTheme, setTheme } = useTheme();

//   return (
//     <button
//       onClick={() =>
//         setTheme(resolvedTheme === "light" ? "dark" : "light")
//       }
//       className="p-2 cursor-pointer bg-card"
//     >
//       {resolvedTheme === "light" ? (
//         <Moon className="h-4 w-4" />
//       ) : (
//         <Sun className="h-4 w-4" />
//       )}
//     </button>
//   );
// }

