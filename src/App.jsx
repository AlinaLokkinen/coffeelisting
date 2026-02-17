import "./App.css";
import CoffeeList from "./components/CoffeeList";

function App() {
  return (
    <div className="bg-bg pb-10 flex justify-center min-h-screen">
      <div className="bg-[url(/bg-cafe.jpg)] bg-no-repeat bg-contain absolute inset-0"></div>

      <div className="text-textwhite bg-collectionbg w-9/10 lg:my-40 md:my-35 my-20 pb-15 rounded-xl relative md:px-5">
        <div className="flex justify-center bg-[url(/vector.svg)] bg-no-repeat bg-center md:bg-right">
          <div className="h-40 content-center text-center p-10 lg:w-1/2 md:w-3/4 md:mb-5 mb-10 ">
            <h1 className="text-[32px] font-dm font-medium mb-5 ">
              Our collection
            </h1>
            <p className="font-dm text-[14px] font-semibold text-textgrey  ">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
        </div>


        <div>
          <CoffeeList />
        </div>
      </div>
    </div>
  );
}

export default App;

