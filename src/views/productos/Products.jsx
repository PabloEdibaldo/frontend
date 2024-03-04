import React, { useState } from "react";
import useApiRequest from "../../hooks/useApiRequest";
import apiConfig from "../../api/apiConfig.json";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import { PlusIcon } from "../../components/Table/icons/PlusIcon";
import useForm from "../../hooks/useForm";
import {
  useDisclosure,
  Button,
  Input,
  Card,
  Tab,
  Tabs,
  CardBody,
  Spinner
} from "@nextui-org/react";
function Products() {
  
  const [selected, setSelected] = React.useState("login");
  const [products, setProducts] = React.useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const { values, handleChange, handleSubmit } = useForm({
    nombre_producto: "",
    codigo_barras: "",
    marca: "",
    modelo: "",
    stock: null,
    observaciones: "",
    fecha_ingreso: null,
    unidad_medida: "",
    empresa: "",
    proveedor: "",
    zona: "",
    stock_minimo: null,
  });
  const [alerta, setAlerta] = useState(null);

  const [endpoint, setEndPoint] = React.useState(apiConfig.endpoints.productos.get);
  const [method, setMethod ] = React.useState("GET")
  const [valuesD,setValuesD] = React.useState(null)
  const [id, setId] = React.useState(null)

  const { data, loading, error } = useApiRequest(`${apiConfig.apiBaseURL}${endpoint}`,method,valuesD,id);


  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  React.useEffect(() => {
    if (method == "GET" && data){
      setProducts(data)
    }else{
      setMethod("GET")
    }
    
  }, [data]);

  const subirPDF = async()=>{
    const formData = new FormData();
    formData.append("pdf_file", selectedFile);

    try {
      const response = await fetch(
        "http://localhost:8000/api/sistemaSolit/upload-pdf/",
        {
          method: "POST",
          body: formData,
        });
        if(response.ok){
          //const nuevoProducto = await response.json();
          // Actualizar el estado local con el nuevo producto
          //setProducts([...products, nuevoProducto]);
          mostrarAlerta("success", "Producto agregado con éxito", "text-blue-400");
        }else{
          throw new Error("Error al agregar el producto");
        }
    
    }catch (error){
      mostrarAlerta("error", "An error occurred while uploading PDF!","text-red-400");

    }
  }


  const mostrarAlerta = (type, message, color) => {
    setAlerta(Alerta(type, message, color));
    // Establecer un temporizador para ocultar la alerta después de 3000 milisegundos (3 segundos)
    setTimeout(() => {
      setAlerta(null);
    }, 3000);
  };
    const Alerta = (type, message,color) => {
    return (
      <div
        className={`p-4 mb-4 text-sm rounded-lg ${
          type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
        } dark:bg-gray-800 dark:${color}`}
        role="alert"
      >
        <span className="font-medium">{type === "success" ? "Success" : "Error"}:</span> {message}
      </div>
    );
  };

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NOMBRE PRODUCTO", uid: "nombre_producto", sortable: true },
    { name: "MARCA", uid: "marca", sortable: true },
    { name: "MODELO", uid: "modelo" },
    { name: "STOCK", uid: "stock" },
    { name: "OBSERVACIONES", uid: "observaciones", sortable: true },
    { name: "FECHA DE INGRESO", uid: "fecha_ingreso" },
    { name: "MEDIDA", uid: "unidad_medida" },
    { name: "EMPRESA", uid: "empresa" },
    { name: "PROVEEDOR", uid: "proveedor" },
    { name: "ZONA", uid: "zona" },
    { name: "STOCK MINIMO", uid: "stock_minimo" },
    { name: "ACTIONS", uid: "actions", sortable: false },
   
  ];
  const statusOptions = [
    { name: "admin", uid: "admin" },
    { name: "fucionador", uid: "fuciondor" },
    { name: "tecnico", uid: "tecnico" },
  ];
  const initialVisibleColumns = [
    "id",
    "nombre_producto",
    "marca",
    "modelo",
    "stock",
    "observaciones",
    "fecha_ingreso",
    "stock_minimo",
    "actions"
  ];

  return (
    <>
    {loading ? (
      <div className="flex items-center justify-center">
  <Spinner color="secondary" size="lg" label="Cargando....perame" />
      </div>
    

    ) : (
      <>
      {alerta}
      <Table
        columns={columns}
        users={products}
        statusOptions={statusOptions}
        initialVisibleColumns={initialVisibleColumns}
        filterField={"nombre_producto"}
        buttonAct={
          <Button color="primary" endContent={<PlusIcon />} onPress={onOpen}>
            Subir PDF
          </Button>
        }
      ></Table>
      <Modal
        title=" "
        content={
          <>
            <div className="flex flex-col w-full">
              <Card className="max-w-full w-[340px] h-[900px]">
                <CardBody className="overflow-hidden">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab key="login" title="Crear producto">
                      <form className="flex flex-col gap-4">
                        <Input isRequired label="Nombre del producto"type="text" 
                        name="nombre_producto"
                        value={values.nombre_producto}
                        onChange={handleChange} />
                        <Input isRequired label="Marca" type="text" 
                           name="marca"
                           value={values.marca}
                           onChange={handleChange}/>
                        <Input isRequired label="Modelo" type="text"
                          name="modelo"
                          value={values.modelo}
                          onChange={handleChange}/>
                        
                        <Input isRequired label="Stock" type="text" 
                         name="stock"
                         value={values.stock}
                         onChange={handleChange}/>
                        <Input isRequired label="Observaciones" type="number" 
                         name="observaciones"
                         value={values.observaciones}
                         onChange={handleChange}/>

                          <Input isRequired label="Fecha de ingreso"type="date"
                         name="fecha_ingreso"
                         value={values.fecha_ingreso}
                         onChange={handleChange}/>

                        <Input isRequired label="undiada de medida"type="text"
                         name="unidad_medida"
                         value={values.unidad_medida}
                         onChange={handleChange}/>
                         <Input isRequired label="Empresa" type="text" 
                         name="empresa"
                         value={values.empresa}
                         onChange={handleChange}/>


                        <Input isRequired label="Proveedor" type="text" 
                         name="proveedor"
                         value={values.proveedor}
                         onChange={handleChange}/>
                        <Input isRequired label="Zona" type="text"
                         name="zona"
                         value={values.zona}
                         onChange={handleChange}/>
                        <Input isRequired label="Stock minimo" type="number" 
                         name="stock_minimo"
                         value={values.stock_minimo}
                         onChange={handleChange}/>
                        


                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary" onClick={()=>(setValuesD(values), setMethod("POST"))} onPress={onOpenChange} >
                        Crear producto

                          </Button>

                        </div>
                      </form>
                    </Tab>
                    <Tab key="sign-up" title="Subir PDF">
                      <form className="flex flex-col gap-4 h-[300px]">
                        <Input
                          isRequired
                          label="Seleccionar un archivo"
                          placeholder="Enter your name"
                          type="file"
                          accept="pdf"
                          onChange={handleFileUpload}
                        />

                        <div className="flex gap-2 justify-end">
                          <Button fullWidth color="primary" onClick={subirPDF} onPress={onOpenChange}>
                          Subir PDF
                          </Button>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </div>
          </>

        }
        onClose={onOpenChange}
        isOpen={isOpen}
        size={"sm"}
      />
    </>
    )}
    </>

  );
}

export default Products;
