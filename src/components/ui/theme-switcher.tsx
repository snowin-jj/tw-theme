import { useState } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    document.querySelector('html')?.classList.contains('dark')
  );

  function toggleMode() {
    setIsDark((prev) => !prev);
    document.querySelector('html')?.classList.toggle('dark');
  }

  return (
    <button
      className="relative bg-text w-14 h-6 rounded-xl ring-2 ring-text"
      onClick={toggleMode}
    >
      <span
        className={`absolute bg-bg w-6 h-6 rounded-full transition-all ease-linear inset-0 right-0 ${
          isDark ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
