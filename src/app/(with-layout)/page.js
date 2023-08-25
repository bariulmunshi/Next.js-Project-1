import image1 from "@/assets/VARSITY.jpeg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
      <Image width={600} height={450} src={image1} placeholder="blur" alt=""/>  
      <Image width={600} height={450} src="/COVER.jpeg" blurDataURL="" alt=""/>
     {/*  <Image
        width={600}
        height={450}
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      /> */}
    </main>
  );
};
export default HomePage;
