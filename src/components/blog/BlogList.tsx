"use client";

import Link from "next/link";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/app/[locale]/blog/page";
import { PaginationControls } from "../ui/pagination-controls";
import { useTranslations } from "next-intl";

const POSTS_PER_PAGE = 6;

export default function BlogList({ blogs }: { blogs: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogs.slice(startIndex, endIndex);
  const t = useTranslations("Blog")
  return (
    <section className="max-w-7xl mx-auto py-10 space-y-6">
      <h2 className="text-2xl text-muted-foreground">
        {t('description')}
      </h2>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
