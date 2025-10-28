import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogs from "@/lib/blog";

export const metadata = {
  title: "Blogs | Buniyad Techz",
  description:
    "Explore the latest insights, guides, and innovations from Buniyad Techz — covering school management systems, web development, and modern software trends.",
  keywords:
    "Buniyad Techz blogs, school management system, tech insights, web development articles, education software",
  openGraph: {
    title: "Buniyad Techz Blogs",
    description:
      "Stay updated with Buniyad Techz insights on technology, school ERP solutions, and digital transformation.",
    url: "https://buniyadtech/blogs",
    siteName: "Buniyad Techz",
    images: [
      {
        url: "https:/buniyadtech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buniyad Techz Blog Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buniyad Techz Blog",
    description:
      "Explore technology insights and innovations from Buniyad Techz.",
    images: ["https://your-domain.com/og-image.jpg"],
  },
};

const BlogSection = () => {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
      itemScope
      itemType="https://schema.org/Blog"
    >
      <div className="max-w-6xl mx-auto text-center">
        <header>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
            itemProp="headline"
          >
            Latest Insights
          </h1>
          <p
            className="text-xl md:text-2xl font-medium mb-12 text-yellow-100"
            itemProp="description"
          >
            From the minds of{" "}
            <span className="font-semibold text-yellow-400">Buniyad Techz</span>
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 text-left shadow-lg hover:shadow-yellow-400/20 transition duration-300"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-xl"
                  itemProp="image"
                />
              </div>

              {/* Title */}
              <h2
                className="text-xl font-semibold text-yellow-300 mb-2"
                itemProp="headline"
              >
                {blog.title}
              </h2>

              {/* Short description */}
              <p className="text-gray-300 text-sm mb-4" itemProp="description">
                {blog.shortDesc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4" itemProp="keywords">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-500/10 text-yellow-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date & Author */}
              <div className="flex justify-between items-center text-sm text-yellow-100">
                <time itemProp="datePublished" dateTime={blog.date}>
                  {blog.date}
                </time>
                <span itemProp="author" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content="Buniyad Techz" />
                </span>
              </div>

              {/* Read More */}
              <div className="mt-4">
                <Link
                  href={`/blogs/${blog.id}`}
                  className="text-sm text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition"
                  itemProp="url"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🔍 Structured Data (JSON-LD for Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Buniyad Techz Blog",
            "url": "https://buniyadtech/blogs",
            "description":
              "Explore Buniyad Techz insights on school management systems, software, and education tech.",
            "publisher": {
              "@type": "Organization",
              "name": "Buniyad Techz",
              "logo": {
                "@type": "ImageObject",
                "url": "https://buniyadtech/logo.png",
              },
            },
            "blogPost": blogs.map((b) => ({
              "@type": "BlogPosting",
              headline: b.title,
              description: b.shortDesc,
              datePublished: b.date,
              image: b.thumbnail,
              author: {
                "@type": "Organization",
                name: "Buniyad Techz",
              },
              url: `https://buniyadtech/blogs/${b.id}`,
            })),
          }),
        }}
      />
    </section>
  );
};

export default BlogSection;
