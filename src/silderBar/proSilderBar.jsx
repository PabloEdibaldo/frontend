import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { IoHomeSharp } from "react-icons/io5";
import Foto from "../assets/playa.jpg"
import LogoEmpresa from "../assets/LogoEmpresa.png";
import { useState } from "react";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem,  DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { CableIcon, CircleDollarSignIcon, ClipboardSignatureIcon, HomeIcon, MailIcon, MenuIcon, MousePointerSquareIcon, PenBoxIcon, RssIcon, StarIcon, StoreIcon, UserRoundSearchIcon } from 'lucide-react';

function proSilderBar() {
    const [activo, setActivo] = useState(true);
    return (
        <div>
            <Navbar position="static" className='bg-sky-600' >
                <NavbarBrand>
                    <img src={LogoEmpresa} alt="" className='h-14 w-115' />
                </NavbarBrand>
             
                <NavbarContent as="div" className="items-center" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="success"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Hola "User"</p>
                                <p className="font-semibold">"Correo@example.com"</p>
                            </DropdownItem>
                            <DropdownItem key="settings">Mi cuenta</DropdownItem>
                            <DropdownItem key="team_settings">Cambiar contraseña</DropdownItem>
                            <DropdownItem key="analytics" color='danger'>Cerrar sesion</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>




            <Sidebar transitionDuration={1000} collapsedWidth={"70px"} collapsed={!activo} style={{ height: '100vh' }} image={Foto} >
                <Menu
                    menuItemStyles={{
                        button: {
                            [`&.active`]: {
                                backgroundColor: '#13395e',
                                color: '#b6c8d9',
                            },
                        }
                    }}
                >
                    {/* <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
                <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
                <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem> */}
                    <MenuItem >
                        {<MenuIcon onClick={() => {
                            setActivo(!activo);
                        }} />}
                    </MenuItem>

                    <SubMenu label='Gestion de red' icon={<HomeIcon />}>
                        <MenuItem> Routers </MenuItem>
                        <MenuItem> SmartOLT </MenuItem>
                        <MenuItem> Redes IPv4 </MenuItem>
                        <MenuItem> Monitoreo </MenuItem>
                        <MenuItem> Trafico </MenuItem>
                        <MenuItem> Ips visitadas </MenuItem>
                        <MenuItem> Monitor BlackList </MenuItem>
                    </SubMenu>
                    <SubMenu label='Servicios' icon={<StarIcon />}>
                        <MenuItem> Internet </MenuItem>
                        <MenuItem> Voz </MenuItem>
                        <MenuItem> Personalizado </MenuItem>
                    </SubMenu>
                    <SubMenu label='Clientes' icon={<UserRoundSearchIcon />} >
                        <MenuItem> Usuarios </MenuItem>
                        <MenuItem> Mapa clientes </MenuItem>
                        <MenuItem> Anuncios </MenuItem>
                        <MenuItem> Notificaciones push </MenuItem>
                        <MenuItem> Instalaciones </MenuItem>
                        <MenuItem> Contratos </MenuItem>
                        <MenuItem> Correos </MenuItem>
                    </SubMenu>
                    <SubMenu label='Fichas Hostspot' icon={<RssIcon />}>
                        <MenuItem> Fichas </MenuItem>
                        <MenuItem> Routers </MenuItem>
                        <MenuItem> Plantillas </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<PenBoxIcon />}> Tareas </MenuItem>
                    <SubMenu label='Finanzas' icon={<CircleDollarSignIcon />}>
                        <MenuItem> Facturas </MenuItem>
                        <MenuItem> Registrar pago </MenuItem>
                        <MenuItem> Registrar pagos Masivos </MenuItem>
                        <MenuItem> Transacciones </MenuItem>
                        <MenuItem> Otros ingresos y egresos </MenuItem>
                        <MenuItem> Reporte de pago </MenuItem>
                        <MenuItem> Facturacion electronica </MenuItem>
                    </SubMenu>
                    <SubMenu label='Almacen Solit' icon={<StoreIcon />}>
                        <MenuItem> Productos </MenuItem>
                    </SubMenu>
                    <SubMenu label='Tickets' icon={<ClipboardSignatureIcon />}>
                        <MenuItem> Esperando respuesta </MenuItem>
                        <MenuItem> Contestados </MenuItem>
                        <MenuItem> Cerrados </MenuItem>
                    </SubMenu>
                    <SubMenu label='Mensajeria' icon={<MailIcon />} >
                        <MenuItem> Chat whatsapp </MenuItem>
                        <MenuItem> Mensajes enviados </MenuItem>
                        <MenuItem> Mensajes recibidos </MenuItem>
                    </SubMenu>
                    <SubMenu label='Ajustes' icon={<CableIcon />}>

                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default proSilderBar;