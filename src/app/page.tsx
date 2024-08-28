import Image from "next/image";
import RentLease from "./components/RentLease/RentLease";
import Locations from "./components/Locations/Locations";
import Faq from "./components/Faq/Faq";
import SlideShow from '../app/components/Slideshow/Slideshow'
import PopularCars from "./components/PopularCars/PopularCars";
import Subscribe from "./components/Subscribe/Subscribe";
import BookCar from "./components/BookCar/BookCar";

export default function Home() {
  return (
    <main>
      <BookCar />
      <SlideShow />
      <PopularCars />
      <Subscribe />
      <RentLease />
      <Locations />
      <Faq />
    </main>
  );
}