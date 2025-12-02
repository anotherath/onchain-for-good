import ActiveFundsSection from "@/components/sections/active-funds-section";
import MainSection from "@/components/sections/main-section";
import WorkflowSection from "@/components/sections/workflow-section";

export default function Home() {
  return (
    <div className="grow">
      <main className="pt-16">
        <MainSection />
        <ActiveFundsSection />
        <WorkflowSection />
      </main>
    </div>
  );
}
