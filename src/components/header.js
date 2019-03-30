
import React, {PureComponent, Fragment} from 'react'
import { Button ,Input ,PageHeader , Form ,Icon , Menu} from 'antd';
import 'antd/dist/antd.css'
import router from 'umi/router';


var storage = window.localStorage;
class Header extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    async componentDidMount () {
        // storage.getItem("token")
        console.log(this.props)
    }


    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return (
            <div >
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <Icon type="home" />首页
                    </Menu.Item>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />用户</span>}>
                        <MenuItemGroup title="查看">
                            <Menu.Item key="user/find">搜索用户</Menu.Item>
                            <Menu.Item key="user/list">用户列表</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="管理">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                    </Menu.Item>
                </Menu>


            </div>
        );
    }
}

export default Header;