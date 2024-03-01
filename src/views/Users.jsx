import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import useApiRequest from "../hooks/useApiRequest";
import apiConfig from "../api/apiConfig.json";
function Users() {
  
  const [users, setUsers] = useState([]);

  const { data, loading, error } = useApiRequest(
    `${apiConfig.apiBaseURL}${apiConfig.endpoints.usuarios.get}`,"GET",null,null);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "NOMBRE COMPLETO", uid: "nombre_completo", sortable: true},
    {name: "CORREO", uid: "correo_electronico", sortable: true},
    {name: "NUMERO DE CELULAR", uid: "numero_celular"},
    {name: "EQUIPO DE TRABAJO", uid: "equipo_trabajo"},
    {name: "FECHA", uid: "fecha_nacimiento", sortable: true},
    {name: "ROL", uid: "tipo_rol"},
    {name: "CONSTRASENIA", uid: "password"},
  ];
  const statusOptions = [
    {name: "admin", uid: "admin"},
    {name: "fucionador", uid: "fuciondor"},
    {name: "tecnico", uid: "tecnico"},
  ];
  const filterData = "nombre_completo"
  const initialVisibleColumns = ["nombre_completo", "correo_electronico", "numero_celular", "equipo_trabajo","fecha_nacimiento","tipo_rol"];
  return (
    <>
      <Table
        columns={columns}
        users={users}
        statusOptions={statusOptions}
        initialVisibleColumns={initialVisibleColumns}
        filterData={filterData}
      ></Table>
    </>
  );
}

export default Users;

