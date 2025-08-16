import FirstSection from "./FirstSection";
import TopImage from "./TopImage";
import { MainContent } from "../../utils/styled-box";

export default function HomePage() {
  return (
    <MainContent>
      <TopImage />
      <FirstSection />
    </MainContent>
  );
}
