import * as React from 'React'
import styled from 'styled-components'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
}

export const TextField = ({children}: TextFieldProps ) : React.JSX.Element => {
    return <input type={"text"}></input>
}