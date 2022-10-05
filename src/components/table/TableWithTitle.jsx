import Table from "./Table";

const TableWithTitle = ({ title, ...props }) => {
  return (
    <div>
      <div>{title}</div>
      <Table {...props} />
    </div>
  );
};

export default TableWithTitle;
