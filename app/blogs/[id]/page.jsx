import blogs from "@/lib/blog";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.id === params?.id);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">{/* ...icons... */}</div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Header Image */}
        <div className="relative mt-20 w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl mb-10 ring-1 ring-white/10">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Title & Meta */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-300 mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-cyan-200 text-sm font-medium">
              Published on{" "}
              <span className="text-white font-semibold">{blog.date}</span>
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl space-y-10">
          {blog.content.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold text-cyan-300 mb-4">
                {section.heading}
              </h2>

              {/* Render text */}
              {section.type === "text" && (
                <p className="text-gray-200 leading-relaxed">{section.text}</p>
              )}

              {/* Render points */}
              {section.type === "points" && (
                <ul className="list-disc pl-6 space-y-2 text-gray-200">
                  {section.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}

              {/* Render plans */}
              {section.type === "plans" && (
                <div className="grid md:grid-cols-3 gap-6">
                  {section.plans.map((plan, i) => (
                    <div
                      key={i}
                      className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-cyan-500/20"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-cyan-400 font-bold text-lg mb-3">
                        {plan.price}
                      </p>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1">
                        {plan.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">{/* ...CTA code... */}</div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">
              BT
            </div>
            <span>
              © {new Date().getFullYear()} Buniyad Techz — Crafted with 💡 &
              Passion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}