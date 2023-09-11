import Header from "./components/Header";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Access from "./components/Access";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto relative overflow-hidden">
      <Header />
      <Courses />
      <Access />
      <Footer />
    </main>
  );
}
