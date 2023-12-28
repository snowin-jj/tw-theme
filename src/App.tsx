import ThemeSwitcher from './components/ui/theme-switcher';

export default function App() {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold text-xl">Tailwind theme</h2>
        <ThemeSwitcher />
      </div>
    </main>
  );
}
