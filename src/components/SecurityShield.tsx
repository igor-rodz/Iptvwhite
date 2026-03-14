import { useEffect } from 'react';

/**
 * SecurityShield Component
 * - Blocks right-click (context menu)
 * - Blocks inspection shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
 * - Helps protect source code and assets from easy copying
 */
export function SecurityShield() {
  useEffect(() => {
    // 1. Block right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Block Inspect Element and View Source shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        // F12
        e.key === 'F12' ||
        // Ctrl+Shift+I / Cmd+Opt+I (Chrome/Edge/Safari)
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') ||
        // Ctrl+Shift+J / Cmd+Opt+J (Console)
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') ||
        // Ctrl+Shift+C / Cmd+Opt+C (Select element)
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') ||
        // Ctrl+U / Cmd+Opt+U (View Source)
        ((e.ctrlKey || e.metaKey) && e.key === 'u')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
}
