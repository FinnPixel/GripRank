import { Box, ThemeProvider } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../theme-provider/theme";
import FirstSection from "./FirstSection";
import Map from "./Map";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IPark } from "./Park";
import SecondaryBar from "../../components/SecondaryBar";

const SkillTrees = () => {
  const [parks, setParks] = useState<IPark[]>([]);

  const parksStaic: IPark[] = [
    {
      id: uuidv4(),
      title: "Bewegungsparcours Denningerstraße",
      image: "",
      address: "Denninger Str. 168, 81927 München",
      google_maps_url: new URL("https://maps.app.goo.gl/8RbPeFKgZMcPrYzx6"),
      coordinates: { x: 48.14580933143395, y: 11.63048307116426 },
    },
    {
      id: uuidv4(),
      title: "Calisthenics Riem",
      image: "",
      address: "81829 Munich",
      google_maps_url: new URL("https://maps.app.goo.gl/kQuh76KezFSmmgi66"),
      coordinates: { x: 48.12755759842988, y: 11.685026093591514 },
    },
    {
      id: uuidv4(),
      title: "Mini Park Flurstraße",
      image: "",
      address: "Flurstraße 12, 81675 München",
      google_maps_url: new URL("https://maps.app.goo.gl/6ujWgi1tqr9gWJn27"),
      coordinates: { x: 48.134410130139614, y: 11.606354112367464 },
    },
    {
      id: uuidv4(),
      title: "Hüllgraben Calisthenics Park",
      image: "",
      address: "Rahel-Straus-Weg 28, 81673 München",
      google_maps_url: new URL("https://maps.app.goo.gl/gLEQk8T8NyueiPWq5"),
      coordinates: { x: 48.12283658956915, y: 11.63510293537154 },
    },
    {
      id: uuidv4(),
      title: "Ostpark Calisthenics",
      image: "",
      address: "81735 Munich",
      google_maps_url: new URL("https://maps.app.goo.gl/GjxLLEAkEjEBQQK7A"),
      coordinates: { x: 48.11497550672075, y: 11.6349438896114 },
    },
    {
      id: uuidv4(),
      title: "Olympiapark Calisthenics",
      image: "",
      address: "80809 München",
      google_maps_url: new URL("https://maps.app.goo.gl/Az68xGx4uvx14ccv5"),
      coordinates: { x: 48.17290038605224, y: 11.55526555258518 },
    },
    {
      id: uuidv4(),
      title: "Hirschgarten Calisthenics",
      image: "",
      address: "Christoph-Rapparini-Bogen 17, 80639 München",
      google_maps_url: new URL("https://maps.app.goo.gl/1pgHeCucocDdGuME9"),
      coordinates: { x: 48.14580385062131, y: 11.508182347449017 },
    },
    {
      id: uuidv4(),
      title: "Ottobrunn Calisthenics",
      image: "",
      address: "Bahnhofstraße 23, 85521 Ottobrunn",
      google_maps_url: new URL("https://maps.app.goo.gl/86vvWqboMFjXDThu7"),
      coordinates: { x: 48.0730367390771, y: 11.658954680412041 },
    },
    {
      id: uuidv4(),
      title: "Laim Calisthenics",
      image: "",
      address: "Burgkmairstraße 9, 80686 München",
      google_maps_url: new URL("https://maps.app.goo.gl/36TN7CKPBh1YutHV8"),
      coordinates: { x: 48.133789439686524, y: 11.512599073206706 },
    },
  ];

  useEffect(() => {
    async function fetchParks() {
      const resp = await fetch("/api/parks");
      if (resp.status < 200 || resp.status > 300) {
        setParks(parksStaic);
      } else {
        const data = await resp.json();
        setParks(data.parks);
      }
    }
    fetchParks();
  }, []);

  const [displayedParks, setDisplayedParks] = useState<IPark[]>(parks);

  useEffect(() => {
    setDisplayedParks(parks);
  }, [parks]);

  function sortParksByValue(searchValue: string): IPark[] {
    const matchedParks: IPark[] = [];
    const unmatchedParks: IPark[] = [];
    displayedParks.forEach((park: IPark) => {
      if (park.title.toLowerCase().includes(searchValue.toLowerCase())) {
        matchedParks.push(park);
      } else {
        unmatchedParks.push(park);
      }
    });
    matchedParks.sort((a, b) => a.title.localeCompare(b.title));
    unmatchedParks.sort((a, b) => a.title.localeCompare(b.title));
    return [...matchedParks, ...unmatchedParks];
  }

  function filterForInput(value: string) {
    const sortedParks = sortParksByValue(value);
    setDisplayedParks(sortedParks);
  }

  function onHandleEnter(value: string) {
    filterForInput(value);
  }

  return (
    <Box>
      <SecondaryBar
        onHandleEnter={onHandleEnter}
        displayedParks={displayedParks}
      />
      <ThemeProvider theme={theme}>
        <MainContent>
          <Map parks={parks} />
          <FirstSection displayedParks={displayedParks} />
        </MainContent>
      </ThemeProvider>
    </Box>
  );
};

const MainContent = styled(Box)`
  background: black;
  width: 100%;
`;

export default SkillTrees;
