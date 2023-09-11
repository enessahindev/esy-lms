"use client";

import React from "react";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Next.js 101",
      lessons: [
        "Giriş, ",
        "Next.js Temelleri, ",
        "Next.js Programlama, ",
        "Uygulamalı Eğitim ",
      ],
      url: "2023-08-23.mp4",
    },
    {
      id: 2,
      title: "CSS 101",
      lessons: ["Giriş, ", "CSS Temel Eğitimi, ", "CSS Uygulamalı Eğitim "],
      url: "2023-07-18.mp4",
    },
    {
      id: 3,
      title: "Javascript 101",
      lessons: [
        "Giriş, ",
        "Functions, ",
        "Default Parameters, ",
        "Strings, ",
        "OPA, ",
        "OFA, ",
        "Let Scope, ",
        "Consts ",
      ],
      url: "2023-08-14.mp4",
    },
  ];

  return (
    <main className="h-screen xl:h-[90vh]" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <h1 className="h2 text mx-auto mr-4 mt-4 ml-4">All Coursendo!</h1>
            <ul className="grid mx-auto">
              {courses.map((course) => (
                <li
                  key={course.id}
                  className="bg-white hover:bg-indigo-600 flex flex-col mx-4 mt-4 shadow-md rounded-md overflow-hidden"
                >
                  <Link href={`/courses/videos/${course.url}`}>
                    <div className="block p-4">
                      <h2 className="text-lg font-semibold text-green-700">
                        {course.title}
                      </h2>
                      <p className="text-gray-900">{course.lessons}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
