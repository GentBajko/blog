import exp from "constants";
import { useEffect, useState } from "react";

export function Resume() {
  const [text, setText] = useState("");

  useEffect(() => {
    const experience = calculateExperience();
    handleExperienceText(experience);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calculateExperience() {
    const startDate = new Date("2020-04-1");
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }

  function handleExperienceText(exp: { years: number; months: number }) {
    if (exp.months >= 0 && exp.months <= 5) {
      setText(`more than ${exp.years} years`);
    } else if (exp.months >= 6 && exp.months <= 11) {
      setText(`more than ${exp.years + 1} years`);
    } else if (exp.years === 0 && exp.months === 1) {
      setText(`${exp.years} years and 1 month`);
    } else {
      setText(`${exp.years} years and ${exp.months} months`);
    }
    return <div>{text}</div>;
  }

  return (
    <article className="bg-background py-8 md:py-12 flex-1 overflow-y-scroll overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <div
          className="prose prose-gray dark:prose-invert mx-auto"
          style={{ maxWidth: "70%" }}
        >
          <p className="text-center normal">
            I&apos;m a passionate software engineer with {text} of experience
            and a diverse background in web development and data engineering. In
            my free time, I enjoy gaming, TV, and coding up new ideas. I&apos;m
            always eager to share my knowledge and collaborate with others.
          </p>
          {/* <h2 className="pt-4 text-center">Previous Work Experiences</h2> */}
          <h3 className="pt-4 text-center">Cordoor (Mar 2023 - April 2024)</h3>
          <p className="normal">
            At Cordoor, I&apos;ve been contributing to the development of
            SignalXChange, an advanced stock exchange and wallet management
            platform. My responsibilities include:
          </p>
          <ul className="list-disc list-inside mx-auto pl-6">
            <li className="mb-2">
              Designing and implementing robust backend infrastructure using
              Typescript and Nest.js
            </li>
            <li className="mb-2">
              Integrating Apache Kafka for real-time data streaming and
              processing
            </li>
            <li className="mb-2">
              Optimizing MongoDB queries for data speed and integrity
            </li>
            <li className="mb-2">
              Enhancing performance with Redis, improving user session
              management and autocomplete
            </li>
            <li className="mb-2">
              Continuously refining the platform based on user feedback and
              market trends
            </li>
            <li className="mb-2">
              Implementing advanced features like Paper, Options, and Futures
              trading
            </li>
          </ul>

          <h3 className="pt-4 text-center">
            Honest Solutions (Sep 2022 - Jun 2023)
          </h3>
          <p className="normal">
            At Honest Solutions, I spearheaded the development of Enerlogico, a
            comprehensive energy trading platform using Python, Spark, and
            PostgreSQL. My responsibilities included:
          </p>
          <ul className="list-disc list-inside mx-auto">
            <li className="mb-2">
              Architecting robust data pipelines with Databricks for processing
              and analyzing large data volumes
            </li>
            <li className="mb-2">
              Optimizing data models and database queries
            </li>
            <li>
              Managing production databases to ensure high availability and
              reliability
            </li>
          </ul>
          <p className="normal">
            This platform catered to the dynamic needs of the energy trading
            industry.
          </p>
          <h3 className="pt-4 text-center">
            Ritech International AG (Feb 2022 - Sep 2022)
          </h3>
          <p className="normal">
            At Ritech International AG, I worked on Comfy, a building control
            application for Siemens Building Robotics, Inc., and customized it
            for BMW offices and showrooms. My roles included:
          </p>
          <ul className="list-disc list-inside mx-auto">
            <li className="mb-2">
              Microservices integration using technologies like Python, Django,
              Twisted, AIOHTTP, AWS, Docker, Redis, and the OPC Protocol
            </li>
            <li className="mb-2">
              Managing databases with PostgreSQL and CassandraDB
            </li>
            <li>
              Refactoring the existing Django codebase to improve readability
              and upgrade it systematically
            </li>
          </ul>
          <h3 className="pt-4 text-center">Motomtech (Jan 2021 - Feb 2022)</h3>
          <p className="normal">
            At Motomtech, I worked on Naxxa, a real estate platform designed to
            connect land developers and builders. My responsibilities included:
          </p>
          <ul className="list-disc list-inside mx-auto">
            <li className="mb-2">Client communication</li>
            <li className="mb-2">Data gathering with Python and Selenium</li>
            <li className="mb-2">Data processing with Python and PostgreSQL</li>
            <li className="mb-2">
              Ensuring data synchronization between our database and
              Hubspot&apos;s CRM
            </li>
            <li>
              Developing Wedax, a universal web and API scraper, and leading a
              team in its development and implementation
            </li>
          </ul>
          <h3 className="pt-4 text-center">
            Paperclicks (Jul 2020 - Jan 2021)
          </h3>
          <p className="normal">
            At Paperclicks, I contributed to the development of Algo, a tool for
            predicting the profitability of online advertisements. My tasks
            involved:
          </p>
          <ul className="list-disc list-inside mx-auto">
            <li className="mb-2">Data processing with pandas</li>
            <li className="mb-2">
              Creating classifiers using XGBoost, ADASYN, and OneVsRest
            </li>
            <li className="mb-2">
              Developing a K-Means machine learning model
            </li>
            <li>
              Building a Flask-based API for delivering processed data and
              insights
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
