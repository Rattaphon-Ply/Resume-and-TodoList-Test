import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";

import { PlusIcon, ExternalLink, Github } from "lucide-react";
import { projects } from "@/utils/ProjectList";
import { useRef, useEffect } from "react";

const ScrollToTopOnOpen = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-y-auto">
      {children}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {projects.map((project, idx) => (
        <MorphingDialog
          key={project.title || idx}
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          {/* Project Card */}
          <MorphingDialogTrigger
            style={{ borderRadius: "12px" }}
            className="flex w-full max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <div className="flex grow flex-row items-center justify-between px-3 py-3">
              <div className="min-w-0">
                <MorphingDialogTitle className="truncate text-left font-semibold text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </MorphingDialogTitle>

                <MorphingDialogSubtitle className="text-sm text-zinc-500 dark:text-zinc-400">
                  {project.category}
                </MorphingDialogSubtitle>
              </div>

              <span className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition hover:bg-zinc-100 dark:border-zinc-50/10 dark:hover:bg-zinc-800">
                <PlusIcon size={14} />
              </span>
            </div>
          </MorphingDialogTrigger>

          {/* Dialog */}
          <MorphingDialogContainer className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md">
            <MorphingDialogContent
              style={{ borderRadius: "24px" }}
              className="pointer-events-auto relative flex h-auto w-full max-h-[90vh] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <ScrollToTopOnOpen>
                {/* Project Image */}
                <MorphingDialogImage
                  src={project.image}
                  alt={project.title}
                  className="h-auto max-h-[250px] w-full object-cover"
                />

                <div className="p-6">
                  {/* Title */}
                  <MorphingDialogTitle className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </MorphingDialogTitle>

                  <MorphingDialogSubtitle className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {project.category}
                  </MorphingDialogSubtitle>

                  <MorphingDialogDescription>
                    {/* Overview */}
                    {project.overview && (
                      <section className="mt-5">
                        <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-200">
                          Overview
                        </h3>

                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {project.overview}
                        </p>
                      </section>
                    )}

                    {/* Features */}
                    {project.features?.length > 0 && (
                      <section className="mt-5">
                        <h3 className="mb-2 font-semibold text-zinc-800 dark:text-zinc-200">
                          Key Features
                        </h3>

                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                            >
                              <span className="mt-1 text-green-500">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {/* Tech Stack */}
                    {project.techStack &&
                      Object.keys(project.techStack).length > 0 && (
                        <section className="mt-5">
                          <h3 className="mb-3 font-semibold text-zinc-800 dark:text-zinc-200">
                            Tech Stack
                          </h3>

                          <div className="space-y-4">
                            {Object.entries(project.techStack).map(
                              ([section, items]) => (
                                <div key={section}>
                                  <h4 className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                    {section}
                                  </h4>

                                  <div className="flex flex-wrap gap-2">
                                    {items.map((item, i) => (
                                      <span
                                        key={i}
                                        className="rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </section>
                      )}

                    {/* Project Link */}
                    {project.projectUrl && (
                      <div className="mt-6 flex flex-wrap gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-700">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                          {project.projectUrl.includes("github.com") ? (
                            <Github size={16} />
                          ) : (
                            <ExternalLink size={16} />
                          )}
                          View Project
                        </a>
                      </div>
                    )}
                  </MorphingDialogDescription>
                </div>
              </ScrollToTopOnOpen>

              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      ))}
    </div>
  );
};

export default Projects;
