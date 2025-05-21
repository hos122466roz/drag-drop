import Header from "./components/Header";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <section className="flex w-full  ">
      <Header/>
      <div className="bg-[#f6f7f9] mb-10 rounded-[1.5rem]   ml-[18%] mt-20 w-[82%] min-h-[100vh] px-8 py-6 ">
        {children}
      </div>
    </section>
  );
};
export default ProfileLayout;
