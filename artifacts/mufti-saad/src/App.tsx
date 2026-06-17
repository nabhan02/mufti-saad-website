import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { InquiryCTA } from "@/components/home/InquiryCTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/about/About";
import { AskMufti } from "@/components/ask/AskMufti";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Counseling } from "@/components/counseling/Counseling";
import { Fundraising } from "@/components/fundraising/Fundraising";
import { HajjUmrah } from "@/components/hajjumrah/HajjUmrah";
import { IslamicFinance } from "@/components/finance/IslamicFinance";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesOverview />
      <InquiryCTA />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Biography"
        title="About Mufti Saad"
        description="A life dedicated to sacred knowledge, religious guidance, and service to the Muslim community."
      />
      <About />
      <InquiryCTA />
    </>
  );
}

function AskPage() {
  return (
    <>
      <PageHeader
        eyebrow="Religious Guidance"
        title="Ask Mufti Saad"
        description="Have a religious question? Submit it below and receive guidance grounded in classical scholarship and qualified Iftaa training, in shā' Allah."
      />
      <AskMufti />
    </>
  );
}

function ClassesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Classes & Education"
        description="From weekly community gatherings to advanced study of Tafsir and Fiqh, find a program that fits your learning journey."
      />
      <Education />
      <InquiryCTA
        eyebrow="Want to Learn More?"
        title="Ask About Classes & Programs"
        body="For class schedules, registration, or questions about programs at Zakaria Islamic Academy, please reach out by email or the inquiry form."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="For questions or inquiries of any kind, please send a message below or email directly — Mufti Saad's office will respond, in shā' Allah."
      />
      <Contact />
    </>
  );
}

function CounselingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Family & Guidance"
        title="Counseling & Nikah"
        description="Compassionate, confidential counsel rooted in Islamic tradition — for individuals, couples, and families, and for those beginning married life."
      />
      <Counseling />
      <InquiryCTA
        eyebrow="Ready to Talk?"
        title="Request a Counseling Appointment"
        body="To arrange counseling or nikah officiation, please reach out by email or the inquiry form and Mufti Saad's office will follow up with you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}

function FundraisingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Humanitarian"
        title="Fundraising"
        description="Mobilizing the community to support those in need — raising funds and awareness for critical humanitarian causes worldwide."
      />
      <Fundraising />
      <InquiryCTA
        eyebrow="Want to Help?"
        title="Support These Efforts"
        body="To organize a fundraising appeal, contribute to a cause, or learn more about the campaigns, please reach out by email or the inquiry form."
        primaryLabel="Get Involved"
        primaryHref="/contact"
      />
    </>
  );
}

function HajjUmrahPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sacred Travel"
        title="Hajj & Umrah"
        description="Embark on the pilgrimage of a lifetime with scholarly guidance and trusted coordination at every step of the journey."
      />
      <HajjUmrah />
      <InquiryCTA
        eyebrow="Planning Your Pilgrimage?"
        title="Inquire About an Upcoming Journey"
        body="For dates, packages, and details on upcoming Hajj and Umrah groups, please reach out by email or the inquiry form."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}

function IslamicFinancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Financial Guidance"
        title="Islamic Finance"
        description="Shariah-compliant financial solutions that connect faith-based ethics with practical needs — from riba-free home financing to personalized consultation."
      />
      <IslamicFinance />
      <InquiryCTA
        eyebrow="Have Questions?"
        title="Explore Your Islamic Finance Options"
        body="To discuss home financing or other Shariah-compliant financial solutions, please reach out by email or the inquiry form and Mufti Saad will follow up."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6" style={{ color: "var(--text-secondary)" }}>Page not found</p>
        <a href="/" style={{ color: "var(--blue-accent)" }} className="underline">Return home</a>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/ask" component={AskPage} />
        <Route path="/classes" component={ClassesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/counseling" component={CounselingPage} />
        <Route path="/fundraising" component={FundraisingPage} />
        <Route path="/hajj-umrah" component={HajjUmrahPage} />
        <Route path="/islamic-finance" component={IslamicFinancePage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
