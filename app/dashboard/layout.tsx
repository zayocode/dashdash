import SideNav from '@/app/ui/dashboard/sidenav.tsx';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-1 md:overflow-y-auto md:p-1">{children}</div>
    </div>
  );
}