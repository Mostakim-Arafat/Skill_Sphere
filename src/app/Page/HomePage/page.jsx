import Banner from "@/Components/banner";
import Topinstructor from "@/Components/Top-instructor";
import PopularCourse from "@/Components/PopularCourse";
import Tip from "@/Components/Tip";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCourse></PopularCourse>
            <Tip></Tip>
            <Topinstructor></Topinstructor>
        </div>
    );
};

export default Home;