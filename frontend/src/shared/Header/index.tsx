import { HomeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


export function Header() {
  const [current, setCurrent] = useState('home');
  const items: MenuProps['items'] = [{
    label: <Link to="/">Home</Link>,
    icon: <HomeTwoTone/>,
    key: 'home'
  }, {
    label: <Link to="/example">Example</Link>,
    icon: <EditTwoTone/>,
    key: 'example'
  }]
  
  const onClick = (e: {key:string}) => {
    setCurrent(e.key);
  };
  return (
    <>
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
     <div className="w-100 p-3 h-100">
        <Outlet/>
     </div>
    </>
  )
}