import styles from './login.css';
import React, {PureComponent, Fragment} from 'react'
import Base from "../Base";
import { Button ,Input ,PageHeader , Form ,Icon} from 'antd';
import 'antd/dist/antd.css'
import router from 'umi/router';


var storage = window.localStorage;
class Login extends React.Component {
    state = {
        token : false,
        loginData : 1 ,
        account : "",
        password : ""
    };
    async componentDidMount () {
        // storage.getItem("token")
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            let dataUrl = global.host + "/user/login";
            fetch(dataUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            }).then((response)=> {
                console.log(response)
                // response = response.json()
                return response.json()
            }).then((json) => {
                if (json.errno !== 0)
                {
                    alert (json.errormsg)
                    return false;
                }
                storage["token"] = json.token;
                // cookie.save('token', json.token);
                // alert(cookie.get("token"))
                router.push('/user/list');
            });


        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.formBody}>
                <h1>登录管理后台</h1>
                <Form  onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('account', {
                            rules: [{ required: true, message: 'Please input your account!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>


                </Form>

            </div>
        );
    }
}
Login = Form.create({})(Login);
export default Login;