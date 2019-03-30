import styles from './login.css';
import React, {PureComponent, Fragment} from 'react'
import Base from "../Base";
import { Button ,Input ,PageHeader , Form ,Icon , Menu} from 'antd';
import 'antd/dist/antd.css'
import router from 'umi/router';
import Header from "@/components/header";


var storage = window.localStorage;
class List extends React.Component {
    state = {
        token : false,
        loginData : 1 ,
        account : "",
        password : ""
    };
    async componentDidMount () {
        // storage.getItem("token")
    }


    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return (
            <div >
                <Header/>
                <h1>用户列表</h1>

            </div>
        );
    }
}

export default List;