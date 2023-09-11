import { hardware, software } from "@/constants/uses-data";
import { AlertTriangle } from "lucide-react";

import { formatDate } from "@/lib/utils";

const UsesPage = () => {
  return (
    <div className="container pb-10">
      <article className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0">Uses</h1>
        <div className="m-0 text-xl">
          <p>
            These are the tools I use to get my work done. Links marked with (*)
            are affiliate links. It does not cost you anything to use them, but
            I get a small commission if you do.
          </p>
        </div>

        <time className="text-sm text-slate-500">
          Last updated: {formatDate("2023-06-11")}
        </time>

        <hr className="my-4" />
        <h2>Software</h2>
        <ul>
          {software.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <h2>Hardware</h2>
        <ul>
          {hardware.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default UsesPage;