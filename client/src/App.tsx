import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Router as WouterRouter, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const Contact = lazy(() => import("./pages/Contact"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <WouterRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/why-us" component={WhyChooseUs} />
          <Route path="/contact" component={Contact} />

          <Route path="/ar" component={Home} />
          <Route path="/ar/about" component={About} />
          <Route path="/ar/services" component={Services} />
          <Route path="/ar/why-us" component={WhyChooseUs} />
          <Route path="/ar/contact" component={Contact} />

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </WouterRouter>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster position="top-center" richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
