import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Chris Stewart
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Results-driven Automation Engineer with over 10 years of experience designing and
        implementing scalable test automation solutions. Adept at leading cross-functional teams
        and wearing multiple hats (QA, DevOps, Backend/Frontend Development, PM, Dev Lead) to
        drive efficiency and innovation.
        </p>
        <p>
          I am most known for my QA and automation testing but have developed a passion
          for front end development over the years.
        </p>
        <p>
          If you'd like to get in touch with me head over to
          {" "}
          <a href={socialLinks.linkedin} target="_blank">
            LinkedIn
          </a>{" "}
          or send me an
          {" "}
          <a href={socialLinks.email} target="_blank">
            Email
          </a>{""}.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://c-stewart.com/" target="_blank">
            Chris Stewart
          </a>
          .
        </p>
      </div>
    </section>
  );
}
