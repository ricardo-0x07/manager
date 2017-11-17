import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    // onLoginSuccess = () => {
    //     this.setState({ email: '', password: '', error: '', loading: false });
    // }
    onButtonPress = () => {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    // onLoginFail = (error) => {
    //     console.log(this.state);
    //     this.setState({ error: 'Authentication Failed', loading: false });
    //     console.log(error);
    // }
    renderButton = () => {
        if (this.props.loading) {
            return (
                <Spinner size="large" />
            );
        }
        return (
            <Button onPress={this.onButtonPress}>
                Log-In
            </Button>
        );
    }
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }
    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }
    render() {
        return (
            <Card>
                <CardSection >
                    <Input 
                    placeholder="john.doe@gmail.com"
                    label='Email'
                    value={this.props.email}
                    onChangeText={this.onEmailChange}
                    />
                </CardSection>
                <CardSection >
                    <Input 
                    secureTextEntry
                    placeholder="password"
                    label='Password'
                    value={this.props.password}
                    onChangeText={this.onPasswordChange}
                    />
                </CardSection>
                <Text style={styles.errorStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
const mapStateToProps = ({ auth }, ownProps) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
