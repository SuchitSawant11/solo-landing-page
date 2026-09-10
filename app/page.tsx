import Discover from "./components/Discover";

export const metadata = {
  title: "The Solo Network",
  description: "The Career Connect Platform",
};

export default function Home() {
  return (
    <main id="top">
      <Discover />
    </main>
  );
}