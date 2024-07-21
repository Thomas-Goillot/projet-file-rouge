import React from "react";

interface TableComponentProps {
  data: any[];
  columns: { header: string; accessor: string; cell?: (row: any) => any }[];
  actions: { label: string; onClick: (item: any) => void }[];
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  columns,
  actions,
}) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="w-1/4 py-3 px-4 uppercase font-semibold text-sm"
              >
                {column.header}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="w-1/4 py-3 px-4 text-center"
                >
                  {column.cell ? column.cell(row) : row[column.accessor]}
                </td>
              ))}
              {actions.length > 0 && (
                <td className="w-1/4 py-3 px-4 text-center">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      onClick={() => action.onClick(row)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mx-1"
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
