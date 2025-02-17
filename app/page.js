import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import HelloWorld from "./components/HelloWorld";
import ListDemo from "./components/ListDemo";

const AnotherComponent = () => {
  return (
    <div>
      <span className=" text-4xl text-green-600 font-bold">
        Another Component
      </span>
    </div>
  );
};

export default function Home() {
  const obj = {
    name: "kg kg",
    age: 25,
    gender: "male",
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* <HelloWorld /> */}
        {/* <Greeting {...obj} another={<AnotherComponent />}>
          <span className=" font-bold text-5xl text-red-600">
            This is children component.
          </span>
        </Greeting> */}
        {/* <ListDemo /> */}
        <Counter />
      </div>
    </main>
  );
}
