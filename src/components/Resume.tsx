import { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";

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
          <h2 className="pt-4 text-center">Previous Work Experiences</h2>

          <ExperienceCard
            company="Cordoor"
            startDate="Mar 2023"
            endDate="Apr 2024"
            description="At Cordoor, I've been contributing to the development of SignalXChange, an advanced stock exchange and wallet management platform. My responsibilities include:"
            responsibilities={[
              "Designing and implementing robust backend infrastructure using Typescript and Nest.js",
              "Integrating Apache Kafka for real-time data streaming and processing",
              "Optimizing MongoDB queries for data speed and integrity",
              "Enhancing performance with Redis, improving user session management and autocomplete",
              "Continuously refining the platform based on user feedback and market trends",
              "Implementing advanced features like Paper, Options, and Futures trading",
            ]}
          />

          <ExperienceCard
            company="Honest Solutions"
            startDate="Sep 2022"
            endDate="Jun 2023"
            description="At Honest Solutions, I spearheaded the development of Enerlogico, a comprehensive energy trading platform using Python, Spark, and PostgreSQL. My responsibilities included:"
            responsibilities={[
              "Architecting robust data pipelines with Databricks for processing and analyzing large data volumes",
              "Optimizing data models and database queries",
              "Managing production databases to ensure high availability and reliability",
            ]}
          />

          <ExperienceCard
            company="Ritech International AG"
            startDate="Feb 2022"
            endDate="Sep 2022"
            description="At Ritech International AG, I worked on Comfy, a building control application for Siemens Building Robotics, Inc., and customized it for BMW offices and showrooms. My roles included:"
            responsibilities={[
              "Microservices integration using technologies like Python, Django, Twisted, AIOHTTP, AWS, Docker, Redis, and the OPC Protocol",
              "Managing databases with PostgreSQL and CassandraDB",
              "Refactoring the existing Django codebase to improve readability and upgrade it systematically",
            ]}
          />

          <ExperienceCard
            company="Motomtech"
            startDate="Jan 2021"
            endDate="Feb 2022"
            description="At Motomtech, I worked on Naxxa, a real estate platform designed to connect land developers and builders. My responsibilities included:"
            responsibilities={[
              "Client communication",
              "Data gathering with Python and Selenium",
              "Data processing with Python and PostgreSQL",
              "Ensuring data synchronization between our database and Hubspot's CRM",
              "Developing Wedax, a universal web and API scraper, and leading a team in its development and implementation",
            ]}
          />

          <ExperienceCard
            company="Paperclicks"
            startDate="Jul 2020"
            endDate="Jan 2021"
            description="At Paperclicks, I contributed to the development of Algo, a tool for predicting the profitability of online advertisements. My tasks involved:"
            responsibilities={[
              "Data processing with pandas",
              "Creating classifiers using XGBoost, ADASYN, and OneVsRest",
              "Developing a K-Means machine learning model",
              "Building a Flask-based API for delivering processed data and insights",
            ]}
          />
        </div>
      </div>
      <br />
    </article>
  );
}
