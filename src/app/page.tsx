import LandingPage1 from "./LandingPage1";
import FeatureShowcase from "./FeatureShowcase";
import TestimonialSection from "./TestimonialSection";
import AboutUs from "./about-us";
import FAQSection from "./FAQSection";
import StarBackground from "./StarBackground";
import { Sign } from "crypto";
import Signup from "./(auth)/sign-up/page";

export default function Page() {
  return <>
       <LandingPage1/>
       <FeatureShowcase/>
       <TestimonialSection/>
       <AboutUs/>
       <FAQSection/>
       <StarBackground/>
       
  </>;
}