import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="md:max-h-screeen  md:flex md:overflow-x-hidden ">
      <Navbar />

      <div className="p-10 w-full text-green-800   overflow-y-auto ">
        <h1> Home page</h1>
      </div>
    </div>
  );
}
