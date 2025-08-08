import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Web Development Trends in 2025",
    description: "Explore the cutting-edge technologies shaping the future of web development...",
    author: "Buniyad Techz",
    date: "Aug 1, 2025",
  },
  {
    id: 2,
    title: "Why Every Business Needs a Website in 2025",
    description: "A solid online presence is no longer optional. Discover the top reasons businesses go digital...",
    author: "Buniyad Team",
    date: "July 24, 2025",
  },
  {
    id: 3,
    title: "How to Choose the Right Tech Stack",
    description: "Choosing the right technology stack can make or break your project. Here's how we do it at Buniyad Techz...",
    author: "Tech Team",
    date: "July 15, 2025",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Latest Insights
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-12 text-yellow-100">
          From the Minds of <span className="font-semibold text-yellow-400">Buniyad Techz</span>
        </h3>

        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/5 backdrop-blur-md border border-yellow-500/10 rounded-2xl p-6 text-left shadow-lg hover:shadow-yellow-400/20 transition duration-300"
            >
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">{blog.title}</h4>
              <p className="text-gray-300 text-sm mb-4">{blog.description}</p>
              <div className="flex justify-between items-center text-sm text-yellow-100">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <div className="mt-4">
                <button className="text-sm text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
