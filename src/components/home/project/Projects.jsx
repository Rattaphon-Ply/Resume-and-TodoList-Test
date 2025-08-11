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
} from '@/components/motion-primitives/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { projects } from '@/utils/ProjectList';
import { useRef, useEffect } from 'react';

const ScrollToTopOnOpen = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-y-auto max-h-[90vh]">
      {children}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {projects.map((project, idx) => (
        <MorphingDialog
          key={idx}
          transition={{
            type: 'spring',
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          {/* Trigger card */}
          <MorphingDialogTrigger
            style={{
              borderRadius: '12px',
            }}
            className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  {Object.keys(project.description).join(', ')}
                </MorphingDialogSubtitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>

          {/* Dialog content */}
          <MorphingDialogContainer
            className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/40"
          >
            <MorphingDialogContent
              style={{
                borderRadius: '24px',
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col 
                        max-h-[90vh] overflow-y-auto
                        border border-zinc-950/10 bg-white 
                        dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <ScrollToTopOnOpen>
                <MorphingDialogImage
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full"
                />
                <div className="p-6">
                  <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </MorphingDialogTitle>

                  {/* รายละเอียด */}
                  <MorphingDialogDescription>
                    {Object.entries(project.description).map(([section, items], i) => (
                      <div key={i} className="mt-4">
                        <h4 className="font-semibold text-zinc-700 dark:text-zinc-400">{section}</h4>
                        <ul className="list-disc list-inside text-zinc-500">
                          {items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {project.projectUrl && (
                      <a
                        className="mt-4 inline-flex text-blue-500 underline"
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
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
