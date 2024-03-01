import { Sidebar } from 'flowbite-react';
import React, { useState } from 'react';
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiOutlineMenu,
    HiChevronRight
} from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
function Component() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (

        <div>
            <button onClick={toggleSidebar}>
                <HiOutlineMenu size={32} />
            </button>
            {sidebarVisible && (
                <Sidebar aria-label="Sidebar with multi-level dropdown example" style={{ height: '100vh' }}>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                icon={HiShoppingBag}
                                label="E-commerce"
                                renderChevronIcon={(theme, open) => {
                                    const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                    return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                                }}
                            >
                                <Sidebar.Item href="#">Products</Sidebar.Item>
                                <Sidebar.Item href="#">Sales</Sidebar.Item>
                                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                                <Sidebar.Item href="#">Shipping</Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Item href="#" icon={HiInbox}>
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiShoppingBag}>
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                Sign In
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiTable} className="text-end">
                                Salir
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            )}
        </div>
    )
}
export default Component;



