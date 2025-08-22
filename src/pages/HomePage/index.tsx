import FirstSection from "./FirstSection";
import TopImage from "./TopImage";
import { MainContent } from "../../utils/styled-box";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./TopImage.css"

export default function HomePage() {
  return (
    <MainContent>
      <TopImage />
      <div className="Start-Text-Arrow">
        <p>START YOUR CALISTHENICS JOURNEY</p>
        <KeyboardArrowDownIcon sx={{ fontSize: 40, position: "relative", top: -10 }} />
      </div>
      <FirstSection />
    </MainContent>
  );
}
