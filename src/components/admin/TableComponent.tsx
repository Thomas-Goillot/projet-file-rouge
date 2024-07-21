import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface Action {
  label: string;
  onClick: (row: any) => void;
}

interface TableProps {
  data: any[];
  columns: Column[];
  actions?: Action[];
}

const TableComponent: React.FC<TableProps> = ({ data, columns, actions }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-3 px-4 uppercase font-semibold text-sm"
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor} className="py-3 px-4 text-center">
                  {row[column.accessor]}
                </td>
              ))}
              {actions && (
                <td className="py-3 px-4 text-center">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      onClick={() => action.onClick(row)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
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
