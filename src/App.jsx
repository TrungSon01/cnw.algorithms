import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArrayHashing from "./Pages/ArrayHashing/ArrayHashing";
import Stack from "./Pages/Stack/Stack";
import TwoPointer from "./Pages/TwoPointer/TwoPointer";
import BinarySearch from "./Pages/BinarySearch/BinarySearch";
import SlidingWindow from "./Pages/SlidingWindow/SlidingWindow";
import LinkedList from "./Pages/LinkedList/LinkedList";
import Tree from "./Pages/Tree/Tree";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function NotFoundPage() {
  return (
    <>
      {" "}
      <h1>404</h1> <p>Không tìm thấy trang.</p>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />{" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/algorithms/array-hashing" element={<ArrayHashing />} />
        <Route path="/algorithms/stack" element={<Stack />} />
        <Route path="/algorithms/two-pointer" element={<TwoPointer />} />
        <Route path="/algorithms/binary-search" element={<BinarySearch />} />
        <Route path="/algorithms/sliding-window" element={<SlidingWindow />} />
        <Route path="/algorithms/linked-list" element={<LinkedList />} />
        <Route path="/algorithms/trees" element={<Tree />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
