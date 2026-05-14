import Image from "next/image";

const Banner = () => {
    return (
        <div className="flex gap-5">
            <div>
                <h1 className="font-bold ">Upgrade your <br/> <span className="text-green-600">Skill</span>Unlock <br /> your <span className="text-green-500">Potential</span></h1>
                <p>This is a course that is trailored to the industry</p>
                <div className="flex">
                    <button>Learn from Industry Experts</button>
                    <button>Upgrade Your Skills Today 🚀</button>
                </div>
            </div>
            <div>
                <Image src={'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt="bannerImg"
                height={400}
                width={400}/>
            </div>
        </div>
    );
};

export default Banner;