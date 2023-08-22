import MainLayout from "../../components/MainLayout";
import Articles from "./components/Articles";
import HeroComponent from "./components/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <HeroComponent />
      <Articles />
    </MainLayout>
  );
};

export default HomePage;
