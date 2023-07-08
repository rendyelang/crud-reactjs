import TableComponents from "../components/TableComponents";
import JumbotronComponents from "../components/JumbotronComponents";

const Home = (props) => {
  return (
    <>
      <JumbotronComponents title={props.title} />
      <TableComponents users={props.users} />
    </>
  );
};

export default Home;
