import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        style={{ flex: 1 }}
                    >
                        <Picker.Item label='Monday' value='Monday'>Create</Picker.Item>
                        <Picker.Item label='Tuesday' value='Tuesday'>Create</Picker.Item>
                        <Picker.Item label='Wednesday' value='Wednesday'>Create</Picker.Item>
                        <Picker.Item label='Thursday' value='Thursday'>Create</Picker.Item>
                        <Picker.Item label='Friday' value='Friday'>Create</Picker.Item>
                        <Picker.Item label='Saturday' value='Saturday'>Create</Picker.Item>
                        <Picker.Item label='Sunday' value='Sunday'>Create</Picker.Item>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};
export default connect(mapStateToProps, {
    employeeUpdate
})(EmployeeForm);
