import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import useApiRequest from "../../hooks/useApiRequest";
import apiConfig from "../../api/apiConfig.json";
import Modal from "../../components/Modal";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "../../components/Table/icons/PlusIcon";
import { useDisclosure } from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import useForm from "../../hooks/useForm";
function Users() {
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useApiRequest(  `${apiConfig.apiBaseURL}${apiConfig.endpoints.usuarios.get}`,"GET",null,null);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const { values, handleChange, handleSubmit } = useForm({
    id: "",
    nombre_completo: "",
    correo_electronico: "",
    numero_celular: "",
    equipo_trabajo: "",
    estatus: false,
    fecha_nacimiento: null,
    foto_perfil: "",
    ubicacion: "",
    tipo_rol: "",
    password: "",
  });
  
  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NOMBRE COMPLETO", uid: "nombre_completo", sortable: true },
    { name: "CORREO", uid: "correo_electronico", sortable: true },
    { name: "NUMERO DE CELULAR", uid: "numero_celular" },
    { name: "EQUIPO DE TRABAJO", uid: "equipo_trabajo" },
    { name: "FECHA", uid: "fecha_nacimiento", sortable: true },
    { name: "ROL", uid: "tipo_rol" },
    { name: "CONSTRASENIA", uid: "password" },
  ];
  const statusOptions = [
    { name: "admin", uid: "admin" },
    { name: "fucionador", uid: "fuciondor" },
    { name: "tecnico", uid: "tecnico" },
  ];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const initialVisibleColumns = [
    "nombre_completo",
    "correo_electronico",
    "numero_celular",
    "equipo_trabajo",
    "fecha_nacimiento",
    "tipo_rol",
  ];
  return (
    <>
      <Table
        columns={columns}
        users={users}
        statusOptions={statusOptions}
        initialVisibleColumns={initialVisibleColumns}
        filterField={"nombre_completo"}
        buttonAct={
          <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
            Add New
          </Button>
        }
      ></Table>
      <Modal
      
        title="Crear usuario"
        content={
          <>
          
          <Input type='text' label="Nombre completo" placeholder="Ingrese el nombre completo" />
          <Input type="text" label="Email" placeholder="Ingrese el correo electronico" />
          <Input type="number" label="Numero de telefono" placeholder="Ingrese el numero de telefono" />
          <Input type="text" label="Equipo de trabajo" placeholder="Ingrese el equipo de trabago" />
          <Input type="date" label="Fecha de nacimiento" placeholder="Fecha de nacimiento" />
          </>
        }
        onClose={onOpenChange}
        isOpen={isOpen}
        size={"sm"}
        
      
      />
    </>
  );
}

export default Users;
