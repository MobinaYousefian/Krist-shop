import {Hero} from "@/components/home page/Hero";
import {CustomerService} from "@/components/home page/CustomerService";

export default function Home() {
  return (
      <main>
          <Hero/>
          <CustomerService/>
          <div className={"flex flex-col py-40"}>
              hello
              <div className={"py-20"}>hello hello hello hello hello hello hello</div>
              <div className={"py-20"}>hello hello hello hello hello hello hello</div>
              <div className={"py-20"}>hello hello hello hello hello hello hello</div>
          </div>
      </main>
  );
}
