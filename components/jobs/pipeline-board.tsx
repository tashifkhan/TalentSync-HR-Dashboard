// components/dashboard/pipeline-board.tsx
import { PipelineColumnData } from "@/types/jobs";
import { KanbanColumn } from "./kanban-column";

type PipelineBoardProps = {
  columns: PipelineColumnData[];
};

export function PipelineBoard({ columns }: PipelineBoardProps) {
  return (
    <section>
      {/* <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4"></h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            title={column.title}
            candidates={column.candidates}
          />
        ))}
      </div>
    </section>
  );
}
