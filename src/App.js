import { useState, useEffect } from "react";
import "./App.css";
import Slide from "./Slide";

const slides = [
  {
    title: "The nothing phone's magnificence",
    body: "We know a little bit more about the Nothing Phone 1 now that the chipset was announced so Marques and Andrew talk about what that means for the phone. Then they dive right into the Xiaomi 12S Ultra smartphone and Marques talks about how impressed he is with the camera quality. ",
  },
  {
    title: "The Ford F150 Lightning",
    body: "More than you ever imagined from an all-electric future. A new age for Ford F-150 is here. Electric powered with your life in mind.When the grid goes down, keep the house powered up. All the backup power you need to keep the house running from your truck - for up to 3 days",
  },
  {
    title: "iOS 16",
    body: "iOS 16 Personal is powerful. iOS 16 enhances iPhone with all-new personalization features, deeper intelligence, and more seamless ways to communicate and share.",
  },
  {
    title: "The Tesla Model X Plaid",
    body: "All new Interior, Cinematic Experience, Perfect Environment, Wireless Gaming ... the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed.",
  },
  {
    title: "The Xiaomi 12S Ultra",
    body: "Xiaomi 12S Ultra is a premium-level device that will help professionals to engage in multitasking and work with great efficiency. The available specifications of the device also offer a complete entertainment unit to users. Along with that, the brand has also provided a featureful camera setup on this device.",
  },
];

var size = slides.length - 1;

function App() {
  const [title, setTitle] = useState(slides[0].title);
  const [body, setBody] = useState(slides[0].body);
  const [key, setKey] = useState(0);

  const next = () => {
    if (key !== size) {
      setKey(key + 1);
    } else {
      setKey(0);
    }
  };

  const previous = () => {
    if (key !== 0) {
      setKey(key - 1);
    } else {
      setKey(size);
    }
  };

  useEffect(() => {
    setTitle(slides[key].title);
    setBody(slides[key].body);
  }, [key]);
  return (
    <div className="App">
      <h1>React Slider</h1>
      <div className="main">
        <div className="btn btn1" onClick={previous}>
          &lt;
        </div>
        <div className="content">
          <Slide title={title} body={body} />
        </div>
        <div className="btn btn2" onClick={next}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default App;
