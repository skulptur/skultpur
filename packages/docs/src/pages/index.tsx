import { AppContainer } from "../components/AppContainer";
import { NestedNavbar } from "../components/NestedNavbar";

export default function Home() {
  return (
    <AppContainer
      title="Skulptur - Libraries docs"
      navbar={<NestedNavbar></NestedNavbar>}
    >
      hello
    </AppContainer>
  );
}
