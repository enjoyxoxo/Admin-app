import React, { useState } from 'react';
import './MainLayout.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { 
  AiOutlineDashboard, 
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { SiBrandfolder } from 'react-icons/si';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaClipboardList, FaBloggerB } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { IoIosNotifications } from 'react-icons/io';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-1 mb-0'>
            <span className='sm-logo'>ME</span>
            <span className='lg-logo'>Medu Express</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick= {({ key }) => {
             if (key == 'signout') {
             } else {
               navigate(key);
             }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'Catalog',
              icon: <AiOutlineShoppingCart className='fs-4' />,
              label: 'Catelog',
              children: [
                {
                  key: "Product",
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: "Add Product",
                },
                {
                  key: "Product-list",
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: "Color List",
                }
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <FaBloggerB className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'add-blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blogs',
                },
                {
                  key: 'blog-list',
                  icon: <FaBloggerB className='fs-4' />,
                  label: 'Blogs List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBloggerB className='fs-4' />,
                  label: 'Blog Category List',
                }
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <IoIosNotifications className='fs-4' />
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" alt="" />
              </div>
              <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <h5 className='mb-0'>Meduexpress</h5>
                <p className='mb-0'>palito0277@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link><a className="dropdown-item py-1 mb-1" style={{ "height":"auto", lineHeight: "20px" }} to="/">View Profile</a></Link>
                </li>
                <li>
                  <Link><a className="dropdown-item py-1 mb-1" style={{ "height":"auto", lineHeight: "20px" }} to="/">Sign Out</a></Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;