"use client";

import React from "react";
import blogs from "../lib/blog";
import Link from "next/link";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Latest Insights
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-12 text-yellow-100">
          From the Minds of{" "}
          <span className="font-semibold text-yellow-400">Buniyad Techz</span>
        </h3>

        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 text-left shadow-lg hover:shadow-yellow-400/20 transition duration-300"
            >
              {/* Thumbnail with Next Image */}
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

      
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">
                {blog.title}
              </h4>

              
              <p className="text-gray-300 text-sm mb-4">{blog.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="flex justify-between items-center text-sm text-yellow-100">
                <span>{blog.date}</span>
              </div>

              {/* Read More */}
              <div className="mt-4">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-sm text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
