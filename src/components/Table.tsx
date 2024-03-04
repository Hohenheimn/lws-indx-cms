import React from "react";

import ClipLoader from "react-spinners/ClipLoader";

import Pagination from "./Pagination";

type Props = {
  columns: TableColumnsType[];
  data: any[];
  onClickRow?: (selectedItem: any, data?: any) => void;
  className?: string;
  isLoading: boolean;
  setPage: Function;
  page: number;
  totalPage: number;
  noCursor?: boolean;
};

export type TableColumnsType = {
  title: string | React.ReactNode;
  cellKey: string;
  textAlign?: "right" | "left" | "center";
  render?: (value: any, data?: any) => React.ReactNode;
};

function Table({
  columns,
  data,
  className,
  onClickRow,
  isLoading,
  setPage,
  page,
  totalPage,
  noCursor,
}: Props) {
  return (
    <>
      <div className=" w-full relative min-h-[20rem] bg-white rounded-2xl shadow-md border overflow-auto">
        {isLoading && (
          <>
            <aside className=" absolute top-0 gap-2 flex-col left-0 h-full w-full flex justify-center items-center bg-[#e6e6e652]">
              <ClipLoader color="#9ACC2F" />
              <h4 className=" font-bold animate-pulse">Loading...</h4>
            </aside>
          </>
        )}
        <table className={`${className} w-full mb-5 text-black`}>
          <thead className=" text-gray-400">
            <tr>
              {columns.map((item, index) => (
                <th
                  key={index}
                  className=" p-4 text-sm text-start capitalized font-normal"
                >
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                onClick={() => {
                  onClickRow && onClickRow(item, data);
                }}
                className={` ${
                  onClickRow &&
                  `${!noCursor && "cursor-pointer hover:bg-gray-100"}`
                } duration-200 border-b `}
              >
                {columns.map((col, indexCol) => (
                  <td
                    key={indexCol}
                    className={`border-t p-4`}
                    style={{
                      textAlign: col.textAlign,
                    }}
                  >
                    {col.render
                      ? col.render(item[col.cellKey], item)
                      : item[col.cellKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        setTablePage={setPage}
        tablePage={page}
        totalPage={totalPage}
      />
    </>
  );
}

export default Table;
