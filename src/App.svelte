<script>
  import Navbar from './components/sections/Navbar.svelte';
  import Hero from './components/sections/Hero.svelte';
  import Problem from './components/sections/Problem.svelte';
  import ServicesGPS from './components/sections/ServicesGPS.svelte';
  import HowItWorks from './components/sections/HowItWorks.svelte';
  import OtherServices from './components/sections/OtherServices.svelte';
  import AboutTestimonials from './components/sections/AboutTestimonials.svelte';
  import Advantages from './components/sections/Advantages.svelte';
  import ContactForm from './components/sections/ContactForm.svelte';
  import Footer from './components/sections/Footer.svelte';
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
