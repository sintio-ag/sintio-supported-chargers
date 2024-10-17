/**
 * Table Component
 * Renders a table with dynamic headers and content.
 *
 * @component
 * @example
 * const headers = ["Name", "Age", "Location"];
 * const content = [
 *   { Name: "John Doe", Age: "30", Location: "New York" },
 *   { Name: "Jane Doe", Age: "25", Location: "Los Angeles" },
 * ];
 * return <Table headers={headers} content={content} />;
 *
 * @param {Object} props - Props for Table
 * @param {string[]} props.headers - Array of header titles for the table.
 * @param {Object[]} props.content - Array of content rows, each row is an object with keys matching header titles and values as ReactNode.
 */

import React from "react";

type TableProps = {
  headers: string[];
  content: { [key: string]: React.ReactNode }[];
};

const Table: React.FC<TableProps> = ({ headers, content }) => {
  return (
    <div className="not-prose overflow-x-auto rounded-lg border">
      <table className="w-full table-auto text-left text-sm">
        <thead className="border-b bg-gray-50 font-medium text-gray-600">
          <tr>
            {headers.map((header) => (
              <th className="px-6 py-3" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y text-gray-600">
          {content.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td className="px-3 py-1" key={header}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
