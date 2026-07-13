<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Problem from './components/Problem.svelte';
  import ServicesGPS from './components/ServicesGPS.svelte';
  import HowItWorks from './components/HowItWorks.svelte';
  import OtherServices from './components/OtherServices.svelte';
  import AboutTestimonials from './components/AboutTestimonials.svelte';
  import Advantages from './components/Advantages.svelte';
  import ContactForm from './components/ContactForm.svelte';
  import Footer from './components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen bg-greenmip-light-bg font-krub text-greenmip-forest">
  <!-- Navbar Header -->
  <Navbar />

  <!-- Main Content Sections -->
  <main class="flex-grow flex flex-col w-full">
    <!-- Hero Section -->
    <Hero />

    <!-- Problem Section -->
    <Problem />

    <!-- GPS Services Section -->
    <ServicesGPS />

    <!-- How It Works Section -->
    <HowItWorks />

    <!-- Other Services Section -->
    <OtherServices />

    <!-- About & Testimonials Section -->
    <AboutTestimonials />

    <!-- Advantages Section -->
    <Advantages />

    <!-- Contact Form Section -->
    <ContactForm />
  </main>

  <!-- Footer -->
  <Footer />
</div>
