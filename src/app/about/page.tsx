"use client";

import { Footer, Skills } from "@/components";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [text, setText] = useState("");

  useEffect(() => {
    const experience = calculateExperience();
    handleExperienceText(experience);
  }, []);

  function calculateExperience() {
    const startDate = new Date("2020-07-1");
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
    if (exp.months === 0) {
      setText(`${exp.years} years`);
    } else if (exp.months === 1) {
      setText(`${exp.years} years and 1 month`);
    } else {
      setText(`${exp.years} years and ${exp.months} months`);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex">
        <article className="bg-background py-8 md:py-12 flex-1 overflow-y-scroll">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
            <div
              className="prose prose-gray dark:prose-invert mx-auto"
              style={{ maxWidth: "70%" }}
            >
              <p className="text-center">
                I&apos;m a passionate software engineer with {text} of
                experience and a diverse background in web development and data
                engineering. In my free time, I enjoy gaming, TV, and coding up
                new ideas. I&apos;m always eager to share my knowledge and
                collaborate with others.
              </p>
              {/* <h2 className="pt-4 text-center">Previous Work Experiences</h2> */}
              <h3 className="pt-4 text-center">
                Cordoor (Mar 2023 - April 2024)
              </h3>
              <p>
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
                  Implementing advanced features like Paper, Options, and
                  Futures trading
                </li>
              </ul>

              <h3 className="pt-4 text-center">
                Honest Solutions (Sep 2022 - Jun 2023)
              </h3>
              <p>
                At Honest Solutions, I spearheaded the development of
                Enerlogico, a comprehensive energy trading platform using
                Python, Spark, and PostgreSQL. My responsibilities included:
              </p>
              <ul className="list-disc list-inside mx-auto">
                <li className="mb-2">
                  Architecting robust data pipelines with Databricks for
                  processing and analyzing large data volumes
                </li>
                <li className="mb-2">
                  Optimizing data models and database queries
                </li>
                <li>
                  Managing production databases to ensure high availability and
                  reliability
                </li>
              </ul>
              <p>
                This platform catered to the dynamic needs of the energy trading
                industry.
              </p>
              <h3 className="pt-4 text-center">
                Ritech International AG (Feb 2022 - Sep 2022)
              </h3>
              <p>
                At Ritech International AG, I worked on Comfy, a building
                control application for Siemens Building Robotics, Inc., and
                customized it for BMW offices and showrooms. My roles included:
              </p>
              <ul className="list-disc list-inside mx-auto">
                <li className="mb-2">
                  Microservices integration using technologies like Python,
                  Django, Twisted, AIOHTTP, AWS, Docker, Redis, and the OPC
                  Protocol
                </li>
                <li className="mb-2">
                  Managing databases with PostgreSQL and CassandraDB
                </li>
                <li>
                  Refactoring the existing Django codebase to improve
                  readability and upgrade it systematically
                </li>
              </ul>
              <h3 className="pt-4 text-center">
                Motomtech (Jan 2021 - Feb 2022)
              </h3>
              <p>
                At Motomtech, I worked on Naxxa, a real estate platform designed
                to connect land developers and builders. My responsibilities
                included:
              </p>
              <ul className="list-disc list-inside mx-auto">
                <li className="mb-2">Client communication</li>
                <li className="mb-2">
                  Data gathering with Python and Selenium
                </li>
                <li className="mb-2">
                  Data processing with Python and PostgreSQL
                </li>
                <li className="mb-2">
                  Ensuring data synchronization between our database and
                  Hubspot&apos;s CRM
                </li>
                <li>
                  Developing Wedax, a universal web and API scraper, and leading
                  a team in its development and implementation
                </li>
              </ul>
              <h3 className="pt-4 text-center">
                Paperclicks (Jul 2020 - Jan 2021)
              </h3>
              <p>
                At Paperclicks, I contributed to the development of Algo, a tool
                for predicting the profitability of online advertisements. My
                tasks involved:
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
        <div className="bg-background py-8 md:py-12 flex-1 sticky top-0 h-screen flex flex-col justify-center items-center">
          <Image
            src="/avatar.jpeg"
            alt="Gent Bajko"
            width={400}
            height={400}
            className="w-full max-w-md mx-auto rounded-full  rounded"
          />
          <span className="block text-center text-muted-foreground mt-4">
            Gent Bajko
          </span>
          <span className="block text-center text-muted-foreground">
            Software Engineer
          </span>
          <br></br>
          <span className="block text-center text-muted-foreground">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <p className="flex items-center">
              <span className="font-bold">Email:</span>
              <span className="ml-2">gent.bajko@gmail.com</span>
            </p>
          </span>
          <div className="mt-8 w-full">
            <Skills />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
