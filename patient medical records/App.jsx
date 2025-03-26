import Search from "./components/Search";
import Records from "./components/Records";

const title = "Patient Medical Records";

const App = () => {
  const [id, setId] = useState(null);
  const [record, setRecord] = useState(null);

  // useEffect(() => {
    // console.log("Updated Record:", record);
  // }, [record]); // Runs whenever `record` updates

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setRecord = {setRecord} setId = {setId} id = {id}/>
        {record && <Records record = {record} setRecord = {setRecord}/>}
      </div>
    </div>
  );
};

export default App;