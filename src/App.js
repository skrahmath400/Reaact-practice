import logo from './logo.svg';
import './App.css';
import First from './components/first';
import StudentRoute from './components/useeffectconcept';
import StudentRoutes from './components/StudentRoutes';
import AddVehicleForm from './components/Userefusage';
import Playmusic from './components/Playmusic';
import Searchboxhandleing from './components/Searchboxhandleing';
import Crud from './components/Crud';
import UseDetailsuseage from './components/coustom hook/UseDetailsuseage';
import Usecontextuseage from './components/Context/Usecontextusage';

import AuthProvider from './components/Context/AuthProvider';
import Userefsetup from './components/usref/Userefsetup';
import TrackPreviouslocation from './components/usref/TrackPreviouslocation';
import ParentMemo from './components/Memo/ParentMemo';
import UseMemo from './components/Usememo/Usememo';
import UseQueryGet from './components/UseQuerey.jsx/UseQueryGet';
import TaskApp from './components/UseQuerey.jsx/UseMutation';

function App() {
  return (

    <>
      <AuthProvider>
        <First />
        <StudentRoute />
        <StudentRoutes />
        <AddVehicleForm />
        <Playmusic />
        <Searchboxhandleing />
        <Crud />
        <UseDetailsuseage />
        <Usecontextuseage />
      </AuthProvider>
      < Userefsetup />

      < TrackPreviouslocation />
      <ParentMemo />

      < UseMemo />
      <UseQueryGet />
      <TaskApp />
    </>
  );
}

export default App;
