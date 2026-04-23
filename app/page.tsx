import { DashboardClient } from "./components/DashboardClient";
import { PortalShell } from "./components/PortalShell";

export default function DashboardPage() {
  return (
    <PortalShell>
      <DashboardClient />
    </PortalShell>
  );
}
